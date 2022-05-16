describe("landing page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders unauthenticated state", () => {
    cy.get("h2")
      .contains(/hello there/i)
      .should("be.visible");
  });

  it("renders login button", () => {
    cy.contains(/login/i).should("be.visible");
  });
});
