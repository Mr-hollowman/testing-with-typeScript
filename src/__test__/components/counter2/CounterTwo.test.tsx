import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CounterTwo from "../../../components/counter2/CounterTwo";

describe("counter two test", () => {
  test("renders correctly", () => {
    render(<CounterTwo />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("function handler are called", () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    userEvent.click(incrementButton)
    expect(incrementHandler).toBeCalledTimes(1)

    userEvent.click(decrementButton)
    expect(decrementHandler).toBeCalledTimes(1)
  });
});
