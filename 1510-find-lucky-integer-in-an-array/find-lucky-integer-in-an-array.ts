function findLucky(arr: number[]): number {
  const freqM = new Map<number, number>();

  for (const num of arr) {
    freqM.set(num, (freqM.get(num) || 0) + 1);
  }

  let result = -1;
  for (const [num, freq] of freqM.entries()) {
    if (num === freq) {
      result = Math.max(result, num);
    }
  }

  return result;
};