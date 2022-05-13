import { TodoResponse } from "lib/todoRepository";
import { todoRepository } from "lib/todoRepository";
import { mockRequestResponse } from "pages/api/__mocks__/mockRequestResponse";
import handler from "pages/api/todo/index";

describe("only allow GET and POST request methods", () => {
  test("PUT", async () => {
    const { req, res } = mockRequestResponse({ method: "PUT" });
    await handler(req, res);

    expect(res.statusCode).toBe(405);
  });

  test("PATCH", async () => {
    const { req, res } = mockRequestResponse({ method: "PATCH" });
    await handler(req, res);

    expect(res.statusCode).toBe(405);
  });

  test("DELETE", async () => {
    const { req, res } = mockRequestResponse({ method: "DELETE" });
    await handler(req, res);

    expect(res.statusCode).toBe(405);
  });
});

test("get all todos", async () => {
  const mockTodos: TodoResponse[] = [
    {
      id: 1,
      description: "test 1",
      completed: false,
      userId: "123",
    },
    {
      id: 2,
      description: "test 2",
      completed: true,
      userId: "123",
    },
  ];
  jest
    .spyOn(todoRepository, "getAll")
    .mockImplementationOnce(() => Promise.resolve(mockTodos));
  const { req, res } = mockRequestResponse({ method: "GET" });
  await handler(req, res);

  expect(res.statusCode).toBe(200);
  expect(res._getJSONData()).toEqual(
    expect.objectContaining({
      todos: mockTodos,
    })
  );
});

describe("create new todo", () => {
  test("invalid input", async () => {
    const newTodo = {
      description: "t",
      userId: "1",
    };
    const { req, res } = mockRequestResponse({ method: "POST", body: newTodo });
    await handler(req, res);

    expect(res.statusCode).toBe(400);
  });

  test("valid input", async () => {
    const newTodo: TodoResponse = {
      id: 3,
      description: "test",
      completed: false,
      userId: "test",
    };
    jest
      .spyOn(todoRepository, "create")
      .mockImplementationOnce(() => Promise.resolve(newTodo));
    const { req, res } = mockRequestResponse({
      method: "POST",
      body: {
        description: "test",
        userId: "test",
      },
    });
    await handler(req, res);

    expect(res.statusCode).toBe(201);
  });
});
