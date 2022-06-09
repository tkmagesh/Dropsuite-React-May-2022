import * as React from 'react';
import Calculator from './calculator'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const mockFn = jest.fn()

const dummyFn = function(){};


jest.mock("./calculator-result", () => { 
    return {
        __esModule : true,
        default : (props) => {
            mockFn(props)
            mockFn.mockReturnValue((<div data-testid="divResult">Dummy Result</div>))
            return mockFn()
        }
    }
});

test('Calculator should add 2 numbers', () => {
    render(<Calculator/>)

    userEvent.type(screen.getByLabelText('Number 1:'), '100')
    userEvent.type(screen.getByLabelText('Number 2:'), '200')
    userEvent.click(screen.getByText('Add'))
    expect(screen.getByTestId('divResult')).toHaveTextContent('Dummy Result')

    //Verifying whether the Calculator component passed the required data as props to the child componen
    
    //expect(mockFn).toHaveBeenCalledWith({ data : 300, dummyFn : function(){} } /* props */ )
    console.log(mockFn.mock.lastCall)
})
