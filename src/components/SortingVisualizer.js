import React, { useState, useEffect } from "react";
import { bubbleSort } from "../algorithms/bubbleSort";
import { heapSort } from "../algorithms/heapSort";
import { insertionSort } from "../algorithms/insertionSort";
import { mergeSort } from "../algorithms/mergeSort";
import { quickSort } from "../algorithms/quickSort";
import { radixSort } from "../algorithms/radixSort";
import { selectionSort } from "../algorithms/selectionSort";
import Navbar from "./Navbar";
import "./SortingVisualizer.css";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const [arraySize, setArraySize] = useState(100);
  const [sortingSpeed, setSortingSpeed] = useState(10);

  useEffect(() => {
    generateNewArray();
  }, [arraySize]);

  const generateNewArray = () => {
    const array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push(Math.floor(Math.random() * 500) + 5);
    }
    setArray(array);
    document.documentElement.style.setProperty("--array-size", arraySize);
  };

  const visualizeSorting = () => {
    let animations;
    switch (algorithm) {
      case "bubbleSort":
        animations = bubbleSort(array);
        break;
      case "heapSort":
        animations = heapSort(array);
        break;
      case "insertionSort":
        animations = insertionSort(array);
        break;
      case "mergeSort":
        animations = mergeSort(array);
        break;
      case "quickSort":
        animations = quickSort(array);
        break;
      case "radixSort":
        animations = radixSort(array);
        break;
      case "selectionSort":
        animations = selectionSort(array);
        break;
      default:
        animations = bubbleSort(array);
    }

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const [barOneIdx, newHeight, action] = animations[i];

      if (barOneIdx >= arrayBars.length) continue; // Prevent out-of-bounds access

      const barOneStyle = arrayBars[barOneIdx].style;

      setTimeout(() => {
        if (action === "swap") {
          const barTwoIdx = newHeight;
          const barTwoStyle = arrayBars[barTwoIdx]?.style;
          const tempHeight = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = tempHeight;
        } else if (action === "overwrite") {
          barOneStyle.height = `${newHeight}px`;
        }
      }, i * sortingSpeed);
    }
  };

  return (
    <div className="visualizer">
      <Navbar
        onAlgorithmChange={setAlgorithm}
        onGenerateArray={generateNewArray}
        onArraySizeChange={setArraySize}
        onSortingSpeedChange={setSortingSpeed}
      />
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
            }}
          ></div>
        ))}
      </div>
      <button onClick={visualizeSorting}>
        Visualize {algorithm.split(5, 4)}{" "}
      </button>
    </div>
  );
};

export default SortingVisualizer;
