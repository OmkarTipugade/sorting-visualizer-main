export function mergeSort(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxArray = array.slice();
  mergeSortHelper(auxArray, 0, auxArray.length - 1, array, animations);
  return animations;
}

function mergeSortHelper(auxArray, start, end, mainArray, animations) {
  if (start === end) return;
  const middle = Math.floor((start + end) / 2);
  mergeSortHelper(mainArray, start, middle, auxArray, animations);
  mergeSortHelper(mainArray, middle + 1, end, auxArray, animations);
  doMerge(auxArray, start, middle, end, mainArray, animations);
}

function doMerge(auxArray, start, middle, end, mainArray, animations) {
  let k = start;
  let i = start;
  let j = middle + 1;
  while (i <= middle && j <= end) {
    if (auxArray[i] <= auxArray[j]) {
      animations.push([k, auxArray[i], "overwrite"]);
      mainArray[k++] = auxArray[i++];
    } else {
      animations.push([k, auxArray[j], "overwrite"]);
      mainArray[k++] = auxArray[j++];
    }
  }
  while (i <= middle) {
    animations.push([k, auxArray[i], "overwrite"]);
    mainArray[k++] = auxArray[i++];
  }
  while (j <= end) {
    animations.push([k, auxArray[j], "overwrite"]);
    mainArray[k++] = auxArray[j++];
  }
}
