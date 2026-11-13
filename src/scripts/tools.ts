/* Interactive practice room: demo, harp map, jam track, metronome, timer, key finder and tabs. */

type Audio = Window["LHAudio"];

function audio(): Audio {
  return window.LHAudio;
}

const KEY_NAMES = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const KEY_LABELS: Record<string, string> = {
  C: "C", Db: "D♭", D: "D", Eb: "E♭", E: "E", F: "F", Gb: "G♭", G: "G", Ab: "A♭", A: "A", Bb: "B♭", B: "B",
};

function keyIndex(key: string): number {
  return KEY_NAMES.indexOf(key);
}

function keyFromIndex(index: number): string {
  return KEY_NAMES[((index % 12) + 12) % 12];
}

function secondPositionHarp(songKey: string): string {
  return keyFromIndex(keyIndex(songKey) + 5);
}

function secondPositionSong(harpKey: string): string {
  return keyFromIndex(keyIndex(harpKey) + 7);
}

function keyLabel(key: string): string {
  return KEY_LABELS[key] || key;
}

/* ---------- hero demo ---------- */

const demoButtons = [...document.querySelectorAll<HTMLButtonElement>("[data-demo]")];
let demoToken = 0;

demoButtons.forEach((button) => {
  const label = button.querySelector<HTMLElement>("[data-demo-label]");
  button.addEventListener("click", () => {
    const A = audio();
    if (A.isDemoPlaying()) {
      A.stopDemo();
      button.classList.remove("is-playing");
      button.setAttribute("aria-pressed", "false");
      if (label) label.textContent = "听 12 小节蓝调";
      demoToken += 1;
      return;
    }
    demoToken += 1;
    const token = demoToken;
    button.classList.add("is-playing");
    button.setAttribute("aria-pressed", "true");
    if (label) label.textContent = "正在播放 · G 蓝调";
    A.playDemo(() => {
      if (token !== demoToken) return;
      button.classList.remove("is-playing");
      button.setAttribute("aria-pressed", "false");
      if (label) label.textContent = "听 12 小节蓝调";
    });
  });
});

/* ---------- harp map ---------- */

const BLOW_NOTES = ["C", "E", "G", "C", "E", "G", "C", "E", "G", "C"];
const DRAW_NOTES = ["D", "G", "B", "D", "F", "A", "B", "D", "F", "A"];
const BLOW_BENDS: Record<number, number[]> = { 7: [1], 8: [1], 9: [1], 10: [1, 2] };
const DRAW_BENDS: Record<number, number[]> = { 1: [1], 2: [1, 2], 3: [1, 2], 4: [1], 5: [1], 6: [1] };

function noteWithOffset(note: string, offset: number): string {
  const idx = keyIndex(note);
  return keyFromIndex(idx + offset);
}

function renderHarpMap(map: HTMLElement, key: string, showBends: boolean) {
  const offset = keyIndex(key) - keyIndex("C");
  const rows: Array<{ label: string; notes: string[]; bends: Record<number, number[]>; dir: "blow" | "draw" }> = [
    { label: "Blow", notes: BLOW_NOTES, bends: BLOW_BENDS, dir: "blow" },
    { label: "Draw", notes: DRAW_NOTES, bends: DRAW_BENDS, dir: "draw" },
  ];
  const html = rows
    .map((row) => {
      const cells = row.notes
        .map((note, index) => {
          const hole = index + 1;
          const transposed = noteWithOffset(note, offset);
          const bendMarkup = showBends
            ? (row.bends[hole] || [])
                .map((semitones) => {
                  const bent = noteWithOffset(note, offset - semitones);
                  return `<button type="button" class="harp-bend" data-hole="${hole}" data-dir="${row.dir}" data-bend="${semitones}">${bent}<span class="sr-only">，第 ${hole} 孔${row.dir === "blow" ? "吹" : "吸"}压 ${semitones} 个半音</span></button>`;
                })
                .join("")
            : "";
          return `<div class="harp-map-hole" data-root="${hole === 2 && row.dir === "draw" ? "true" : "false"}">
            <button type="button" class="harp-note" data-hole="${hole}" data-dir="${row.dir}" data-bend="0">
              <span class="hole-num">${hole}</span>
              <span class="note-name">${transposed}</span>
              <span class="sr-only">第 ${hole} 孔${row.dir === "blow" ? "吹" : "吸"}</span>
            </button>
            ${bendMarkup ? `<span class="harp-bends">${bendMarkup}</span>` : ""}
          </div>`;
        })
        .join("");
      return `<div class="harp-map-row"><div class="harp-map-row-label">${row.label}</div>${cells}</div>`;
    })
    .join("");
  map.innerHTML = html;
}

