import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.div`
    padding: 20px;
    background-color: lightgray;
    height: (100vh / 50%);

    h1 {
        font-size: 30px;
        color: #000;
        font-weight: bold;
        text-align: center;
    }

    .tag-line {
        font-size: 18px;
        font-style: italic;
        text-align: center;
    }
`;

const Header = () => (
    <div className="row">
        <HeaderStyles className="col-12">
            <h1>Neil Redfern</h1>
            <div className="tag-line">Software Developer</div>
        </HeaderStyles>
    </div>
)

export default Header;