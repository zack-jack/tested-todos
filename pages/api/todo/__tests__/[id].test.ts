import { mockRequestResponse } from "pages/api/__mocks__/mockRequestResponse";
import { todoRepository, TodoResponse } from "lib/todoRepository";
import handler from "pages/api/todo/[id]";

describe("only allow PATCH and DELETE request methods", () => {
  test("GET", async () => {
    const { req, res } = mockRequestResponse({ method: "GET" });
    await handler(req, res);

    expect(res.statusCode).toBe(405);
  });

  test("POST", async () => {
    const { req, res } = mockRequestResponse({ method: "POST" });
    await handler(req, res);

    expect(res.statusCode).toBe(405);
  });

  test("PUT", async () => {
    const { req, res } = mockRequestResponse({ method: "PUT" });
    await handler(req, res);

    expect(res.statusCode).toBe(405);
  });
});

describe("update todo", () => {
  test("invalid input", async () => {
    const { req, res } = mockRequestResponse({
      method: "PATCH",
      body: { completed: "true" },
      query: { id: "123456" },
    });
    await handler(req, res);

    expect(res.statusCode).toBe(400);
  });

  test("valid input", async () => {
    const updatedTodo: TodoResponse = {
      id: 1,
      description: "test 1",
      completed: false,
      userId: "123",
    };
    jest
      .spyOn(todoRepository, "updateCompletedStatus")
      .mockImplementationOnce(() => Promise.resolve(updatedTodo));
    const { req, res } = mockRequestResponse({
      method: "PATCH",
      body: { completed: true },
      query: { id: "123456" },
    });
    await handler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual(
      expect.objectContaining({
        todo: updatedTodo,
      })
    );
  });
});

test("delete todo", async () => {
  jest
    .spyOn(todoRepository, "delete")
    .mockImplementationOnce(() => Promise.resolve({ success: true }));
  const { req, res } = mockRequestResponse({
    method: "DELETE",
    body: { completed: true },
    query: { id: "123456" },
  });
  await handler(req, res);

  expect(res.statusCode).toBe(200);
});
