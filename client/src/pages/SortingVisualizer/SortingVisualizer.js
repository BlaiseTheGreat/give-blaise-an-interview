import React, { Component } from 'react';
import { getMergeSortAnimations } from './sortingAlgorithms/sortingAlgorithms.js';
import { getBubbleSortAnimations } from './sortingAlgorithms/bubbleSortAnimation';
import './SortingVisualizer.css'


// Change this value for the speed of the animations.
const ANIMATION_SPEED_DELAY = 1;

// Change this value for the number of bars (value) in the array.
let NUMBER_OF_ARRAY_BARS = 20; // number will be overwritten by dynamic values now

let HEIGHT_OF_ARRAY_BARS = 730; // number will be overwritten by dynamic values now

// This is the main color of the array bars.
// const PRIMARY_COLOR = 'turquoise';
const PRIMARY_COLOR = '#2ec4b6';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


class SortingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            width: window.innerWidth,
            height: window.innerHeight,
            delay: 1,
            delayIdx: 2,
            delayName: "Medium"
        };
        this.resetArray = this.resetArray.bind(this);
        this.mergeSort = this.mergeSort.bind(this);
        this.bubbleSort = this.bubbleSort.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        this.resetArray();
    }

    componentWillUnmount() {
        let id = window.setTimeout(function () { }, 0);

        while (id--) {
            window.clearTimeout(id); // will do nothing if no timeout with id is present
        }
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    async resetArray() {
        await this.updateWindowDimensions();
        const array = [];
        console.log(this.state.width);
        NUMBER_OF_ARRAY_BARS = this.state.width / 4 - 50;
        HEIGHT_OF_ARRAY_BARS = this.state.height - 270;
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) { //TODO FIX HARDCODED VALUES FOR NUM BARS AND BAR HEIGHT MAX
            array.push(randomIntFromInterval(5, HEIGHT_OF_ARRAY_BARS));
        }
        let id = window.setTimeout(function () { }, 0);

        while (id--) {
            window.clearTimeout(id); // will do nothing if no timeout with id is present
        }
        this.setState({ array });
    }

    mergeSort() {


        const animations = getMergeSortAnimations(this.state.array);
        // console.log(animations);
        //console.log(animations.length);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            if (!arrayBars) return;
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.delay);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    // if (!arrayBars[barOneIdx]) return; //Gunnar added with me to fix error with breaking when leaving
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * this.state.delay);
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
                }, i * this.state.delay);
            } else if (i % 3 === 2) { //turn the two red elements back to blue
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, i * this.state.delay);
            } else { // check if we need to swap height
                if (animations[i][0] !== null) {
                    setTimeout(() => {
                        const [barOneIdx, barTwoIdx] = animations[i - 1];
                        // if (!arrayBars[barOneIdx]) return; //Gunnar added with me to fix error with breaking when leaving
                        const barOneStyle = arrayBars[barOneIdx].style;
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        barOneStyle.height = `${animations[i][0]}px`;
                        barTwoStyle.height = `${animations[i][1]}px`;
                    }, i * this.state.delay);
                }

            }
        }

    }

    async incrementSortSpeed(goFaster) { //if true, go faster / make delay lower
        const speedsArray = [.1, .5, 1, 5, 10]; // 9 speeds
        const speedNamesArray = ["Fastest", "Fast", "Medium", "Slower", "Slowest"];

        if (goFaster && this.state.delayIdx > 0) {
            await this.setState({
                delayIdx: this.state.delayIdx - 1,
            })
        }
        if (!goFaster && this.state.delayIdx < speedsArray.length - 1) {
            await this.setState({
                delayIdx: this.state.delayIdx + 1
            })
        }
        this.setState({
            delayName: speedNamesArray[this.state.delayIdx],
            delay: speedsArray[this.state.delayIdx]
        })
        this.resetArray();
    }


    render() {
        const { array } = this.state;

        return (
            <div className={this.state.width < 500 ? "array-container-mobile" : "array-container"}>
                <h1>Sorting Visualizer</h1>
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
                <div className="SpeedButtons">
                    <button
                        className=" btn btn-danger"
                        onClick={() => {
                            this.incrementSortSpeed(false);
                        }}>
                        -
                    </button>
                    <button
                        className=" btn btn-success"
                        onClick={() => {
                            this.incrementSortSpeed(true);
                        }}>
                        +
                    </button>
                </div>
                <div>
                    Sort Speed: <span>{this.state.delayName}</span>
                </div>
                <div class="card hoverable text-center">
                    <div class="card-header">
                        Key Points in This Project
                    </div>
                    <div class="card-body">
                        <p class="card-text">For this project, my goal was to demonstrate an understanding of: using stateful React components, the importance of Big O time complexities in software engineering, and basic DOM manipulation.</p>
                    </div>
                </div>
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