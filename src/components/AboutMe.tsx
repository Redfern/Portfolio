import styled from "styled-components";
import SkillIcon from "./SkillIcon";

const Section = styled.div`
  padding: 20px;
  padding-bottom: 0;

  b {
    color: #f91889;
  }

  .no-bottom-padding {
    padding-bottom: 0;
    margin-bottom: 0;
  }

  svg {
    margin-right: 5px;
    margin-left: 5px;
  }

  .react {
    color: #58c5dc;
  }

  .csharp {
    color: #6b1577;
  }
`;

const AboutMe = () => {
  return (
    <Section data-testid="aboutme-section">
      <h2 data-testid="aboutme-title">Hi! I&apos;m Neil...</h2>
      <p>
        Over my career, I have worked across all aspects of the web development
        stack, including frontend, UX, design, backend using various languages,
        working with databases, dev ops, testing, end to end testing, client
        relations, stakeholder presentations and more.
      </p>
      <p>
        My main skill sets are
        <SkillIcon name="React" />
        and
        <SkillIcon name="C#" />
        but I am very happy and competent in picking up anything a project needs
        and don&apos;t shy from anything challenging and new.
      </p>
      <p>
        I am adept at working with all teams across a business to build apps and
        websites that deliver the best possible product for the company. These
        include Stakeholders, UX teams, Product Owners, Content Managers, Scrum
        Masters, Compliance Officers, frontend, backend, QA and dev ops.
      </p>
      <p>
        I pride myself in creating pixel perfect interfaces that focus on the UX
        journey of the user that will be using the solution, communicating all
        the time with product owners, UX designers and stakeholders to make sure
        the solution is exactly what we need.
      </p>
      <p>
        My approach to code is keep it simple, clean, testable and should be
        able to be picked up and easily understood by anyone.
      </p>
      <p className="no-bottom-padding">
        I am very much a hit the ground running style developer who likes to get
        stuck in on day one.
      </p>
    </Section>
  );
};

export default AboutMe;
