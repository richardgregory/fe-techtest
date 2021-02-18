import React, { useState } from 'react';
import GridItem from '../GridItem';
import './Grid.css';

const getGrid = (limit) => Array(limit).fill().map((_, index) => index + 1);
const isMultiple = (multiple) => (value) => value % multiple === 0;

const Grid = () => {
    const gridNumbers = getGrid(144);
    const [activeNumber, setActiveNumber] = useState();
    const [multiples, setMultiples] = useState([]);

    const handleClick = (multiple) => {
        if (multiple === activeNumber) {
            setActiveNumber();
            setMultiples([]);
            return;
        }

        setActiveNumber(multiple)
        setMultiples(gridNumbers.filter(isMultiple(multiple)));
    }
    
    return (
        <div className="Grid">
            {gridNumbers.map((value) => (
                <GridItem  
                    key={value} 
                    number={value}
                    active={activeNumber && multiples.includes(value)} 
                    onClick={handleClick} />
            ))}
        </div>
    )
}

export default Grid
