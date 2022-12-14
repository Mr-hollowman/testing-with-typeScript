import { render, screen } from "../../../test-utils"
import { MuiMode } from "../../../components/mui/MuiMode"

describe(" MuiMode", ()=>{
    test("renders text correctly",()=>{
        render(<MuiMode />)
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toHaveTextContent("dark mode")
})
})