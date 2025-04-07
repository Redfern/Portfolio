import React from "react";
import styled from "styled-components";
import skillsJson from "../data/skills.json";

const SkillsStyles = styled.div`
  padding: 20px;
`;

const StyledSkill = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;

  .title {
    font-weight: bold;
    color: black;
    font-size: 18px;
    text-align: right;
    margin-bottom: 10px;

    flex-basis: 100%;

    @media ${(props) => props.theme.bootstrapBreakpoints.medium} {
      flex-basis: 30%;
    }
  }

  .keywords {
    flex-basis: 100%;

    @media ${(props) => props.theme.bootstrapBreakpoints.medium} {
      flex-basis: 65%;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        float: left;
        margin-right: 10px;

        &:after {
          content: ", ";
        }

        &:last-of-type {
          &:after {
            content: " ";
          }
        }
      }
    }
  }
`;

const Skills = () => (
  <React.Fragment>
    <SkillsStyles>
      <h2>These are some of my skills...</h2>
      {skillsJson.skills.map((item) => (
        <StyledSkill
          key={item.title}
          data-testid={`${item.title
            .toLowerCase()
            .replace(/ /gi, "-")}-section`}
        >
          <div className="title">{item.title}</div>
          <div className="keywords">
            <ul>
              {item.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </StyledSkill>
      ))}
    </SkillsStyles>
  </React.Fragment>
);

export default Skills;
