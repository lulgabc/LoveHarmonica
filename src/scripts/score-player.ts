import "./audio";

/* Score playback for the library detail pages. */

interface ScoreToken {
  hole: number;
  dir: "blow" | "draw";
  bend: number;
  beats: number;
  rest?: boolean;
}

const SCORE_KEY_NAMES = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

function keyOffset(key: string): number {
  const index = SCORE_KEY_NAMES.indexOf(key);
  return index < 0 ? 0 : index;
}

document.querySelectorAll<HTMLElement>("[data-score-player]").forEach((root) => {
  const playButton = root.querySelector<HTMLButtonElement>("[data-score-play]");
  const stopButton = root.querySelector<HTMLButtonElement>("[data-score-stop]");
  const tempoInput = root.querySelector<HTMLInputElement>("[data-score-tempo]");
  const tempoLabel = root.querySelector<HTMLElement>("[data-score-tempo-label]");
  const clickToggle = root.querySelector<HTMLInputElement>("[data-score-click]");
  const loopToggle = root.querySelector<HTMLInputElement>("[data-score-loop]");
  const status = root.querySelector<HTMLElement>("[data-score-status]");
  const dataScript = root.querySelector<HTMLScriptElement>("[data-score-tokens]");
  const tab = document.querySelector<HTMLElement>("[data-score-tab]");
  const harp = root.dataset.harp || "C";
  if (!playButton || !tempoInput || !dataScript || !tab) return;

  let tokens: ScoreToken[] = [];
  try {
    tokens = JSON.parse(dataScript.textContent || "[]");
  } catch {
    tokens = [];
  }

  const noteElements = [...tab.querySelectorAll<HTMLElement>("[data-score-note]")];
  const A = window.LHAudio;
  let playing = false;
  let bus: GainNode | null = null;
  let frame = 0;
  let endTimer = 0;
  let countInTimer = 0;
  let loopTimer = 0;
  let startTime = 0;
  let uiStart = 0;
  let beatDur = 0.5;
  let totalBeats = 0;
  let countIn = 0;

  const currentTempo = () => Number(tempoInput.value || 84);
  const offset = keyOffset(harp);

  const clearHighlights = () => {
    noteElements.forEach((note) => note.classList.remove("is-active"));
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
  };

  const stop = () => {
    playing = false;
    window.clearTimeout(endTimer);
    window.clearTimeout(countInTimer);
    window.clearTimeout(loopTimer);
    clearHighlights();
    if (bus) {
      const oldBus = bus;
      bus = null;
      try {
        oldBus.gain.setTargetAtTime(0, A.getAudioContext().currentTime, 0.015);
        window.setTimeout(() => oldBus.disconnect(), 250);
      } catch {
        /* already disconnected */
      }
    }
    if (status) status.textContent = "准备";
    playButton.textContent = "▶ 播放";
    playButton.classList.remove("is-active");
  };

  const highlight = () => {
    if (!playing) return;
    const elapsed = (performance.now() - uiStart) / (beatDur * 1000);
    let cursor = 0;
    let activeIndex = -1;
    tokens.forEach((token, index) => {
      if (!token.rest && elapsed >= cursor && elapsed < cursor + token.beats) activeIndex = index;
      cursor += token.beats;
    });
    noteElements.forEach((note) => {
      note.classList.toggle("is-active", Number(note.dataset.scoreNote) === activeIndex);
    });
    if (elapsed < 0) {
      if (status) status.textContent = "数拍…";
    } else if (status) {
      status.textContent = `播放中 · ${currentTempo()} BPM`;
    }
    frame = requestAnimationFrame(highlight);
  };

  const start = () => {
    stop();
    const bpm = currentTempo();
    beatDur = 60 / bpm;
    totalBeats = tokens.reduce((sum, token) => sum + token.beats, 0);
    countIn = 4 * beatDur;
    const ctx = A.getAudioContext();
    const noteBus = ctx.createGain();
    noteBus.connect(A.getAudioOutput());
    bus = noteBus;
    startTime = ctx.currentTime + 0.3 + countIn;
    uiStart = performance.now() + (0.3 + countIn) * 1000;

    if (clickToggle?.checked) {
      for (let i = 0; i < 4; i += 1) {
        A.playClick(ctx.currentTime + 0.15 + i * beatDur, i === 0, 1200);
      }
      for (let beat = 0; beat < totalBeats; beat += 1) {
        A.playClick(startTime + beat * beatDur, beat % 4 === 0, 1100);
      }
    }

    let cursor = 0;
    tokens.forEach((token) => {
      if (!token.rest) {
        const midi = A.harpMidi(token.hole, token.dir, token.bend) + offset;
        A.playHarpNote(midi, token.beats * beatDur * 0.92, startTime + cursor * beatDur, {
          gain: 0.15,
          vibrato: token.beats >= 1.5,
          destination: noteBus,
        });
      }
      cursor += token.beats;
    });

    playing = true;
    playButton.textContent = "■ 停止";
    playButton.classList.add("is-active");
    if (status) status.textContent = "数拍…";
    highlight();

    const total = countIn + totalBeats * beatDur + 0.8;
    endTimer = window.setTimeout(() => {
      if (!playing) return;
      if (loopToggle?.checked) {
        playing = false;
        if (bus) {
          const oldBus = bus;
          bus = null;
          oldBus.gain.setTargetAtTime(0, A.getAudioContext().currentTime, 0.02);
          window.setTimeout(() => oldBus.disconnect(), 250);
        }
        clearHighlights();
        loopTimer = window.setTimeout(start, 350);
      } else {
        stop();
      }
    }, total * 1000);
  };

  playButton.addEventListener("click", () => {
    if (playing) stop();
    else start();
  });

  stopButton?.addEventListener("click", stop);

  tempoInput.addEventListener("input", () => {
    if (tempoLabel) tempoLabel.textContent = `${currentTempo()} BPM`;
    if (playing) stop();
  });

  noteElements.forEach((note) => {
    note.addEventListener("click", () => {
      const index = Number(note.dataset.scoreNote);
      const token = tokens[index];
      if (!token || token.rest) return;
      const midi = A.harpMidi(token.hole, token.dir, token.bend) + offset;
      A.playHarpNote(midi, 0.55, undefined, { gain: 0.15 });
    });
  });
});

document.querySelector("[data-print-score]")?.addEventListener("click", () => window.print());
