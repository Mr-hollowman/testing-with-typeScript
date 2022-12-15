import { render, screen } from "@testing-library/react";
import Users from "../../../components/users/Users";
import { server } from "../../../mocks/server";
import { rest } from 'msw'

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

    test("render error", async ()=>{
        server.use(
            rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx)=>{
                return res(ctx.status(500))
            })
        )

        render(<Users />)
        const error = await screen.findByText("error fetching users")
        expect(error).toBeInTheDocument()
    })

    test("snapshot testing", ()=>{
        const {container} = render(<Users />)
        expect(container).toMatchSnapshot()
    })
})