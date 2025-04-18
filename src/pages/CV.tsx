import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Jobs from "../components/Jobs";
import YearsExperience from "../components/YearsExperience";

const Container = styled.div``;

const NotFound = () => {
  return (
    <Container>
      <AboutMe />
      <YearsExperience />
      <Skills />
      <Jobs />
    </Container>
  );
};

export default NotFound;
