/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Privacy Page', () => {
  it('Should navigate to Privacy Page.', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/privacy');

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('Toply');
    cy.get('h2').contains('Privacy');
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
