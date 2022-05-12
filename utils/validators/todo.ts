import { z } from "zod";

export const createTodoInput = z.object({
  description: z.string().min(2).max(255),
  userId: z.string().min(1).max(255),
});

export const updateTodoInput = z.object({
  completed: z.boolean(),
});
