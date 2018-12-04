import React from 'react';
import styled from 'styled-components';

const StyledProject = styled.div`
    margin-right: 20px;
    width: 300px;
    margin: 0 auto;
    width: 100%;
    margin-bottom: 20px;

    @media ${props => props.theme.bootstrapBreakpoints.medium} {
        margin-bottom: 0;
    }

    h3 {
        font-size: 20px;
        font-weight: bold;
        color: black;
        text-align: center;
    }

    img {
        max-height: 300px;
        margin: 0 auto;
        display: block;
        margin-bottom: 10px;
        border-radius: 20px;
    }

    .link {
        width: 100%;
        text-align: center;
        margin-top: 20px;
    }

    a {
        color: #ffffff;
        padding: 10px;
        background-color: #00a7ff;
        border-radius: 50px;
        margin-top: 20px;
        display: block;
        margin: 0 auto;
        width: 80%;
        background: linear-gradient(to right, #1c92d0, #00a7ff);
        position: relative;
        text-decoration: none;
        border: 1px solid transparent;

        &:hover {
            background: linear-gradient(to right, white, white);
            color: #00a7ff;
            border: 1px solid #00a7ff;
        }

        i {
            position: absolute;
            right: 13px;
            top: 50%;
            margin-top: -8px;
        }
    }
`;

const Project = ({title, url, description, image}) => (
    <div className="col-12 col-md-4">
        <StyledProject>
            <img src={`/static/${image}`} alt={`for project ${title}`} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="link">
                <a href={url} target="_blank" rel="noopener noreferrer">Visit website <i className="fas fa-external-link-alt"></i></a>
            </div>
        </StyledProject>
    </div>
);

export default Project;