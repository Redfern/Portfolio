import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { IProject } from "../@types/project";

const StyledProject = styled.div`
  margin-right: 20px;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 76px;

  h3 {
    font-size: 20px;
    font-weight: bold;
    color: black;
    text-align: center;
  }

  img {
    max-height: 300px;
    margin: 0 auto;
    display: block;
    margin-bottom: 10px;
    border-radius: 20px;
  }

  .link {
    width: 100%;
    text-align: center;
    margin-top: 20px;
    position: absolute;
    bottom: 10px;
  }

  a {
    color: #ffffff;
    padding: 10px;
    background-color: #00a7ff;
    border-radius: 50px;
    margin-top: 20px;
    display: block;
    margin: 0 auto;
    width: 80%;
    background: #f91889;
    position: relative;
    text-decoration: none;
    border: 1px solid transparent;
    font-weight: bold;

    &:visited {
      color: #ffffff;
    }

    &:hover {
      background: white;
      color: #f91889;
      border: 1px solid #f91889;
    }

    svg {
      position: absolute;
      right: 15px;
      top: 50%;
      margin-top: -8px;
    }
  }
`;

const Description = styled.div`
  padding: 0 15px;
`;

const Project = ({ title, url, description, image }: IProject) => (
  <StyledProject>
    <img src={`/static/${image}`} alt={`for project ${title}`} />
    <h3>{title}</h3>
    <Description>{description}</Description>
    <div className="link">
      <a href={url} target="_blank" rel="noopener noreferrer">
        Visit website <FontAwesomeIcon icon={faSquareArrowUpRight} />
      </a>
    </div>
  </StyledProject>
);

export default Project;
