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
        color: #676767;
        font-family: 'Noto Sans TC', sans-serif;
    }

    h2 {
        color: #000000;
        width: 100%;
        margin-bottom: 15px;
        padding-bottom: 10px;
        border-bottom: 2px dotted #ff5c5c;
        text-align: center;
    }

    h3 {
        color: #655a5e;
    }

    a, a:visited, a:hover {
        color: #006CFF;
    }
`;

export default GlobalStyles;
