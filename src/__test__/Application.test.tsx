import { render, screen } from "@testing-library/react";
import { Application } from "../components/greet/application/Application";

describe("application component", () => {
  test("render correctly", () => {
    render(<Application />);

    const mainHeading = screen.getByRole("heading",{
      level: 1,
    })
    expect(mainHeading).toBeInTheDocument();

    const secondHeading = screen.getByRole("heading",{
      level:2
    })
    expect(secondHeading).toBeInTheDocument() 

    const element = screen.getByRole("textbox",{
      name:"Name"
    })
    expect(element).toBeInTheDocument()

    const nameElement = screen.getByLabelText("Name",{
      selector:"input"
    })
    expect(nameElement).toBeInTheDocument()

    const namePlaceholder = screen.getByPlaceholderText("fullName")
    expect(namePlaceholder).toBeInTheDocument()

    const textArea = screen.getByRole("textbox",{
      name:"Bio"
    })
    expect(textArea).toBeInTheDocument()

    const paragraphElement = screen.getByText("All fields are mandatory")
    expect(paragraphElement).toBeInTheDocument()

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toBeInTheDocument()

    const checkbox2  = screen.getByLabelText("I agree to the conditions");
    expect(checkbox2).toBeInTheDocument()

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument()
  });
});
