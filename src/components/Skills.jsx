import React from 'react';
import styled from 'styled-components';

const SkillsStyles = styled.div`
    padding: 20px;
`;


const Skills = () => (
    <SkillsStyles>
        <h2>What i do</h2>
        <div>
            <h3>Front end</h3>
            <div>
                SASS, ReactJs, Javascript, ES6
            </div>

            <h3>Back end</h3>
            <div>
                C#, dot net core, VB.Net, PHP, NodeJs
            </div>

            <h3>Apps</h3>
            <div>
                Phonegap, Objective-C
            </div>

            <h3>CMS</h3>
            <div>
                Umbraco, Sitecore, Telligent, Immediacy and Contentful 
            </div>

            <h3>Infrastructure / Cloud</h3>
            <div>
                AWS (Elastic Beanstalk, Lambda, Cloud Formation, EC2, S3, Api Gateway), Jenkins, TeamCity, GO CD
            </div>

            <h3>Tools</h3>
            <div>
                Jira, Mingle, Trello, Physical Kanban Board
            </div>
        </div>
    </SkillsStyles>
);

export default Skills;