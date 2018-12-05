import React from 'react';
import styled from 'styled-components';
import Project from './Project.jsx';
import { projects } from '../data/projects.json';

const StyledHeader = styled.h2`
    padding: 20px;
`;

const StyledProjects = styled.div`
    padding: 20px;
    clear: both;
    overflow: auto;
    margin: 0 auto;
    flex-flow: row wrap;
    display: flex;
    justify-content: center;
`;

const Projects = () => (
    <React.Fragment>
        
        <StyledProjects>
        <h2>Personal projects</h2>
                {projects.map(item => <Project key={item.title} {...item} />)}
        </StyledProjects>
    </React.Fragment>
);

export default Projects;