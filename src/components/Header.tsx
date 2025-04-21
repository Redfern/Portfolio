import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-areas:
    "image title"
    "contact  contact";
  gap: 15px;

  @media ${(props) => props.theme.bootstrapBreakpoints.large} {
    grid-template-columns: 200px 1fr 200px;
    grid-template-areas: "image title contact";
    gap: 30px;
  }
`;

const HeaderStyles = styled.div`
  padding: 20px;
  background-color: #383838;
  height: 100%;
  border-bottom: 2px solid #f91889;

  .image {
    grid-area: image;

    img {
      width: 100px;
      height: 100px;
      border-radius: 100%;

      @media ${(props) => props.theme.bootstrapBreakpoints.large} {
        width: 200px;
        height: 200px;
      }
    }
  }

  .title {
    display: flex;
    flex-flow: column;
    justify-content: center;

    grid-area: title;
  }

  .contact {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    grid-area: contact;

    @media ${(props) => props.theme.bootstrapBreakpoints.large} {
      justify-content: end;
    }

    svg {
      color: #f91889;
      width: 25px;
      height: 25px;

      @media ${(props) => props.theme.bootstrapBreakpoints.large} {
        width: 35px;
        height: 35px;
      }

      &:hover {
        color: #fff;
      }
    }
  }

  h1 {
    font-size: 2rem;
    color: #f91889;
    font-weight: bold;
    text-align: left;
    margin: 0;

    @media ${(props) => props.theme.bootstrapBreakpoints.large} {
      font-size: 4rem;
    }
  }

  .tag-line {
    font-size: 1rem;
    font-style: italic;
    text-align: left;
    color: #fff;

    @media ${(props) => props.theme.bootstrapBreakpoints.large} {
      font-size: 2rem;
    }
  }
`;

const Header = () => (
  <div>
    <HeaderStyles>
      <Container>
        <div className="image" data-testid="header-image">
          <img src="/static/me.jpeg" alt="my photo" />
        </div>
        <div className="title">
          <h1 data-testid="header-title">Neil Redfern</h1>
          <div className="tag-line" data-testid="header-tagline">
            Senior Full Stack Software Developer
          </div>
        </div>
        <div className="contact">
          <a
            href="https://www.github.com/Redfern"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://uk.linkedin.com/in/neilredfern"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:redfern@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </Container>
    </HeaderStyles>
  </div>
);

export default Header;
