import { render, screen } from "@testing-library/react";
import { Skills } from "../../../components/skills/Skills";

describe("renders correctly",()=>{
    const skills = ["HTML", "CSS", "javaScrip", "typeScript"]

    test("renders correcly with single element",()=>{
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole("list")
        expect(listElement).toBeInTheDocument()
    })

    test("render correcly with list of props",()=>{
        render(<Skills skills={skills} />)
        const listOfElements = screen.getAllByRole("listitem")
        expect(listOfElements).toHaveLength(skills.length)
    })

    test("render login button",()=>{
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole("button",{
            name:"Login"
        })
        expect(loginButton).toBeInTheDocument()
    })

    test("start learning button not renders",()=>{
        render(<Skills skills={skills} />)
        const startLearning = screen.queryByRole("button",{
            name:"Start Learning"
        })
        expect(startLearning).not.toBeInTheDocument()
    })

    test("testing the button element", async ()=>{
        render(<Skills />)
        const startLearning = await screen.findByRole("button", {
            name:"Start Learning"
        },
        {
            timeout:2000
        })
        expect(startLearning).toBeInTheDocument()
    })

})