export function heapSort(array) {
  const animations = [];
  const auxArray = array.slice();
  const n = auxArray.length;

  const heapify = (n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && auxArray[left] > auxArray[largest]) {
      largest = left;
    }
    if (right < n && auxArray[right] > auxArray[largest]) {
      largest = right;
    }
    if (largest !== i) {
      animations.push([i, largest, "swap"]);
      [auxArray[i], auxArray[largest]] = [auxArray[largest], auxArray[i]];
      heapify(n, largest);
    } else {
      animations.push([i, largest, "no-swap"]);
    }
  };

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(n, i);
  }
  for (let i = n - 1; i > 0; i--) {
    animations.push([0, i, "swap"]);
    [auxArray[0], auxArray[i]] = [auxArray[i], auxArray[0]];
    heapify(i, 0);
  }

  return animations;
}
