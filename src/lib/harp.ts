import type { ScoreToken } from "../data/scores";

export const KEY_NAMES = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

export const KEY_LABELS: Record<string, string> = {
  C: "C",
  Db: "D♭",
  D: "D",
  Eb: "E♭",
  E: "E",
  F: "F",
  Gb: "G♭",
  G: "G",
  Ab: "A♭",
  A: "A",
  Bb: "B♭",
  B: "B",
};

const BLOW_MIDI = [60, 64, 67, 72, 76, 79, 84, 88, 91, 96];
const DRAW_MIDI = [62, 67, 71, 74, 77, 81, 83, 86, 89, 93];

export function keyLabel(key: string): string {
  return KEY_LABELS[key] || key;
}

export function keyOffset(key: string): number {
  const index = KEY_NAMES.indexOf(key);
  return index < 0 ? 0 : index;
}

export function harpOffset(harp: string): number {
  return keyOffset(harp) - keyOffset("C");
}

export function tokenMidi(token: ScoreToken): number | null {
  if (token.rest || token.hole <= 0) return null;
  const index = Math.max(0, Math.min(9, token.hole - 1));
  const base = token.dir === "blow" ? BLOW_MIDI[index] : DRAW_MIDI[index];
  return base - Math.abs(token.bend);
}

export function tokenMidiWithHarp(token: ScoreToken, harp: string): number | null {
  const midi = tokenMidi(token);
  return midi === null ? null : midi + harpOffset(harp);
}

export function midiToNoteName(midi: number): string {
  const name = KEY_NAMES[((midi % 12) + 12) % 12];
  const octave = Math.floor(midi / 12) - 1;
  return `${name}${octave}`;
}

export function noteNameForToken(token: ScoreToken, harp: string): string {
  const midi = tokenMidiWithHarp(token, harp);
  return midi === null ? "—" : midiToNoteName(midi);
}

export function tokenLabel(token: ScoreToken): string {
  if (token.rest || token.hole <= 0) return "休";
  const bend = token.bend === 1 ? "'" : token.bend >= 2 ? "''" : "";
  return `${token.dir === "draw" ? "-" : ""}${token.hole}${bend}`;
}

export function positionLabel(position: string): string {
  return position === "1st"
    ? "1st position"
    : position === "2nd"
      ? "2nd position"
      : position === "3rd"
        ? "3rd position"
        : "12th position";
}

export function scoreBeatsPerBar(meter: string): number {
  return meter === "3/4" ? 3 : 4;
}
