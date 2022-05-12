import { createTodoInput, updateTodoInput } from "utils/validators/todo";

describe("create todo input validator", () => {
  test("valid input", () => {
    const { success } = createTodoInput.safeParse({
      description: "test",
      userId: "test",
    });

    expect(success).toBe(true);
  });

  test("invalid min length input", () => {
    const { success } = createTodoInput.safeParse({
      description: "t",
      userId: "t",
    });

    expect(success).toBe(false);
  });

  test("invalid max length input", () => {
    const { success } = createTodoInput.safeParse({
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,.",
      userId:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,.",
    });

    expect(success).toBe(false);
  });

  test("invalid data type input", () => {
    const { success } = createTodoInput.safeParse({
      description: 1,
      userId: 1,
    });

    expect(success).toBe(false);
  });
});

describe("update todo input validator", () => {
  test("valid input", () => {
    const { success } = updateTodoInput.safeParse({
      completed: true,
    });

    expect(success).toBe(true);
  });

  test("invalid data type input", () => {
    const { success } = updateTodoInput.safeParse({
      completed: "false",
    });

    expect(success).toBe(false);
  });
});
