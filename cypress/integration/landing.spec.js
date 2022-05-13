describe("landing page", () => {
  it("unauthenticated state", async () => {
    cy.visit("http://localhost:3000/");

    cy.get("h2").contains(/hello there/i);
    cy.contains(/login/i).should("be.visible");
  });

  it("navigates to auth0 when login is clicked", () => {
    cy.visit("http://localhost:3000/");

    cy.contains(/login/i).click();

    cy.url().should("include", "https://tested-todos.us.auth0.com/");
  });
});
