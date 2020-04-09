import React from "react";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import Header from "./Header";
import theme from "../theme";

describe("header tests", () => {
  it("should show my name in the header", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(getByTestId("header-title")).toBeDefined();
    expect(getByTestId("header-title").innerHTML).toBe("Neil Redfern");
  });
});
