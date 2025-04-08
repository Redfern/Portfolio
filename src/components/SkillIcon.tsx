import {
  faApple,
  faAws,
  faCss,
  faDocker,
  faFigma,
  faGit,
  faGithub,
  faHtml5,
  faJenkins,
  faJira,
  faJs,
  faNode,
  faReact,
  faSass,
  faTrello,
  faUmbraco,
  faWindows,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRotateRight,
  faBuilding,
  faChalkboard,
  faCircleNodes,
  faCircleNotch,
  faCode,
  faDatabase,
  faFlask,
  faFlaskVial,
  faMobileScreen,
  faNewspaper,
  faUserGroup,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface StyledSkillIcon_Props {
  colour: string;
}

const StyledSkillIcon = styled.div<StyledSkillIcon_Props>`
  display: inline-block;
  margin-right: 5px;

  svg {
    margin-right: 5px;
  }

  color: ${(props) => props.colour};
`;

interface ItemsMap {
  [key: string]: { icon: IconDefinition; colour: string };
}

const items: ItemsMap = {
  "c#": {
    icon: faWindows,
    colour: "#6b1577",
  },
  ".net core": {
    icon: faWindows,
    colour: "#6b1577",
  },
  blazor: {
    icon: faWindows,
    colour: "#6b1577",
  },
  react: {
    icon: faReact,
    colour: "#58c5dc",
  },
  redux: {
    icon: faReact,
    colour: "#58c5dc",
  },
  context: {
    icon: faReact,
    colour: "#58c5dc",
  },
  nextjs: {
    icon: faReact,
    colour: "#000000",
  },
  sql: {
    icon: faDatabase,
    colour: "#0078d4",
  },
  html5: {
    icon: faHtml5,
    colour: "#dc4b25",
  },
  sass: {
    icon: faSass,
    colour: "#c56394",
  },
  javascript: {
    icon: faJs,
    colour: "#efd81e",
  },
  typescript: {
    icon: faJs,
    colour: "#3174c0",
  },
  "styled components": {
    icon: faCss,
    colour: "#ecae60",
  },
  node: {
    icon: faNode,
    colour: "#7cb800",
  },
  graphql: {
    icon: faCircleNodes,
    colour: "#de34a6",
  },
  phonegap: {
    icon: faMobileScreen,
    colour: "#73bfc3",
  },
  "objective-c": {
    icon: faApple,
    colour: "#000000",
  },
  contentful: {
    icon: faNewspaper,
    colour: "#14304f",
  },
  umbraco: {
    icon: faUmbraco,
    colour: "#3441ae",
  },
  sitecore: {
    icon: faNewspaper,
    colour: "#e83325",
  },
  telligent: {
    icon: faNewspaper,
    colour: "#1e7dc4",
  },
  immediacy: {
    icon: faNewspaper,
    colour: "#000000",
  },
  aws: {
    icon: faAws,
    colour: "#f79403",
  },
  azure: {
    icon: faWindows,
    colour: "#0386cf",
  },
  "github actions": {
    icon: faGithub,
    colour: "#000000",
  },
  teamcity: {
    icon: faBuilding,
    colour: "#39e360",
  },
  jenkins: {
    icon: faJenkins,
    colour: "#cd3831",
  },
  terraform: {
    icon: faCode,
    colour: "#594cde",
  },
  "circle ci": {
    icon: faCircleNotch,
    colour: "#000000",
  },
  docker: {
    icon: faDocker,
    colour: "#086bd0",
  },
  jira: {
    icon: faJira,
    colour: "#034ade",
  },
  trello: {
    icon: faTrello,
    colour: "#0075b9",
  },
  "physical kanban board": {
    icon: faChalkboard,
    colour: "#0075b9",
  },
  notion: {
    icon: faChalkboard,
    colour: "#000000",
  },
  figma: {
    icon: faFigma,
    colour: "#f73535",
  },
  git: {
    icon: faGit,
    colour: "#f73535",
  },
  tdd: {
    icon: faFlask,
    colour: "#000000",
  },
  "e2e testing": {
    icon: faFlask,
    colour: "#000000",
  },
  agile: {
    icon: faArrowRotateRight,
    colour: "#000000",
  },
  "mob programming": {
    icon: faUsers,
    colour: "#000000",
  },
  "pair programming": {
    icon: faUserGroup,
    colour: "#000000",
  },
  "e2e testing with playwright and cypress": {
    icon: faFlaskVial,
    colour: "#000000",
  },
  "unit testing with jest and nunit": {
    icon: faFlaskVial,
    colour: "#000000",
  },
  "react testing library for component testing": {
    icon: faReact,
    colour: "#58c5dc",
  },
};

const SkillIcon = ({ name }: { name: string }) => {
  const item = items[name.toLowerCase()];

  if (item != null) {
    return (
      <StyledSkillIcon colour={item.colour}>
        <FontAwesomeIcon icon={item.icon} color={item.colour} />
        <span>{name}</span>
      </StyledSkillIcon>
    );
  } else {
    return <StyledSkillIcon colour="#676767">{name}</StyledSkillIcon>;
  }
};

export default SkillIcon;
