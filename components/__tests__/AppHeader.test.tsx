import { render, screen } from "@testing-library/react";
import AppHeader from "components/AppHeader";

test("unauthenticated user can log in", async () => {
  render(<AppHeader isAuthenticated={false} />);

  const loginButton = screen.getByText(/login/i);

  expect(loginButton).toBeInTheDocument();
});

test("authenticated user can log out", async () => {
  render(<AppHeader isAuthenticated={true} />);

  const logoutButton = screen.getByText(/logout/i);

  expect(logoutButton).toBeInTheDocument();
});
