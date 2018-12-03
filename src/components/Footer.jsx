import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
    padding: 20px;
    text-align: center;

    ul {
        list-style: none;
    }
`;

const Footer = () => (
    <FooterStyles>
        <h2>Contact</h2>
        <div>
            <ul>
                <li><b>Email:</b> redfern[at]gmail.com</li>
                <li><b>Github:</b> <a href="https://www.github.com/Redfern" rel="noopener noreferrer" target="_blank">https://www.github.com/Redfern</a></li>
            </ul>
        </div>
    </FooterStyles>
);

export default Footer;