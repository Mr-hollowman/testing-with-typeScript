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

})