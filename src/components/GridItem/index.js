import React from 'react';
import './GridItem.css';

const GridItem = ({ number, active, onClick }) => (
    <div className="GridItem">
        <button 
            className={`GridItem__button ${active ? ' GridItem__button--active' : ''}`} 
            data-testid={active ? 'grid-item-active' : ''}
            onClick={() => onClick(number)}>
                {number}
        </button>
    </div>  
)

export default GridItem;