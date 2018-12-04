import React from 'react';
import styled from 'styled-components';
import { skills } from '../data/skills.json';

const SkillsStyles = styled.div`
    padding: 20px;

    .title {
        font-weight: bold;
        color: black;
        font-size: 18px;
        text-align: right;
        margin-bottom: 10px;
    }

    .keywords {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
            float: left;
            margin-right: 10px;

            &:after {
                content: ', '
            }

            &:last-of-type {
                &:after {
                    content: ' '
                }
            }
        }
    }
`;

const StyledSkill = styled.div`
    margin-bottom: 10px;
`;


const Skills = () => (
    <SkillsStyles>
        <h2>Skills</h2>
        <div>
            {
                skills.map((item) => (
                    <StyledSkill key={item.title} className="row">
                        <div className="col-12 col-md-3 title">{item.title}</div>
                        <div className="col-12 col-md-9">
                            <ul className="keywords">
                                {item.skills.map((skill, index) => (
                                    <li key={index}>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </StyledSkill>
                ))
            }
        </div>
    </SkillsStyles>
);

export default Skills;