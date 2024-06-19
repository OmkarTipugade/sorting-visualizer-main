export function selectionSort(array) {
  const animations = [];
  const auxArray = array.slice();
  for (let i = 0; i < auxArray.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < auxArray.length; j++) {
      if (auxArray[j] < auxArray[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      animations.push([i, minIndex, "swap"]);
      [auxArray[i], auxArray[minIndex]] = [auxArray[minIndex], auxArray[i]];
    } else {
      animations.push([i, minIndex, "no-swap"]);
    }
  }
  return animations;
}
