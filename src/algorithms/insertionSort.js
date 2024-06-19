export function insertionSort(array) {
  const animations = [];
  const auxArray = array.slice();
  for (let i = 1; i < auxArray.length; i++) {
    let key = auxArray[i];
    let j = i - 1;
    while (j >= 0 && auxArray[j] > key) {
      animations.push([j + 1, j, "swap"]);
      auxArray[j + 1] = auxArray[j];
      j = j - 1;
    }
    animations.push([j + 1, i, "no-swap"]);
    auxArray[j + 1] = key;
  }
  return animations;
}
