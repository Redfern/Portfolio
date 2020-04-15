import React from "react";
import renderWithTheme from "../tests/test-helpers";
import Introduction from "./Introduction";

describe("introduction tests", () => {
  it("should render the introduction", () => {
    const { getByTestId } = renderWithTheme(<Introduction />);

    expect(getByTestId("introduction-text")).toBeDefined();
    expect(getByTestId("introduction-text").innerHTML).toContain(
      "I am a full stack web developer"
    );
  });
});
