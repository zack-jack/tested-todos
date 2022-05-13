import { render, screen } from "@testing-library/react";
import Todos from "components/Todos";

test("Todos render", async () => {
  render(
    <Todos
      todos={[
        {
          id: 1,
          description: "Test",
          completed: false,
        },
      ]}
    />
  );

  expect(screen.getByText("Test")).toBeInTheDocument();
});

test("Todos null state", async () => {
  render(<Todos todos={[]} />);

  expect(screen.getByText("No todos")).toBeInTheDocument();
});
