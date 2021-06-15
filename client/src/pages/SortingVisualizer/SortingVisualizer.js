import React, { Component } from 'react';
import { getMergeSortAnimations } from './sortingAlgorithms/sortingAlgorithms.js';
import { getBubbleSortAnimations } from './sortingAlgorithms/bubbleSortAnimation';
import './SortingVisualizer.css'

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 430; //430

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

class SortingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        };
        this.resetArray = this.resetArray.bind(this);
        this.mergeSort = this.mergeSort.bind(this);
        this.bubbleSort = this.bubbleSort.bind(this);
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) { //TODO FIX HARDCODED VALUES FOR NUM BARS AND BAR HEIGHT MAX
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({ array });
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        // console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    bubbleSort() {
        // console.log("in bubble sort");
        // const bubbleSortedArray = getBubbleSortAnimations(this.state.array);
        // const javaScriptSortedArray = this.state.array.slice().sort((a,b) => a-b);

        // console.log(arraysAreEqual(bubbleSortedArray, javaScriptSortedArray));
        // console.log(bubbleSortedArray);
        // console.log(javaScriptSortedArray);


        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            // console.log(animations[i]);
            const arrayBars = document.getElementsByClassName('array-bar');
            if (i % 3 === 0) { // turn the two elements red to symbolize comparing them
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            } else if (i % 3 === 2) { //turn the two red elements back to blue
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            } else { // check if we need to swap height
                if (animations[i][0] !== null) {
                    setTimeout(() => {
                        const [barOneIdx, barTwoIdx] = animations[i - 1];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        barOneStyle.height = `${animations[i][0]}px`;
                        barTwoStyle.height = `${animations[i][1]}px`;
                    }, i * ANIMATION_SPEED_MS);
                }

            }
        }

    }


    render() {
        const { array } = this.state;

        return (
            <div className="array-container">
                <div>
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{ height: `${value}px` }}>
                        </div>
                    ))}
                </div>
                <button
                    className="btn btn-info"
                    onClick={this.resetArray}>
                    Generate New Array
                </button>
                <button
                    className=" btn btn-success"
                    onClick={this.mergeSort}>
                    Merge Sort
                </button>
                <button
                    className=" btn btn-success"
                    onClick={this.bubbleSort}>
                    Bubble Sort
                </button>
            </div>
        );
    }
}

export default SortingVisualizer;


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}