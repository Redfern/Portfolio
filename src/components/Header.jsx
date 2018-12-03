import React from 'react';
import styled from 'styled-components';
import Introduction from './Introduction.jsx';

const HeaderStyles = styled.div`
    padding: 20px;
    background-color: lightgray;
    height: 100%;
    background-image: url('../static/japan.jpeg');
    background-size: cover;
    background-position: center;

    @media ${props => props.theme.bootstrapBreakpoints.medium} {
        height: 40vh;
    }

    h1 {
        font-size: 2rem;
        color: #000;
        font-weight: bold;
        text-align: center;

        @media ${props => props.theme.bootstrapBreakpoints.large} {
            font-size: 4rem;
        }
    }

    .tag-line {
        font-size: 2rem;
        font-style: italic;
        text-align: center;
        color: #4b4b4b;
    }
`;

const Header = () => (
    <div className="row">
        <HeaderStyles className="col-12">
            <h1>Neil Redfern</h1>
            <div className="tag-line">Software Developer</div>
            <Introduction />
        </HeaderStyles>
    </div>
)

export default Header;