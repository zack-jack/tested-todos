describe("user login", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.loginViaAuth0(
      Cypress.env("auth0_username"),
      Cypress.env("auth0_password")
    );
  });

  it("successfully authenticates a user", () => {
    cy.contains(/logout/i).should("be.visible");
  });
});
