import { expect, test, describe } from "vitest";
import Header from "./Header";
import renderWithTheme from "../tests/test-helpers";

describe("header tests", () => {
  test("should show my name in the header", () => {
    const { getByTestId } = renderWithTheme(<Header />);

    expect(getByTestId("header-title")).toBeDefined();
    expect(getByTestId("header-title").innerHTML).toBe("Neil Redfern");
    expect(getByTestId("header-tagline")).toBeDefined();
    expect(getByTestId("header-tagline").innerHTML).toBe(
      "Senior Full Stack Software Developer"
    );
  });
});
