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

    const nameElement = screen.getByRole("textbox",{
      name:"Name"
    })
    expect(nameElement).toBeInTheDocument()

    const nameElement2 = screen.getByLabelText("Name",{
      selector:"input"
    })
    expect(nameElement2).toBeInTheDocument()

    const nameElement3 = screen.getByPlaceholderText("fullName")
    expect(nameElement3).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue("selva")
    expect(nameElement4).toBeInTheDocument()

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
