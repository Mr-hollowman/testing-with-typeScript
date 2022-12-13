import { render, screen } from "@testing-library/react";
import { Application } from "../components/greet/application/Application";

describe("application component", () => {
  test("render correctly", () => {
    render(<Application />);
    const element = screen.getByRole("textbox")
    expect(element).toBeInTheDocument()
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toBeInTheDocument()
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument()
  });
});
