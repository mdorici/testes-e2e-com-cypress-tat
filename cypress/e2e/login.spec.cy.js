it("successfully logs in", () => {
  cy.intercept("GET", "**/notes").as("getNotes");

  cy.login(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"), {
    cacheSession: false,
  });

  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(5000);
  cy.wait("@getNotes");
});
