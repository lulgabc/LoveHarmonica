/** Turn a key like "G" or "Bb" into a display string. */
export function prettyKey(key: string): string {
  return key.replace("b", "♭").replace("#", "♯");
}

/** Note name with octave, e.g. 67 -> G4. */
const NAMES = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

export function midiToName(midi: number): string {
  const name = NAMES[((midi % 12) + 12) % 12];
  const octave = Math.floor(midi / 12) - 1;
  return `${name}${octave}`;
}

export function midiToFreq(midi: number): number {
  return 440 * Math.pow(2, (midi - 69) / 12);
}
