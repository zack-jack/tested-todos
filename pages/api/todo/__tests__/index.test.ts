import { TodoResponse } from "lib/todoRepository";
import { todoRepository } from "lib/todoRepository";
import { mockRequestResponse } from "pages/api/__mocks__/mockRequestResponse";
import handler from "pages/api/todo/index";

describe("only allow POST request methods", () => {
  test("GET", async () => {
    const { req, res } = mockRequestResponse({ method: "GET" });
    await handler(req, res);

    expect(res.statusCode).toBe(405);
  });

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
