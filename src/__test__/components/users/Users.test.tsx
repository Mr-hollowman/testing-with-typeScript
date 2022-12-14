import { render, screen } from "@testing-library/react";
import Users from "../../../components/users/Users";

describe("Users component", ()=>{
    test("renders correctly",()=>{
        render(<Users />)
        const headingElement = screen.getByRole("heading",{level:1})
        expect(headingElement).toBeInTheDocument()
    })

    test("renders correctly with list of users", async ()=>{
        render(<Users />)
        const listElements = await screen.findAllByRole("listitem")
        expect(listElements).toHaveLength(3)
    })
})