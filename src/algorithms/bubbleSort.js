export function bubbleSort(array) {
  const animations = [];
  const auxArray = array.slice();
  for (let i = 0; i < auxArray.length - 1; i++) {
    for (let j = 0; j < auxArray.length - i - 1; j++) {
      if (auxArray[j] > auxArray[j + 1]) {
        animations.push([j, j + 1, "swap"]);
        [auxArray[j], auxArray[j + 1]] = [auxArray[j + 1], auxArray[j]];
      } else {
        animations.push([j, j + 1, "no-swap"]);
      }
    }
  }
  return animations;
}
