describe("user login", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });

  it("successfully authenticates a user", () => {
    cy.contains(/logout/i).should("be.visible");
  });
});
