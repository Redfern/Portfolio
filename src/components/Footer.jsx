import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
    padding: 20px;
    margin: 0 auto;
    text-align: center;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            margin-bottom: 10px;
            
            i {
                margin-right: 10px;
            }
        }
    }
`;

const Footer = () => (
    <FooterStyles>
        <h2>Contact</h2>
        <div>
            <ul>
                <li><i className="fas fa-at"></i> <a href="mailto:redfern@gmail.com">redfern[at]gmail.com</a></li>
                <li><i className="fab fa-github"></i> <a href="https://www.github.com/Redfern" rel="noopener noreferrer" target="_blank">https://www.github.com/Redfern</a></li>
                <li><i className="fab fa-linkedin-in"></i> <a href="https://uk.linkedin.com/in/neilredfern" rel="noopener noreferrer" target="_blank">https://uk.linkedin.com/in/neilredfern</a></li>
                <li><i className="fab fa-wordpress-simple"></i> <a href="https://neil.red/" rel="noopener noreferrer" target="_blank">http://neil.red</a></li>
            </ul>
        </div>
    </FooterStyles>
);

export default Footer;