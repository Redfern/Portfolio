import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Jobs from "../components/Jobs";
import Message from "../components/Message";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import YearsExperience from "../components/YearsExperience";

const HomePage = () => {
  return (
    <>
      <AboutMe />
      <YearsExperience />
      <Skills />
      <Jobs />
      <Projects />
      <Footer />
      <Message />
    </>
  );
};

export default HomePage;
