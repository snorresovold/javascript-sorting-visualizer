import React, { useState, useEffect } from 'react'
import "./SortingVisualizer.css"
import {getMergeSortAnimations} from '../SortingAlgorithms/SorthingAlgorithms';

function SortingVisualizer() {
    const [array, setArray] = useState([])
    const [barColor, setBarColor] = useState(null)

    // Change this value for the speed of the animations.
    const ANIMATION_SPEED_MS = 1;

    // Change this value for the number of bars (value) in the array.
    const NUMBER_OF_ARRAY_BARS = 310;

    // This is the main color of the array bars.
    const PRIMARY_COLOR = 'turquoise';

    // This is the color of array bars that are being compared throughout the animations.
    const SECONDARY_COLOR = 'red';
    

    useEffect(() => {
        resetArray()
    }, [])

    function randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)); //takes the min and max value and returns random ints between
    }

    function resetArray() { //creates a new random array
        const temp_array:any = []; //this is any because i couldn't get it to work with number
        for (let i = 0;i < 100;i++){
                temp_array.push(randomIntFromInterval(5, 730));
            }
            //console.log(temp_array)
            setArray(temp_array)
    }

    function mergeSort() {
        const animations = getMergeSortAnimations(array);
    }
  
    function arraysAreEqual(arrayOne: Array<number>, arrayTwo: Array<number>) {
        if (arrayOne.length !== arrayTwo.length) return false;
        for (let i = 0; i < arrayOne.length; i++) {
          if (arrayOne[i] !== arrayTwo[i]) {
            return false;
          }
        }
        return true;
      }
    function testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
          const array = [];
          const length = randomIntFromInterval(1, 1000);
          for (let i = 0; i < length; i++) {
            array.push(randomIntFromInterval(-1000, 1000));
          }
          const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
          const mergeSortedArray = getMergeSortAnimations(array.slice());
          console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
        }
      }

    return (
        <div className='array-container'>
            {array.map((value, idx) =>( //idx is to remove the warning from the console
                <div className='array-bar' 
                key={idx} 
                style={{height: `${value}px`}}></div>
            ))}
            <button onClick={resetArray}>Generate New Array</button>
            <button onClick={mergeSort}>Mergesort</button>
        </div>
    )
}

export default SortingVisualizer;