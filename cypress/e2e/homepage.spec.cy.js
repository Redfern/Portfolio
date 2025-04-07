/// <reference types="cypress" />
/// <reference types="../support" />

describe("homepage tests", () => {
  it("should have my name in the title", () => {
    cy.visit("http://localhost:3000");

    cy.getByTestId("header-title").should("have.text", "Neil Redfern");
    cy.getByTestId("header-tagline").should("have.text", "Software Developer");
  });
});
