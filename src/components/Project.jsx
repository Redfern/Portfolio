import React from 'react';
import styled from 'styled-components';

const StyledProject = styled.div`
    margin-right: 20px;
    width: 300px;
    margin: 0 auto;
    width: 100%;
    margin-bottom: 10px;

    h3 {
        font-size: 20px;
        font-weight: bold;
        color: black;
        text-align: center;
    }

    img {
        margin-bottom: 10px;
        width: 100%;
    }

    .link {
        width: 100%;
        text-align: center;
    }

    a {
        color: #00a9ff;
        padding: 10px;
    }
`;

const Project = ({title, url, description, image}) => (
    <div className="col-12 col-md-4">
        <StyledProject>
            <img src={`/static/${image}`} alt={`for project ${title}`} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="link">
                <a href={url} target="_blank" rel="noopener noreferrer">Visit website</a>
            </div>
        </StyledProject>
    </div>
);

export default Project;