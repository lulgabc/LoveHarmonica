import type { ScoreToken } from "../data/scores";

export interface IndexedScoreToken {
  token: ScoreToken;
  index: number;
}

export function groupTokensByBar(
  tokens: ScoreToken[],
  beatsPerBar: number,
): Array<{ bar: number; tokens: IndexedScoreToken[] }> {
  const bars: Array<{ bar: number; tokens: IndexedScoreToken[] }> = [];
  let current: IndexedScoreToken[] = [];
  let beat = 0;
  let barNumber = 1;

  tokens.forEach((token, index) => {
    current.push({ token, index });
    beat += token.beats;
    if (beat >= beatsPerBar - 0.001) {
      bars.push({ bar: barNumber, tokens: current });
      current = [];
      beat = 0;
      barNumber += 1;
    }
  });

  if (current.length) bars.push({ bar: barNumber, tokens: current });
  return bars;
}
