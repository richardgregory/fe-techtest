import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GridItem from '../GridItem';
import './Grid.css';

const propTypes = {
    limit: PropTypes.number
}

const getGrid = (limit) => Array(limit).fill().map((_, index) => index + 1);
const isMultiple = (multiple) => (value) => value % multiple === 0;

const Grid = ({ limit = 144 }) => {
    const gridNumbers = getGrid(limit);
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
        <div className="Grid" data-testid="grid">
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

Grid.propTypes = propTypes;

export default Grid
