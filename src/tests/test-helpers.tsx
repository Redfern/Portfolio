import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import theme from "../theme";
import { JSX } from "react";

const renderWithTheme = (comp: JSX.Element) => {
  return render(<ThemeProvider theme={theme}>{comp}</ThemeProvider>);
};

export default renderWithTheme;