document.querySelectorAll<HTMLElement>("[data-harp-map]").forEach((root) => {
  const map = root.querySelector<HTMLElement>("[data-harp-grid]");
  const keySelect = root.querySelector<HTMLSelectElement>("[data-harp-key]");
  const bendToggle = root.querySelector<HTMLInputElement>("[data-harp-bends]");
  const rootLabel = root.querySelector<HTMLElement>("[data-harp-root-label]");
  if (!map || !keySelect) return;

  const update = () => {
    const key = keySelect.value || "C";
    renderHarpMap(map, key, bendToggle?.checked ?? true);
    if (rootLabel) rootLabel.textContent = `2 孔吸音 = ${keyLabel(secondPositionSong(key))}（2nd position）`;
  };

  keySelect.addEventListener("change", update);
  bendToggle?.addEventListener("change", update);

  map.addEventListener("click", (event) => {
    const target = (event.target as HTMLElement).closest<HTMLElement>("[data-hole]");
    if (!target) return;
    const hole = Number(target.dataset.hole);
    const dir = target.dataset.dir as "blow" | "draw";
    const bend = Number(target.dataset.bend || 0);
    audio().playHarpHole(hole, dir, bend, 0);
  });

  update();
});

/* ---------- jam machine ---------- */

document.querySelectorAll<HTMLElement>("[data-jam]").forEach((root) => {
  const keySelect = root.querySelector<HTMLSelectElement>("[data-jam-key]");
  const bpmInput = root.querySelector<HTMLInputElement>("[data-jam-bpm]");
  const bpmLabel = root.querySelector<HTMLElement>("[data-jam-bpm-label]");
  const quickToggle = root.querySelector<HTMLInputElement>("[data-jam-quick]");
  const countToggle = root.querySelector<HTMLInputElement>("[data-jam-count]");
  const playButton = root.querySelector<HTMLButtonElement>("[data-jam-play]");
  const grid = root.querySelector<HTMLElement>("[data-jam-grid]");
  const barLabel = root.querySelector<HTMLElement>("[data-jam-bar]");
  const chordLabel = root.querySelector<HTMLElement>("[data-jam-chord]");
  const pulse = root.querySelector<HTMLElement>("[data-jam-pulse]");
  const harpLabel = root.querySelector<HTMLElement>("[data-jam-harp]");
  if (!keySelect || !grid || !playButton) return;

  let engine: InstanceType<Audio["BluesEngine"]> | null = null;
  let frame = 0;

  const engineOptions = () => ({
    key: keySelect.value || "G",
    bpm: Number(bpmInput?.value || 92),
    quickChange: quickToggle?.checked ?? true,
    countIn: countToggle?.checked ?? true,
  });

  const createEngine = (options = engineOptions()) => new (audio().BluesEngine)(options);

  const drawGrid = () => {
    const temp = createEngine();
    const progression = temp.progression;
    grid.innerHTML = progression
      .map((chordIndex, bar) => {
        const chord = temp.chords[chordIndex];
        return `<button type="button" class="jam-bar" data-bar="${bar}">
          <span class="bar-num">${bar + 1}</span>
          <span class="bar-chord">${chord.name}</span>
          <span class="sr-only">第 ${bar + 1} 小节</span>
        </button>`;
      })
      .join("");
    if (harpLabel) harpLabel.textContent = `${keyLabel(secondPositionHarp(keySelect.value))} 调口琴 · 2nd position`;
  };

  const updateBpm = () => {
    if (!bpmInput) return;
    const bpm = Number(bpmInput.value);
    if (bpmLabel) bpmLabel.textContent = String(bpm);
    if (engine?.playing) {
      engine.setBpm(bpm);
    }
  };

  const stop = () => {
    engine?.stop();
    engine = null;
    playButton.classList.remove("is-active");
    playButton.textContent = "▶ 播放伴奏";
    if (pulse) pulse.classList.remove("is-on");
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    grid.querySelectorAll(".jam-bar").forEach((bar) => bar.classList.remove("is-current", "is-next"));
    if (barLabel) barLabel.textContent = "—";
    if (chordLabel) chordLabel.textContent = "待开始";
  };

  const animate = () => {
    if (!engine?.playing) return;
    const state = engine.currentState();
    if (state.bar >= 0) {
      grid.querySelectorAll<HTMLElement>(".jam-bar").forEach((bar, index) => {
        bar.classList.toggle("is-current", index === state.bar);
        bar.classList.toggle("is-next", index === (state.bar + 1) % 12);
      });
      if (barLabel) barLabel.textContent = `${state.bar + 1} / 12`;
      if (chordLabel) chordLabel.textContent = state.chord;
      if (pulse) pulse.classList.toggle("is-on", state.beat === 0 || state.beat === 2);
    } else {
      if (barLabel) barLabel.textContent = "预备";
      if (chordLabel) chordLabel.textContent = "数拍…";
    }
    frame = requestAnimationFrame(animate);
  };

  drawGrid();

  keySelect.addEventListener("change", () => {
    const wasPlaying = engine?.playing;
    if (wasPlaying) stop();
    drawGrid();
    if (wasPlaying) playButton.click();
  });
  bpmInput?.addEventListener("input", updateBpm);
  quickToggle?.addEventListener("change", () => {
    if (engine?.playing) {
      stop();
      playButton.click();
    } else {
      drawGrid();
    }
  });

  playButton.addEventListener("click", () => {
    if (engine?.playing) {
      stop();
      return;
    }
    engine = createEngine();
    engine.start();
    playButton.classList.add("is-active");
    playButton.textContent = "■ 停止伴奏";
    animate();
  });

  grid.addEventListener("click", (event) => {
    const bar = (event.target as HTMLElement).closest<HTMLElement>("[data-bar]");
    if (!bar) return;
    // A small audition of the chord in that bar.
    const temp = createEngine();
    const chordIndex = temp.progression[Number(bar.dataset.bar)];
    const chord = temp.chords[chordIndex];
    audio().playChord([chord.third, chord.seventh, chord.root + 12], undefined, 0.55, 0.06);
  });

  updateBpm();
});

