import React from 'react';
import PropTypes from 'prop-types';
import './GridItem.css';

const propTypes = {
    number: PropTypes.number.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func.isRequired
}

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

GridItem.propTypes = propTypes

export default GridItem;