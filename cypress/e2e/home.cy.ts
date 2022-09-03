/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Home Page', () => {
  it('Should navigate to Home Page.', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('Toply');
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
