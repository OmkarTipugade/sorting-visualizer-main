export function radixSort(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxArray = array.slice();
  const maxNum = Math.max(...auxArray) * 10;
  let divisor = 10;
  while (divisor < maxNum) {
    const buckets = [...Array(10)].map(() => []);
    for (let num of auxArray) {
      buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
    }
    let idx = 0;
    for (let i = 0; i < buckets.length; i++) {
      for (let num of buckets[i]) {
        animations.push([idx, num, "overwrite"]);
        auxArray[idx++] = num;
      }
    }
    divisor *= 10;
  }
  return animations;
}
