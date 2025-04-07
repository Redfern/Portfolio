import styled from "styled-components";
import Introduction from "./Introduction.jsx";

const HeaderStyles = styled.div`
  padding: 20px;
  background-color: lightgray;
  height: 100%;
  background-image: url("../static/japan.jpeg");
  background-size: cover;
  background-position: center;

  h1 {
    font-size: 2.5rem;
    color: #000;
    font-weight: bold;
    text-align: center;
    margin: 0;

    @media ${(props) => props.theme.bootstrapBreakpoints.large} {
      font-size: 4rem;
    }
  }

  .tag-line {
    font-size: 2rem;
    font-style: italic;
    text-align: center;
    color: #4b4b4b;
  }
`;

const Header = () => (
  <div>
    <HeaderStyles>
      <h1 data-testid="header-title">Neil Redfern</h1>
      <div className="tag-line" data-testid="header-tagline">
        Software Developer
      </div>
      <Introduction />
    </HeaderStyles>
  </div>
);

export default Header;
