import { mockRequestResponse } from "pages/api/__mocks__/mockRequestResponse";
import { todoRepository, TodoResponse } from "lib/todoRepository";
import handler from "pages/api/todos/[id]";

test("get all todos", async () => {
  const currentUserId = "123";
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
      userId: "456",
    },
  ];
  const currentUsersTodos = mockTodos.filter(
    (todo) => todo.userId === currentUserId
  );
  jest
    .spyOn(todoRepository, "getAll")
    .mockImplementationOnce(() => Promise.resolve(currentUsersTodos));
  const { req, res } = mockRequestResponse({
    method: "GET",
    query: { id: "123" },
  });
  await handler(req, res);

  expect(res.statusCode).toBe(200);
  expect(res._getJSONData()).toEqual(
    expect.objectContaining({
      todos: currentUsersTodos,
    })
  );
});
