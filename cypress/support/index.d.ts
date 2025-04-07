/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Get element by data-testid
     * @example
     *  cy.getByTestId('test')
     */
    getByTestId(id: string): Chainable<any>;
  }
}
