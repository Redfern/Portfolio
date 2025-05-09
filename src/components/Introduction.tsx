import styled from "styled-components";

const IntroductionStyles = styled.div`
  color: white;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  text-align: left;

  @media ${(props) => props.theme.bootstrapBreakpoints.large} {
    margin: 0px 200px;
    margin-top: 40px;
    text-align: center;
  }
`;

const Introduction = () => (
  <IntroductionStyles>
    <p data-testid="introduction-text">
      I am a full stack web developer, I love working with the latest
      technologies and helping teams deliver the best product possible.
    </p>
  </IntroductionStyles>
);

export default Introduction;
