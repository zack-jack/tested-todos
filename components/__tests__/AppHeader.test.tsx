import { render, screen } from "@testing-library/react";
import AppHeader from "components/AppHeader";

test("unauthenticated user can log in", async () => {
  render(<AppHeader user={null} />);

  const loginButton = screen.getByText(/login/i);

  expect(loginButton).toBeInTheDocument();
});

test("authenticated user can log out", async () => {
  render(<AppHeader user={{ sub: "123456789" }} />);

  const logoutButton = screen.getByText(/logout/i);

  expect(logoutButton).toBeInTheDocument();
});
