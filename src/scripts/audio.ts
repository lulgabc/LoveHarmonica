/* A tiny synthesized blues band. No samples, no network. */

type Ctx = AudioContext;

let ctx: Ctx | null = null;
let master: GainNode | null = null;
let noiseBuffer: AudioBuffer | null = null;

function getCtx(): Ctx {
  if (!ctx) {
    const AC = window.AudioContext || (window as any).webkitAudioContext;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.86;
    master.connect(ctx.destination);
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function getMaster(): GainNode {
  getCtx();
  return master as GainNode;
}

function midiToFreq(midi: number): number {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function makeNoise(context: Ctx): AudioBuffer {
  if (noiseBuffer) return noiseBuffer;
  const length = Math.floor(context.sampleRate * 0.6);
  const buffer = context.createBuffer(1, length, context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i += 1) data[i] = Math.random() * 2 - 1;
  noiseBuffer = buffer;
  return buffer;
}

export interface HarpOptions {
  gain?: number;
  vibrato?: boolean;
  bright?: number;
  pan?: number;
  destination?: AudioNode;
}

export function playHarpNote(midi: number, duration = 0.5, when?: number, options: HarpOptions = {}) {
  const context = getCtx();
  const t = when ?? context.currentTime + 0.02;
  const freq = midiToFreq(midi);
  const gainValue = options.gain ?? 0.17;
  const bright = options.bright ?? 2100;

  const out = context.createGain();
  out.gain.value = 0;

  const filter = context.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = bright;
  filter.Q.value = 1.6;

  const peak = context.createBiquadFilter();
  peak.type = "peaking";
  peak.frequency.value = 1150;
  peak.gain.value = 5;
  peak.Q.value = 1.2;

  const oscA = context.createOscillator();
  oscA.type = "sawtooth";
  oscA.frequency.setValueAtTime(freq * 1.012, t);
  oscA.frequency.exponentialRampToValueAtTime(freq, t + 0.045);
  oscA.detune.value = -4;

  const oscB = context.createOscillator();
  oscB.type = "square";
  oscB.frequency.setValueAtTime(freq * 1.012, t);
  oscB.frequency.exponentialRampToValueAtTime(freq, t + 0.045);
  oscB.detune.value = 5;
  const oscBGain = context.createGain();
  oscBGain.gain.value = 0.22;

  const sub = context.createOscillator();
  sub.type = "triangle";
  sub.frequency.setValueAtTime(freq / 2, t);
  const subGain = context.createGain();
  subGain.gain.value = 0.08;

  let lfo: OscillatorNode | null = null;
  let lfoGain: GainNode | null = null;
  if (options.vibrato !== false) {
    lfo = context.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 5.1;
    lfoGain = context.createGain();
    lfoGain.gain.setValueAtTime(0, t);
    lfoGain.gain.linearRampToValueAtTime(7, t + Math.min(0.45, duration * 0.6));
    lfo.connect(lfoGain);
    lfoGain.connect(oscA.detune);
    lfoGain.connect(oscB.detune);
  }

  const filter2 = context.createBiquadFilter();
  filter2.type = "highpass";
  filter2.frequency.value = 180;

  const panner = context.createStereoPanner();
  panner.pan.value = options.pan ?? 0;

  oscA.connect(filter);
  oscB.connect(oscBGain).connect(filter);
  sub.connect(subGain).connect(filter);
  filter.connect(peak).connect(filter2).connect(out).connect(panner).connect(options.destination ?? getMaster());

  out.gain.setValueAtTime(0, t);
  out.gain.linearRampToValueAtTime(gainValue, t + 0.014);
  out.gain.linearRampToValueAtTime(gainValue * 0.78, t + 0.08);
  out.gain.setValueAtTime(gainValue * 0.78, t + Math.max(0.09, duration - 0.06));
  out.gain.exponentialRampToValueAtTime(0.0001, t + duration + 0.09);

  // a little breath noise at the front of the note
  const noise = context.createBufferSource();
  noise.buffer = makeNoise(context);
  const noiseFilter = context.createBiquadFilter();
  noiseFilter.type = "bandpass";
  noiseFilter.frequency.value = Math.min(6000, Math.max(900, freq * 2.4));
  noiseFilter.Q.value = 0.7;
  const noiseGain = context.createGain();
  noiseGain.gain.setValueAtTime(0.035, t);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
  noise.connect(noiseFilter).connect(noiseGain).connect(panner);

  oscA.start(t);
  oscB.start(t);
  sub.start(t);
  if (lfo && lfoGain) lfo.start(t);
  noise.start(t);
  noise.stop(t + 0.12);
  const stopAt = t + duration + 0.16;
  oscA.stop(stopAt);
  oscB.stop(stopAt);
  sub.stop(stopAt);
  if (lfo) lfo.stop(stopAt);
}

export function playChord(midis: number[], when?: number, duration = 0.26, gain = 0.05) {
  midis.forEach((midi, index) => {
    playHarpNote(midi, duration, (when ?? getCtx().currentTime) + index * 0.004, {
      gain,
      vibrato: false,
      bright: 1700,
      pan: (index - 1) * 0.12,
    });
  });
}

export function playBass(midi: number, when?: number, duration = 0.42) {
  const context = getCtx();
  const t = when ?? context.currentTime;
  const osc = context.createOscillator();
  osc.type = "triangle";
  osc.frequency.value = midiToFreq(midi);
  const filter = context.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 380;
  const gain = context.createGain();
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(0.22, t + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + duration + 0.1);
  osc.connect(filter).connect(gain).connect(getMaster());
  osc.start(t);
  osc.stop(t + duration + 0.12);
}

export function playKick(when?: number) {
  const context = getCtx();
  const t = when ?? context.currentTime;
  const osc = context.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(130, t);
  osc.frequency.exponentialRampToValueAtTime(44, t + 0.1);
  const gain = context.createGain();
  gain.gain.setValueAtTime(0.28, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
  osc.connect(gain).connect(getMaster());
  osc.start(t);
  osc.stop(t + 0.18);
}

export function playSnare(when?: number, gainValue = 0.09) {
  const context = getCtx();
  const t = when ?? context.currentTime;
  const noise = context.createBufferSource();
  noise.buffer = makeNoise(context);
  const filter = context.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 1750;
  filter.Q.value = 0.8;
  const gain = context.createGain();
  gain.gain.setValueAtTime(gainValue, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.11);
  noise.connect(filter).connect(gain).connect(getMaster());
  noise.start(t);
  noise.stop(t + 0.14);

  const body = context.createOscillator();
  body.type = "triangle";
  body.frequency.value = 185;
  const bodyGain = context.createGain();
  bodyGain.gain.setValueAtTime(gainValue * 0.5, t);
  bodyGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
  body.connect(bodyGain).connect(getMaster());
  body.start(t);
  body.stop(t + 0.09);
}

export function playHat(when?: number, open = false) {
  const context = getCtx();
  const t = when ?? context.currentTime;
  const noise = context.createBufferSource();
  noise.buffer = makeNoise(context);
  const filter = context.createBiquadFilter();
  filter.type = "highpass";
  filter.frequency.value = 7400;
  const gain = context.createGain();
  const length = open ? 0.12 : 0.035;
  gain.gain.setValueAtTime(open ? 0.025 : 0.018, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + length);
  noise.connect(filter).connect(gain).connect(getMaster());
  noise.start(t);
  noise.stop(t + length + 0.02);
}

export function playClick(when?: number, accent = false, pitch = 1100) {
  const context = getCtx();
  const t = when ?? context.currentTime;
  const osc = context.createOscillator();
  osc.type = "sine";
  osc.frequency.value = accent ? pitch : pitch * 0.72;
  const gain = context.createGain();
  gain.gain.setValueAtTime(accent ? 0.075 : 0.045, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.045);
  osc.connect(gain).connect(getMaster());
  osc.start(t);
  osc.stop(t + 0.05);
}

export function playBell(when?: number) {
  const context = getCtx();
  const t = when ?? context.currentTime;
  [880, 1320, 1760].forEach((freq, index) => {
    const osc = context.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    const gain = context.createGain();
    gain.gain.setValueAtTime(0.045 / (index + 1), t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);
    osc.connect(gain).connect(getMaster());
    osc.start(t);
    osc.stop(t + 1.3);
  });
}

/* ---------- 12-bar blues engine ---------- */

const NOTES: Record<string, number> = {
  C: 48, Db: 49, D: 50, Eb: 51, E: 52, F: 53, Gb: 54, G: 55, Ab: 56, A: 57, Bb: 58, B: 59,
};

const BLUES_KEYS = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

export type BluesChord = { name: string; root: number; third: number; seventh: number };

export interface BluesEngineOptions {
  key?: string;
  bpm?: number;
  quickChange?: boolean;
  countIn?: boolean;
  volume?: number;
}

export class BluesEngine {
  key: string;
  bpm: number;
  quickChange: boolean;
  countIn: boolean;
  volume: number;
  playing = false;
  startTime = 0;
  private timer: number | null = null;
  private nextNoteTime = 0;
  private beatIndex = 0;
  private beatDur = 0.5;
  private barCount = 12;
  private scheduled: OscillatorNode[] = [];

  constructor(options: BluesEngineOptions = {}) {
    this.key = options.key ?? "G";
    this.bpm = options.bpm ?? 92;
    this.quickChange = options.quickChange ?? true;
    this.countIn = options.countIn ?? false;
    this.volume = options.volume ?? 0.85;
  }

  get beatDuration() {
    return 60 / this.bpm;
  }

  get chords(): BluesChord[] {
    const root = NOTES[this.key] ?? 55;
    return [0, 5, 7].map((offset) => {
      const r = root + offset;
      return {
        name: `${BLUES_KEYS[((r % 12) + 12) % 12]}7`,
        root: r,
        third: r + 4,
        seventh: r + 10,
      };
    });
  }

  get progression(): number[] {
    return [0, this.quickChange ? 1 : 0, 0, 0, 1, 1, 0, 0, 2, 1, 0, 2];
  }

  start() {
    if (this.playing) return;
    const context = getCtx();
    this.playing = true;
    this.beatDur = 60 / this.bpm;
    this.beatIndex = 0;
    const lead = this.countIn ? 4 * this.beatDur : 0;
    this.startTime = context.currentTime + 0.14 + lead;
    this.nextNoteTime = this.startTime;

    if (this.countIn) {
      for (let i = 0; i < 4; i += 1) {
        playClick(context.currentTime + 0.14 + i * this.beatDur, i === 0, 1200);
      }
    }

    this.timer = window.setInterval(() => this.scheduler(), 25);
    this.scheduler();
  }

  stop() {
    this.playing = false;
    if (this.timer !== null) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
    this.scheduled.forEach((osc) => {
      try {
        osc.stop();
      } catch {
        /* already stopped */
      }
    });
    this.scheduled = [];
  }

  toggle() {
    if (this.playing) this.stop();
    else this.start();
  }

  setKey(key: string) {
    this.key = key;
    if (this.playing) {
      this.stop();
      this.start();
    }
  }

  setBpm(bpm: number) {
    this.bpm = bpm;
    if (this.playing) {
      this.stop();
      this.start();
    }
  }

  setQuickChange(value: boolean) {
    this.quickChange = value;
    if (this.playing) {
      this.stop();
      this.start();
    }
  }

  currentState() {
    if (!this.playing) return { bar: -1, beat: -1, chord: "—" };
    const context = getCtx();
    const elapsed = context.currentTime - this.startTime;
    if (elapsed < 0) return { bar: -1, beat: -1, chord: "预备" };
    const beat = Math.floor(elapsed / this.beatDur) % 48;
    const bar = Math.floor(beat / 4);
    return { bar, beat: beat % 4, chord: this.chords[this.progression[bar]].name };
  }

  private scheduler() {
    if (!this.playing) return;
    const context = getCtx();
    while (this.nextNoteTime < context.currentTime + 0.22) {
      this.scheduleBeat(this.beatIndex, this.nextNoteTime);
      this.nextNoteTime += this.beatDur;
      this.beatIndex = (this.beatIndex + 1) % (this.barCount * 4);
    }
  }

  private scheduleBeat(index: number, time: number) {
    const bar = Math.floor(index / 4);
    const beat = index % 4;
    const chordIndex = this.progression[bar];
    const chord = this.chords[chordIndex];
    const rootBass = chord.root - 12;

    if (beat === 0 || beat === 2) {
      playBass(rootBass, time, this.beatDur * 0.78);
      playKick(time);
    }
    if (beat === 1 || beat === 3) {
      playSnare(time, 0.07);
      playChord([chord.third, chord.seventh, chord.root + 12], time + this.beatDur * 0.52, this.beatDur * 0.26, 0.042);
    }
    if (beat === 0) {
      playChord([chord.third, chord.seventh], time + this.beatDur * 0.66, this.beatDur * 0.2, 0.025);
    }
    if (beat === 2) {
      playChord([chord.root + 12, chord.third + 12], time + this.beatDur * 0.66, this.beatDur * 0.2, 0.022);
    }

    playHat(time, false);
    playHat(time + this.beatDur * 0.66, false);
  }
}

/* ---------- hero demo ---------- */

let demoEngine: BluesEngine | null = null;
let demoStopTimer: number | null = null;
let demoBus: GainNode | null = null;

const HERO_SOLO: Array<[number, number, number, number]> = [
  // [bar, beat, midi, duration in beats]
  [0, 0, 67, 1], [0, 1, 70, 0.5], [0, 1.5, 72, 0.5], [0, 2, 73, 0.5], [0, 2.5, 74, 1.5],
  [1, 0, 77, 1], [1, 1, 76, 0.5], [1, 1.5, 74, 0.5], [1, 2, 70, 2],
  [2, 0, 67, 1], [2, 1, 70, 0.5], [2, 1.5, 72, 0.5], [2, 2, 74, 2],
  [3, 0, 77, 1], [3, 1, 74, 1], [3, 2, 70, 2],
  [4, 0, 72, 1], [4, 1, 76, 0.5], [4, 1.5, 77, 0.5], [4, 2, 79, 2],
  [5, 0, 77, 1], [5, 1, 76, 1], [5, 2, 72, 2],
  [6, 0, 74, 1], [6, 1, 70, 1], [6, 2, 67, 2],
  [7, 0, 69, 1], [7, 1, 67, 1],
  [8, 0, 74, 0.5], [8, 0.5, 78, 0.5], [8, 1, 81, 1], [8, 2, 79, 1],
  [9, 0, 72, 0.5], [9, 0.5, 76, 0.5], [9, 1, 79, 1], [9, 2, 77, 1],
  [10, 0, 67, 1], [10, 1, 70, 1], [10, 2, 74, 1], [10, 3, 77, 1],
  [11, 0, 67, 1.5], [11, 2, 67, 0.5], [11, 2.5, 70, 0.5], [11, 3, 74, 1],
];

export function isDemoPlaying() {
  return Boolean(demoEngine?.playing);
}

export function stopDemo() {
  if (demoStopTimer !== null) {
    window.clearTimeout(demoStopTimer);
    demoStopTimer = null;
  }
  demoEngine?.stop();
  demoEngine = null;
  if (demoBus) {
    const bus = demoBus;
    demoBus = null;
    const context = getCtx();
    bus.gain.setTargetAtTime(0, context.currentTime, 0.015);
    window.setTimeout(() => {
      try {
        bus.disconnect();
      } catch {
        /* already disconnected */
      }
    }, 250);
  }
}

export function playDemo(onEnd?: () => void) {
  stopDemo();
  const context = getCtx();
  const bus = context.createGain();
  bus.connect(getMaster());
  demoBus = bus;
  const engine = new BluesEngine({ key: "G", bpm: 92, quickChange: true, countIn: false });
  demoEngine = engine;
  engine.start();
  const beatDur = engine.beatDuration;

  HERO_SOLO.forEach(([bar, beat, midi, duration]) => {
    const when = engine.startTime + (bar * 4 + beat) * beatDur;
    playHarpNote(midi, duration * beatDur * 0.92, when, {
      gain: 0.135,
      vibrato: duration >= 1,
      pan: 0.08,
      destination: bus,
    });
  });

  const total = 12 * 4 * beatDur + 0.6;
  demoStopTimer = window.setTimeout(() => {
    engine.stop();
    demoEngine = null;
    if (demoBus) {
      const finishedBus = demoBus;
      demoBus = null;
      finishedBus.gain.setTargetAtTime(0, getCtx().currentTime, 0.02);
      window.setTimeout(() => {
        try {
          finishedBus.disconnect();
        } catch {
          /* already disconnected */
        }
      }, 250);
    }
    if (onEnd) onEnd();
  }, total * 1000);

  return total;
}

/* ---------- harp tab helpers ---------- */

const BLOW_MIDI = [60, 64, 67, 72, 76, 79, 84, 88, 91, 96];
const DRAW_MIDI = [62, 67, 71, 74, 77, 81, 83, 86, 89, 93];

export function harpMidi(hole: number, direction: "blow" | "draw", bend = 0): number {
  const index = Math.max(0, Math.min(9, hole - 1));
  const base = direction === "blow" ? BLOW_MIDI[index] : DRAW_MIDI[index];
  return base - Math.abs(bend);
}

export function harpNoteName(hole: number, direction: "blow" | "draw", bend = 0): string {
  const midi = harpMidi(hole, direction, bend);
  const names = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
  return names[((midi % 12) + 12) % 12];
}

export function playHarpHole(hole: number, direction: "blow" | "draw", bend = 0, transpose = 0) {
  playHarpNote(harpMidi(hole, direction, bend) + transpose, 0.7, undefined, { gain: 0.16 });
}

export function getAudioContext() {
  return getCtx();
}

declare global {
  interface Window {
    LHAudio: {
      playHarpNote: typeof playHarpNote;
      playChord: typeof playChord;
      playBass: typeof playBass;
      playKick: typeof playKick;
      playSnare: typeof playSnare;
      playHat: typeof playHat;
      playClick: typeof playClick;
      playBell: typeof playBell;
      playHarpHole: typeof playHarpHole;
      playDemo: typeof playDemo;
      stopDemo: typeof stopDemo;
      isDemoPlaying: typeof isDemoPlaying;
      BluesEngine: typeof BluesEngine;
      harpMidi: typeof harpMidi;
      harpNoteName: typeof harpNoteName;
      getAudioContext: typeof getAudioContext;
      getAudioOutput: typeof getMaster;
    };
  }
}

window.LHAudio = {
  playHarpNote,
  playChord,
  playBass,
  playKick,
  playSnare,
  playHat,
  playClick,
  playBell,
  playHarpHole,
  playDemo,
  stopDemo,
  isDemoPlaying,
  BluesEngine,
  harpMidi,
  harpNoteName,
  getAudioContext,
  getAudioOutput: getMaster,
};
