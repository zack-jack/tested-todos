import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "components/ThemeToggle";

test("default theme", () => {
  render(
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <ThemeToggle />
    </ThemeProvider>
  );

  const moonIcon = screen.getByAltText("moon icon");

  expect(moonIcon).toBeInTheDocument();
});

test("toggle theme", async () => {
  render(
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <ThemeToggle />
    </ThemeProvider>
  );

  const button = screen.getByRole("button");
  fireEvent.click(button);
  const sunIcon = screen.queryByAltText("sun icon");

  expect(sunIcon).toBeInTheDocument();
});
