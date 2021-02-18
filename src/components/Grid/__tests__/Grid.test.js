import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Grid from '../';

describe('Grid', () => {
    it('Should display a grid of numbers 1 - 144', () => {
        render(<Grid />)
        expect(screen.getByTestId('grid').children.length).toBe(144);
    });

    it('Should highlight the multipliers when a number is clicked', () => {
        render(<Grid limit={10} />)

        // Multipliers of 2
        fireEvent.click(screen.getByText('2'));
        expect(screen.getAllByTestId('grid-item-active').length).toBe(5);
        expect(screen.getByText('2').parentElement).toHaveAttribute('data-testid', 'grid-item-active')
        expect(screen.getByText('4').parentElement).toHaveAttribute('data-testid', 'grid-item-active')
        expect(screen.getByText('6').parentElement).toHaveAttribute('data-testid', 'grid-item-active')
        expect(screen.getByText('8').parentElement).toHaveAttribute('data-testid', 'grid-item-active')
        expect(screen.getByText('10').parentElement).toHaveAttribute('data-testid', 'grid-item-active')

        // Multipliers of 5
        fireEvent.click(screen.getByText('5'));
        expect(screen.getAllByTestId('grid-item-active').length).toBe(2);
        expect(screen.getByText('5').parentElement).toHaveAttribute('data-testid', 'grid-item-active')
        expect(screen.getByText('10').parentElement).toHaveAttribute('data-testid', 'grid-item-active')

        // Multipliers of 10
        fireEvent.click(screen.getByText('10'));
        expect(screen.getAllByTestId('grid-item-active').length).toBe(1);
        expect(screen.getByText('10').parentElement).toHaveClass('GridItem--active')
    })

    it('Should remove highlighted items when same active number clicked again', () => {
        render(<Grid />)

        fireEvent.click(screen.getByText('2'));
        expect(screen.getAllByTestId('grid-item-active').length).toBe(72);

        fireEvent.click(screen.getByText('2'));
        expect(screen.queryAllByTestId('grid-item-active').length).toBe(0);
    })
})