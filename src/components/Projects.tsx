import styled from "styled-components";
import Project from "./Project.js";
import projectsJson from "../data/projects.json";
import { IProject } from "../@types/project.js";

const StyledProjects = styled.div`
  padding: 20px;
  clear: both;
  overflow: auto;
  margin: 0 auto;
  flex-flow: row wrap;
  display: flex;
  justify-content: center;
`;

const SectionContainer = styled.div`
  padding: 20px;
`;

const Projects = () => (
  <SectionContainer>
    <h2>
    In my spare time, these are some of the websites I&apos;ve created...
    </h2>
    <StyledProjects>
      {projectsJson.projects.map((item: IProject) => (
        <Project key={item.title} {...item} />
      ))}
    </StyledProjects>
  </SectionContainer>
);

export default Projects;
