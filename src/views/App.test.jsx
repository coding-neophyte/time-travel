import { screen, render, fireEvent } from '@testing-library/react'
import App from '../App'

describe('app behavior test', () => {
    it('should save, undo and redo dates', async () => {
        render(<App />)

        const dateInput = screen.getByLabelText('date')
        const undoButton = screen.getByLabelText('undo')
        const redoButton = screen.getByLabelText('redo')


        screen.getByText('Please Enter Date')

        fireEvent.change(dateInput, { target: { value: '2022-01-12'}})
        screen.getByText('2022-01-12', { exact: false })

        fireEvent.change(dateInput, { target: { value: '2022-01-13'}})
        screen.getByText('2022-01-13', { exact: false })

        fireEvent.change(dateInput, { target: { value: '2022-01-14'}})
        screen.getByText('2022-01-14', { exact: false })


        fireEvent.click(undoButton)
        screen.getByText('2022-01-13')

        fireEvent.click(redoButton)
        screen.getByText('2022-01-14')


    })
})
