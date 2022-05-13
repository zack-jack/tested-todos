import { z } from "zod";

export const createTodoDto = z.object({
  description: z.string().min(2).max(255),
  userId: z.string().min(1).max(255),
});

export const updateTodoDto = z.object({
  completed: z.boolean(),
});

export const createTodoForm = z.object({
  createTodo: z.string().min(2).max(255),
});
