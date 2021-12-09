import React, { useState } from 'react'

function SortingVisualizer() {
    const [array, setArray] = useState([])

    function randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)); //takes the min and max value and returns random ints between
    }

    function resetArray() {
        setArray([])
        const temp_array:any = []; //this is any because i couldn't get it to work with number
        for (let i = 0;
            i > 100;
            i++){
                temp_array.push(randomIntFromInterval(5, 1000));
            }
            setArray(temp_array)
    }

    return (
        <div>
            lol
        </div>
    )
}

export default SortingVisualizer;