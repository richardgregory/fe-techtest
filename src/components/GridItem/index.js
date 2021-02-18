import React from 'react';
import './GridItem.css';

const GridItem = ({ number, active, onClick }) => (
    <div className={`GridItem${active ? ' GridItem--active' : ''}`} data-testid={active ? 'grid-item-active' : ''}>
        <button className="GridItem__button" onClick={() => onClick(number)}>{number}</button>
    </div>  
)

export default GridItem;