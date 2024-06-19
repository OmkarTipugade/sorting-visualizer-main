import React from "react";

const Navbar = ({
  onAlgorithmChange,
  onGenerateArray,
  onArraySizeChange,
  onSortingSpeedChange,
}) => {
  return (
    <div className="navbar rounded container">
      <button onClick={onGenerateArray}>Generate New Array</button>
      <label className="mx-1">
        Array Size:
        <input
          type="number"
          min="10"
          max="200"
          defaultValue="100"
          onChange={(e) => onArraySizeChange(Number(e.target.value))}
          className="rounded"
        />
      </label>
      <label className="mx-1">
        Sorting Speed (ms):
        <input
          type="number"
          min="1"
          max="3000"
          defaultValue="10"
          onChange={(e) => onSortingSpeedChange(Number(e.target.value))}
          className="rounded"
          id="input-speed"
        />
      </label>
      <select
        onChange={(e) => onAlgorithmChange(e.target.value)}
        className="rounded mx-1 px-1"
        id="algorithm-select"
      >
        <option value="bubbleSort" key={0}>
          Bubble Sort
        </option>
        <option value="heapSort" key={1}>
          Heap Sort
        </option>
        <option value="insertionSort" key={2}>
          Insertion Sort
        </option>
        <option value="mergeSort" key={3}>
          Merge Sort
        </option>
        <option value="quickSort" key={4}>
          Quick Sort
        </option>
        <option value="radixSort" key={5}>
          Radix Sort
        </option>
        <option value="selectionSort" key={6}>
          Selection Sort
        </option>
      </select>
    </div>
  );
};

export default Navbar;
