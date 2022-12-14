import { renderHook } from "@testing-library/react";
import useCounter from "../../../hooks/useCounter/useCounter";

describe("render hooks", () => {
  test("renders correctly", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("renders correctly with initial props with the value of 10", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });
});