/* ---------- metronome ---------- */

document.querySelectorAll<HTMLElement>("[data-metronome]").forEach((root) => {
  const bpmLabel = root.querySelector<HTMLElement>("[data-metro-bpm]");
  const range = root.querySelector<HTMLInputElement>("[data-metro-range]");
  const toggle = root.querySelector<HTMLButtonElement>("[data-metro-toggle]");
  const tap = root.querySelector<HTMLButtonElement>("[data-metro-tap]");
  const dots = [...root.querySelectorAll<HTMLElement>("[data-metro-dot]")];
  const accentToggle = root.querySelector<HTMLInputElement>("[data-metro-accent]");
  const shuffleToggle = root.querySelector<HTMLInputElement>("[data-metro-shuffle]");
  if (!bpmLabel || !range || !toggle) return;

  let bpm = Number(range.value || 92);
  let beat = 0;
  let timer = 0;
  let playing = false;
  const taps: number[] = [];

  const setBpm = (value: number) => {
    bpm = Math.max(40, Math.min(208, Math.round(value)));
    range.value = String(bpm);
    bpmLabel.textContent = String(bpm);
  };

  const tick = () => {
    if (!playing) return;
    const accent = accentToggle?.checked ? beat === 1 || beat === 3 : beat === 0;
    audio().playClick(undefined, accent, 1250);
    if (shuffleToggle?.checked) {
      const ctx = audio().getAudioContext();
      audio().playHat(ctx.currentTime + (60 / bpm) * 0.66, false);
    }
    dots.forEach((dot, index) => dot.classList.toggle("is-on", index === beat));
    beat = (beat + 1) % 4;
    timer = window.setTimeout(tick, (60 / bpm) * 1000);
  };

  const start = () => {
    playing = true;
    beat = 0;
    toggle.classList.add("is-active");
    toggle.textContent = "■ 停止";
    tick();
  };

  const stop = () => {
    playing = false;
    window.clearTimeout(timer);
    toggle.classList.remove("is-active");
    toggle.textContent = "▶ 开始";
    dots.forEach((dot) => dot.classList.remove("is-on"));
  };

  toggle.addEventListener("click", () => {
    if (playing) stop();
    else start();
  });

  range.addEventListener("input", () => {
    setBpm(Number(range.value));
    if (playing) {
      window.clearTimeout(timer);
      tick();
    }
  });

  tap?.addEventListener("click", () => {
    const now = performance.now();
    taps.push(now);
    while (taps.length > 5) taps.shift();
    if (taps.length >= 2) {
      const intervals = taps.slice(1).map((t, i) => t - taps[i]);
      const avg = intervals.reduce((a, b) => a + b, 0) / intervals.length;
      if (avg > 250 && avg < 1500) setBpm(60000 / avg);
    }
  });

  setBpm(bpm);
});

