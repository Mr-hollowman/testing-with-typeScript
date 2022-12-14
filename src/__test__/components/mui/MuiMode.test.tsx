import { render, screen } from "@testing-library/react"
import { MuiMode } from "../../../components/mui/MuiMode"
import { AppProviders } from "../../../provider/AppProvider"

describe(" MuiMode", ()=>{
    test("renders text correctly",()=>{
        render(<MuiMode />, {
            wrapper:AppProviders
        })
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toHaveTextContent("dark mode")
})
})