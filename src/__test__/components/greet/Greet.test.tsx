import { render, screen } from "@testing-library/react"
import Greet from "../../../components/greet/Greet"

describe("for the greet component",()=>{
    test("renders correctly",()=>{
        render(<Greet />)
        const res = screen.getByText(/Hello/i)
        expect(res).toBeInTheDocument();
    })
    test("renders correctly with the name",()=>{
        render(<Greet name={"Selva"} />);
        const res = screen.getAllByText(/Hello Selva/i)
        expect(res).toBeTruthy()
    })
})