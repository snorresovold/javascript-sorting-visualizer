import React, { useState, useEffect } from 'react'

import "./SortingVisualizer.css"

function SortingVisualizer() {
    const [array, setArray] = useState([])

    useEffect(() => {
        resetArray()
    }, [])

    function randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)); //takes the min and max value and returns random ints between
    }

    function resetArray() { //creates a new random array
        setArray([])
        const temp_array:any = []; //this is any because i couldn't get it to work with number
        for (let i = 0;i < 100;i++){ // 100 is the amount of values
                temp_array.push(randomIntFromInterval(5, 1000));
            }
            console.log(temp_array)
            setArray(temp_array)
    }

    return (
        <div className='array-container'>
            {array.map((value, idx) =>( //idx is to remove the warning from the console
                <div className='array-bar' key={idx}>
                    {value}
                </div>
            ))}
        </div>
    )
}

export default SortingVisualizer;