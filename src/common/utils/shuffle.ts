/**
 * Shuffle supplied array using Fisher-Yates shuffle algorithm
 *
 * @see https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
 */
export function shuffle<T = any>(array: T[]): T[] {
  // Clone input array
  const arr = array.slice();

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}
