import styled from "styled-components";
import SkillIcon from "./SkillIcon";

const Section = styled.div`
  padding: 20px;
  padding-bottom: 0;
`;

const Item = styled.div<{ width: string }>`
  display: grid;
  grid-template-columns: 140px 1fr;
  background-color: #383838;
  border-radius: 20px;
  color: white;
  margin-bottom: 15px;
  width: 100%;

  @media ${(props) => props.theme.bootstrapBreakpoints.medium} {
    grid-template-columns: 200px 1fr;
    width: ${(props) => props.width};
  }

  .left-pill {
    background-color: white;
    padding: 10px;
    border: 2px solid #383838;
    border-radius: 20px;
  }

  &:last-of-type {
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .info {
    text-align: right;
    text-transform: uppercase;
    padding: 10px;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const YearsExperience = () => {
  return (
    <Section data-testid="experience-section">
      <h2 data-testid="experience-title">
        I&apos;ve had plenty of experience with...
      </h2>
      <Container>
        <Item width={"70%"}>
          <div className="left-pill">
            <SkillIcon name="React" />
          </div>
          <div className="info">7 years over 5 roles</div>
        </Item>
        <Item width={"90%"}>
          <div className="left-pill">
            <SkillIcon name="C#" />
          </div>
          <div className="info">10+ years over 7 roles</div>
        </Item>
        <Item width={"100%"}>
          <div className="left-pill">
            <SkillIcon name="SASS" />
          </div>
          <div className="info">15+ years over all roles</div>
        </Item>
        <Item width={"60%"}>
          <div className="left-pill">
            <SkillIcon name="E2E Testing" />
          </div>
          <div className="info">6 years over 4 roles</div>
        </Item>
        <Item width={"80%"}>
          <div className="left-pill">
            <SkillIcon name="TDD" />
          </div>
          <div className="info">9 years over 7 roles</div>
        </Item>
        <Item width={"90%"}>
          <div className="left-pill">
            <SkillIcon name="CI / CD" />
          </div>
          <div className="info">10 years over 9 roles</div>
        </Item>
        <Item width={"80%"}>
          <div className="left-pill">
            <SkillIcon name="Agile" />
          </div>
          <div className="info">9 years over 8 roles</div>
        </Item>
      </Container>
    </Section>
  );
};

export default YearsExperience;
