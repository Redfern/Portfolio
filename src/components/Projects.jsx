import React from 'react';
import styled from 'styled-components';
import Project from './Project.jsx';
import { projects } from '../data/projects.json';

const StyledProjects = styled.div`
    padding: 20px;
    clear: both;
    overflow: auto;
    margin: 0 auto;
    width: 100%;
`;

const Projects = () => (
    <StyledProjects>
        <h2>Personal projects</h2>
        <div className="row">
        {
            projects.map(item => <Project {...item} />)
        }
        </div>
    </StyledProjects>
);

export default Projects;