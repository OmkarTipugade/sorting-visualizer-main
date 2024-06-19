export function quickSort(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxArray = array.slice();
  quickSortHelper(auxArray, 0, auxArray.length - 1, animations);
  return animations;
}

function quickSortHelper(auxArray, start, end, animations) {
  if (start < end) {
    const pivotIndex = partition(auxArray, start, end, animations);
    quickSortHelper(auxArray, start, pivotIndex - 1, animations);
    quickSortHelper(auxArray, pivotIndex + 1, end, animations);
  }
}

function partition(auxArray, start, end, animations) {
  const pivot = auxArray[end];
  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (auxArray[j] < pivot) {
      i++;
      animations.push([i, j, "swap"]);
      [auxArray[i], auxArray[j]] = [auxArray[j], auxArray[i]];
    }
  }
  animations.push([i + 1, end, "swap"]);
  [auxArray[i + 1], auxArray[end]] = [auxArray[end], auxArray[i + 1]];
  return i + 1;
}
