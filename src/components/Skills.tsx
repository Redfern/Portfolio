import React from "react";
import styled from "styled-components";
import skillsJson from "../data/skills.json";
import SkillIcon from "./SkillIcon";

const SkillsStyles = styled.div`
  padding: 20px;
`;

const StyledSkill = styled.div`
  margin-bottom: 10px;
  display: block;

  @media ${(props) => props.theme.bootstrapBreakpoints.large} {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 50px;
    padding-left: 100px;
    padding-right: 100px;
  }

  .title {
    font-weight: bold;
    color: black;
    font-size: 18px;
    text-align: right;
    margin-bottom: 10px;
  }
`;

const Listing = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const ListingItem = styled.div`
  &:after {
    content: " - ";
    opacity: 0.5;
  }

  &:last-of-type {
    &:after {
      content: " ";
    }
  }
`;

const Skills = () => (
  <React.Fragment>
    <SkillsStyles>
      <h2>Here is a more complete list of my skill set...</h2>
      {skillsJson.skills.map((item) => (
        <>
          <StyledSkill
            key={item.title}
            data-testid={`${item.title
              .toLowerCase()
              .replace(/ /gi, "-")}-section`}
          >
            <div className="title">{item.title}</div>
            <div className="keywords">
              <Listing>
                {item.skills.map((skill: string) => (
                  <ListingItem key={skill}>
                    <SkillIcon name={skill} />
                  </ListingItem>
                ))}
              </Listing>
            </div>
          </StyledSkill>
        </>
      ))}
    </SkillsStyles>
  </React.Fragment>
);

export default Skills;
