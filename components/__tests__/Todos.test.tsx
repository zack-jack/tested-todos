import { render, screen } from "@testing-library/react";
import Todos from "components/Todos";

test("todos render", async () => {
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

test("todos null state", async () => {
  render(<Todos todos={[]} />);

  expect(screen.getByText("No todos")).toBeInTheDocument();
});

test("todo items remaining: 0", async () => {
  render(
    <Todos
      todos={[
        {
          id: 1,
          description: "Test",
          completed: true,
        },
      ]}
    />
  );

  expect(screen.getByText("0 items remaining")).toBeInTheDocument();
});

test("todo items remaining: 1", async () => {
  render(
    <Todos
      todos={[
        {
          id: 1,
          description: "Test1",
          completed: true,
        },
        {
          id: 2,
          description: "Test2",
          completed: false,
        },
      ]}
    />
  );

  expect(screen.getByText("1 items remaining")).toBeInTheDocument();
});
