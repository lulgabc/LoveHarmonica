import type { Score } from "../data/scores";
import { midiToNoteName, scoreBeatsPerBar, tokenMidiWithHarp } from "./harp";

const LETTER_INDEX: Record<string, number> = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };

function staffPitch(midi: number): { step: number; accidental: string } {
  const name = midiToNoteName(midi).replace(/\d+$/, "");
  const octave = Math.floor(midi / 12) - 1;
  const flatMap: Record<string, string> = {
    Db: "D",
    Eb: "E",
    Gb: "G",
    Ab: "A",
    Bb: "B",
  };
  const natural = flatMap[name] || name;
  const accidental = flatMap[name] ? "♭" : "";
  return {
    step: octave * 7 + (LETTER_INDEX[natural] ?? 0),
    accidental,
  };
}

function escapeXml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function renderStaffSvg(score: Score): string {
  const beatsPerBar = scoreBeatsPerBar(score.meter);
  const barsPerSystem = 4;
  const barWidth = 160;
  const startX = 90;
  const staffTop = 54;
  const staffGap = 12;
  const systems = Math.max(1, Math.ceil(score.bars / barsPerSystem));
  const width = systems === 1 ? startX + Math.min(barsPerSystem, score.bars) * barWidth + 20 : 800;
  const height = 42 + systems * 150;
  const lines = [0, 1, 2, 3, 4].map((index) => staffTop + index * staffGap);
  const bottomLine = lines[4];
  const topLine = lines[0];
  const parts: string[] = [];

  parts.push(
    `<svg class="staff-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeXml(score.title)} 五线谱">`,
  );
  parts.push(`<rect width="${width}" height="${height}" fill="transparent"/>`);

  for (let system = 0; system < systems; system += 1) {
    const offsetY = system * 150;
    const systemBars = Math.min(barsPerSystem, score.bars - system * barsPerSystem);
    const systemWidth = systemBars * barWidth;

    lines.forEach((line) => {
      parts.push(
        `<line x1="${startX - 16}" y1="${line + offsetY}" x2="${startX + systemWidth}" y2="${line + offsetY}" stroke="#8b8172" stroke-width="0.9" opacity="0.72"/>`,
      );
    });

    parts.push(
      `<text x="18" y="${bottomLine - 4 + offsetY}" fill="#e8bf75" font-family="Georgia, serif" font-size="50">𝄞</text>`,
    );

    if (system === 0) {
      parts.push(`<text x="55" y="${lines[1] + 8}" fill="#e8bf75" font-family="Georgia, serif" font-size="18">${beatsPerBar}</text>`);
      parts.push(`<text x="55" y="${lines[3] + 8}" fill="#e8bf75" font-family="Georgia, serif" font-size="18">4</text>`);
    }

    for (let bar = 0; bar <= systemBars; bar += 1) {
      const x = startX + bar * barWidth;
      parts.push(
        `<line x1="${x}" y1="${topLine + offsetY}" x2="${x}" y2="${bottomLine + offsetY}" stroke="#8b8172" stroke-width="${bar === systemBars ? 1.7 : 0.8}" opacity="0.72"/>`,
      );
    }

    for (let bar = 0; bar < systemBars; bar += 1) {
      const x = startX + bar * barWidth + barWidth / 2;
      parts.push(
        `<text x="${x}" y="${topLine - 13 + offsetY}" text-anchor="middle" fill="#8b8172" font-family="monospace" font-size="9">${system * barsPerSystem + bar + 1}</text>`,
      );
    }
  }

  let beatCursor = 0;
  score.tokens.forEach((token) => {
    const tokenBeat = beatCursor;
    beatCursor += token.beats;
    if (token.rest) {
      const system = Math.floor(tokenBeat / (beatsPerBar * barsPerSystem));
      const localBeat = tokenBeat % (beatsPerBar * barsPerSystem);
      const barInSystem = Math.floor(localBeat / beatsPerBar);
      const beatInBar = localBeat % beatsPerBar;
      const x = startX + barInSystem * barWidth + (beatInBar / beatsPerBar) * barWidth + 14;
      const y = 84 + system * 150;
      parts.push(
        `<text x="${x}" y="${y}" fill="#9c9383" font-family="Georgia, serif" font-size="17">𝄽</text>`,
      );
      return;
    }

    const midi = tokenMidiWithHarp(token, score.harp);
    if (midi === null) return;
    const { step, accidental } = staffPitch(midi);
    const system = Math.floor(tokenBeat / (beatsPerBar * barsPerSystem));
    const localBeat = tokenBeat % (beatsPerBar * barsPerSystem);
    const barInSystem = Math.floor(localBeat / beatsPerBar);
    const beatInBar = localBeat % beatsPerBar;
    const x = startX + barInSystem * barWidth + (beatInBar / beatsPerBar) * barWidth + 10;
    const y = bottomLine - (step - 30) * (staffGap / 2) + system * 150;
    const open = token.beats >= 2;
    const stemUp = y >= 78 + system * 150;
    const stemLength = 31;

    if (step < 30) {
      for (let ledger = 28; ledger >= step; ledger -= 2) {
        const ly = bottomLine - (ledger - 30) * (staffGap / 2) + system * 150;
        if (ly > bottomLine + 1) {
          parts.push(`<line x1="${x - 10}" y1="${ly}" x2="${x + 10}" y2="${ly}" stroke="#8b8172" stroke-width="0.9" opacity="0.65"/>`);
        }
      }
    } else if (step > 38) {
      for (let ledger = 40; ledger <= step; ledger += 2) {
        const ly = bottomLine - (ledger - 30) * (staffGap / 2) + system * 150;
        if (ly < topLine - 1) {
          parts.push(`<line x1="${x - 10}" y1="${ly}" x2="${x + 10}" y2="${ly}" stroke="#8b8172" stroke-width="0.9" opacity="0.65"/>`);
        }
      }
    }

    if (accidental) {
      parts.push(
        `<text x="${x - 14}" y="${y + 4}" fill="#f2eadb" font-family="Georgia, serif" font-size="12">${accidental}</text>`,
      );
    }

    parts.push(
      `<ellipse cx="${x}" cy="${y}" rx="5.4" ry="3.9" transform="rotate(-18 ${x} ${y})" fill="${open ? "none" : "#f2eadb"}" stroke="#f2eadb" stroke-width="1.1"/>`,
    );

    if (token.beats < 4) {
      const stemX = stemUp ? x + 4.6 : x - 4.6;
      const stemY = stemUp ? y - stemLength : y + stemLength;
      parts.push(`<line x1="${stemX}" y1="${y}" x2="${stemX}" y2="${stemY}" stroke="#f2eadb" stroke-width="1.2"/>`);
      if (token.beats <= 0.5) {
        parts.push(
          `<path d="M ${stemX} ${stemY} q 10 6 10 16" fill="none" stroke="#f2eadb" stroke-width="1.2"/>`,
        );
      }
    }

    if (token.beats === 1.5 || token.beats === 3) {
      parts.push(`<circle cx="${x + 10}" cy="${y}" r="1.8" fill="#f2eadb"/>`);
    }
  });

  parts.push("</svg>");
  return parts.join("");
}
