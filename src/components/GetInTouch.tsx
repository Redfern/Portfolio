import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const FooterStyles = styled.div`
  padding: 20px;
  margin: 0 auto;
  text-align: center;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 10px;

      svg {
        margin-right: 10px;
      }
    }
  }
`;

const GetInTouchFooter = () => (
  <FooterStyles>
    <h2>Why not get in touch?</h2>
    <div>
      <ul>
        <li>
          <FontAwesomeIcon icon={faPhone} />{" "}
          <a href="tel:07843661076">07843661076</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          <a href="mailto:redfern@gmail.com">redfern@gmail.com</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} />{" "}
          <a
            href="https://www.github.com/Redfern"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://www.github.com/Redfern
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />{" "}
          <a
            href="https://uk.linkedin.com/in/neilredfern"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://uk.linkedin.com/in/neilredfern
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faLink} />{" "}
          <a
            href="https://www.neil-redfern.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://www.neil-redfern.com
          </a>
        </li>
      </ul>
    </div>
  </FooterStyles>
);

export default GetInTouchFooter;