/* ---------- practice timer ---------- */

document.querySelectorAll<HTMLElement>("[data-timer]").forEach((root) => {
  const display = root.querySelector<HTMLElement>("[data-timer-display]");
  const segments = [...root.querySelectorAll<HTMLElement>("[data-timer-segment]")];
  const toggle = root.querySelector<HTMLButtonElement>("[data-timer-toggle]");
  const reset = root.querySelector<HTMLButtonElement>("[data-timer-reset]");
  if (!display || !segments.length || !toggle) return;

  const total = segments.reduce((sum, segment) => sum + Number(segment.dataset.minutes || 0), 0);
  let remaining = total * 60;
  let running = false;
  let interval = 0;
  let segmentIndex = 0;

  const segmentEnds: number[] = [];
  let cursor = 0;
  segments.forEach((segment) => {
    cursor += Number(segment.dataset.minutes || 0) * 60;
    segmentEnds.push(cursor);
  });

  const format = (seconds: number) => {
    const m = Math.floor(Math.max(0, seconds) / 60);
    const s = Math.max(0, seconds) % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const render = () => {
    display.textContent = format(remaining);
    const elapsed = total * 60 - remaining;
    segmentIndex = Math.min(segments.length - 1, segmentEnds.findIndex((end) => elapsed < end));
    if (segmentIndex < 0) segmentIndex = segments.length - 1;
    segments.forEach((segment, index) => segment.classList.toggle("is-active", index === segmentIndex));
  };

  const stop = () => {
    running = false;
    window.clearInterval(interval);
    toggle.textContent = "▶ 开始练习";
    toggle.classList.remove("is-active");
  };

  const tick = () => {
    remaining -= 1;
    if (remaining <= 0) {
      remaining = 0;
      render();
      audio().playBell();
      stop();
      return;
    }
    if (remaining < total * 60 && segmentEnds.includes(total * 60 - remaining)) {
      audio().playBell();
    }
    render();
  };

  toggle.addEventListener("click", () => {
    if (running) {
      stop();
      return;
    }
    if (remaining <= 0) remaining = total * 60;
    running = true;
    toggle.textContent = "❚❚ 暂停";
    toggle.classList.add("is-active");
    interval = window.setInterval(tick, 1000);
  });

  reset?.addEventListener("click", () => {
    stop();
    remaining = total * 60;
    segmentIndex = 0;
    render();
  });

  render();
});

/* ---------- key finder ---------- */

document.querySelectorAll<HTMLElement>("[data-keyfinder]").forEach((root) => {
  const songLabel = root.querySelector<HTMLElement>("[data-kf-song]");
  const harpLabel = root.querySelector<HTMLElement>("[data-kf-harp]");
  const note = root.querySelector<HTMLElement>("[data-kf-note]");
  const buttons = [...root.querySelectorAll<HTMLButtonElement>("[data-kf-key]")];
  if (!songLabel || !harpLabel) return;

  const update = (songKey: string) => {
    const harp = secondPositionHarp(songKey);
    songLabel.textContent = keyLabel(songKey);
    harpLabel.textContent = keyLabel(harp);
    if (note) note.textContent = `${keyLabel(harp)} 调口琴 · 2 孔吸音 = ${keyLabel(songKey)}（2nd position 根音）`;
    buttons.forEach((button) => button.classList.toggle("is-active", button.dataset.kfKey === songKey));
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => update(button.dataset.kfKey || "G"));
  });

  update(buttons.find((button) => button.classList.contains("is-active"))?.dataset.kfKey || "G");
});

/* ---------- tab players ---------- */

interface TabToken {
  hole: number;
  dir: "blow" | "draw";
  bend: number;
  beats: number;
}

let activeTab: { card: HTMLElement; stop: () => void } | null = null;

