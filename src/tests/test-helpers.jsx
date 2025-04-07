import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import theme from "../theme";

const renderWithTheme = (comp) => {
  return render(<ThemeProvider theme={theme}>{comp}</ThemeProvider>);
};

export default renderWithTheme;
