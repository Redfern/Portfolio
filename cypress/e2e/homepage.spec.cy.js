/// <reference types="cypress" />
/// <reference types="../support" />

describe("homepage tests", () => {
  it("should have my name in the title", () => {
    cy.visit("http://localhost:5173");

    cy.getByTestId("header-title").should("have.text", "Neil Redfern");
    cy.getByTestId("header-tagline").should(
      "have.text",
      "Senior Full Stack Software Developer"
    );
  });

  it("should show the skills section", () => {
    cy.visit("http://localhost:5173");

    cy.getByTestId("front-end-section");
    cy.getByTestId("back-end-section");
    cy.getByTestId("mobile-development-section");
    cy.getByTestId("cms-section");
    cy.getByTestId("infrastructure-/-cloud-section");
    cy.getByTestId("tools-section");
    cy.getByTestId("working-section");
    cy.getByTestId("testing-section");

    cy.getByTestId("testing-section").should("contain.text", "Cypress"); // quite meta..
    cy.getByTestId("front-end-section").should("contain.text", "React");
    cy.getByTestId("back-end-section").should("contain.text", "C#");
    cy.getByTestId("infrastructure-/-cloud-section").should(
      "contain.text",
      "Docker"
    );
    cy.getByTestId("tools-section").should("contain.text", "Figma");
    cy.getByTestId("working-section").should("contain.text", "Agile");
  });

  it("should show the about me section", () => {
    cy.visit("http://localhost:5173");

    cy.getByTestId("aboutme-title").should("contain.text", "Hi! I'm Neil...");
    cy.getByTestId("aboutme-section").contains(
      " am very much a hit the ground running style developer who likes to get stuck in on day one"
    );
  });

  it("should show the experience section", () => {
    cy.visit("http://localhost:5173");

    cy.getByTestId("experience-title").should(
      "have.text",
      "I've had plenty of experience with..."
    );

    cy.getByTestId("experience-section").contains("7 years over 5 roles");
  });

  it("should get the work history section", () => {
    cy.visit("http://localhost:5173");

    cy.getByTestId("work-title").should(
      "have.text",
      "I've worked at a number of places over my career..."
    );

    cy.getByTestId("work-section").contains("Vortex IOT");
    cy.getByTestId("work-section").contains("The Tote");
  });
});
