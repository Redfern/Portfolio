import styled from "styled-components";
import Project from "./Project.jsx";
import projectsJson from "../data/projects.json";

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
  <StyledProjects>
    <h2>Personal projects</h2>
    {projectsJson.projects.map((item) => (
      <Project key={item.title} {...item} />
    ))}
  </StyledProjects>
);

export default Projects;
