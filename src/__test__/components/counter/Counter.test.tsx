import { getByRole, render, screen } from '@testing-library/react'
import { Counter } from '../../../components/counter/Counter'
import user from '@testing-library/user-event'


describe("counter component",()=>{
    test("renders correctly",()=>{
        render(<Counter />)
        const heading = screen.getByRole("heading",{
            level:1
        })
        expect(heading).toBeInTheDocument()

        const buttonElement = screen.getByRole("button", {
            name: 'Increment'
        })
        expect(buttonElement).toBeInTheDocument()
    })

    test("renders correctly with default value",()=>{
        render(<Counter />)

        const countElement = screen.getByRole("heading")
        expect(countElement).toHaveTextContent("0")

    })
    
    test("render correctly when user click increment button",()=>{
        render(<Counter />)
        const incrementButton = screen.getByRole("button",{
            name:"Increment"
        })
        user.click(incrementButton);
        const counterElemtent = screen.getByRole("heading")
        expect(counterElemtent).toHaveTextContent("1")
    })

    test("renders correctly after count is getting from text box", ()=>{
        render(<Counter />)
        const amountInput = screen.getByRole("spinbutton")
        user.type(amountInput,"10")
        expect(amountInput).toHaveValue(10)

        const setButton = screen.getByRole("button",{
            name:"Set"
        })
        user.click(setButton);
        const counter = screen.getByRole("heading",{
            level:1
        })
        expect(counter).toHaveTextContent("10")

    })
})