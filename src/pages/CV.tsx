import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Jobs from "../components/Jobs";
import YearsExperience from "../components/YearsExperience";
import GetInTouchFooter from "../components/GetInTouch";

const Container = styled.div``;

const NotFound = () => {
  return (
    <Container>
      <AboutMe />
      <YearsExperience />
      <Skills />
      <Jobs />
      <GetInTouchFooter />
    </Container>
  );
};

export default NotFound;
