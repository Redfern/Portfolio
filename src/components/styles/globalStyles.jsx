import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        overflow-x: hidden;
        min-height: 100%;
        position: relative;
    }

    body {
        overflow-x: hidden;
        height: 100%;
    }
`;

export default GlobalStyles;