document.querySelectorAll<HTMLElement>("[data-lick-card]").forEach((card) => {
  const line = card.querySelector<HTMLElement>("[data-tab-line]");
  const play = card.querySelector<HTMLButtonElement>("[data-lick-play]");
  const stopButton = card.querySelector<HTMLButtonElement>("[data-lick-stop]");
  const status = card.querySelector<HTMLElement>("[data-lick-status]");
  if (!line || !play) return;

  const notes = [...line.querySelectorAll<HTMLButtonElement>("[data-tab-note]")];
  const tempoInput = document.querySelector<HTMLInputElement>("[data-tab-tempo]");
  let frame = 0;
  let bus: GainNode | null = null;

  const currentTempo = () => Number(tempoInput?.value || 84);

  const clear = () => {
    notes.forEach((note) => note.classList.remove("is-active"));
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
  };

  const stop = () => {
    clear();
    if (status) status.textContent = "准备";
    play.classList.remove("is-active");
    play.textContent = "▶ 播放";
    if (bus) {
      const oldBus = bus;
      bus = null;
      try {
        oldBus.gain.setTargetAtTime(0, audio().getAudioContext().currentTime, 0.015);
        window.setTimeout(() => oldBus.disconnect(), 250);
      } catch {
        /* already disconnected */
      }
    }
    if (activeTab?.card === card) activeTab = null;
  };

  const playTab = () => {
    if (activeTab?.card === card) {
      activeTab.stop();
      activeTab = null;
      return;
    }
    activeTab?.stop();
    const A = audio();
    const ctx = A.getAudioContext();
    const beatDur = 60 / currentTempo();
    const countIn = beatDur;
    const start = ctx.currentTime + 0.3 + countIn;
    const noteBus = ctx.createGain();
    noteBus.connect(A.getAudioOutput());
    bus = noteBus;
    const tokens: TabToken[] = notes.map((note) => ({
      hole: Number(note.dataset.hole),
      dir: (note.dataset.dir as "blow" | "draw") || "draw",
      bend: Number(note.dataset.bend || 0),
      beats: Number(note.dataset.beats || 1),
    }));

    let cursor = 0;
    tokens.forEach((token) => {
      const midi = A.harpMidi(token.hole, token.dir, token.bend);
      A.playHarpNote(midi, token.beats * beatDur * 0.9, start + cursor * beatDur, {
        gain: 0.14,
        vibrato: token.beats >= 1.5,
        destination: noteBus,
      });
      cursor += token.beats;
    });

    // one soft count-in click before the phrase
    A.playClick(ctx.currentTime + 0.15, true, 1300);
    if (status) status.textContent = "播放中";
    play.classList.add("is-active");
    play.textContent = "■ 停止";

    const total = countIn + cursor * beatDur + 0.5;
    const startMs = performance.now();
    const animate = () => {
      const elapsed = (ctx.currentTime - start) / beatDur;
      let activeIndex = -1;
      let cursorBeats = 0;
      tokens.forEach((token, index) => {
        if (elapsed >= cursorBeats && elapsed < cursorBeats + token.beats) activeIndex = index;
        cursorBeats += token.beats;
      });
      notes.forEach((note, index) => note.classList.toggle("is-active", index === activeIndex));
      if (performance.now() - startMs < total * 1000) {
        frame = requestAnimationFrame(animate);
      } else {
        stop();
      }
    };
    frame = requestAnimationFrame(animate);

    activeTab = { card, stop };
  };

  play.addEventListener("click", playTab);
  stopButton?.addEventListener("click", stop);

  notes.forEach((note) => {
    note.addEventListener("click", () => {
      const A = audio();
      A.playHarpNote(
        A.harpMidi(Number(note.dataset.hole), (note.dataset.dir as "blow" | "draw") || "draw", Number(note.dataset.bend || 0)),
        0.55,
        undefined,
        { gain: 0.15 },
      );
    });
  });

  if (status) status.textContent = "准备";
});

const tabTempo = document.querySelector<HTMLInputElement>("[data-tab-tempo]");
const tabTempoLabel = document.querySelector<HTMLElement>("[data-tab-tempo-label]");
if (tabTempo && tabTempoLabel) {
  const update = () => {
    tabTempoLabel.textContent = `${tabTempo.value} BPM`;
  };
  tabTempo.addEventListener("input", update);
  update();
}
