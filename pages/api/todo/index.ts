import type { NextApiRequest, NextApiResponse } from "next";
import { TodoResponse } from "lib/todoRepository";
import { todoRepository } from "lib/todoRepository";
import { createTodoDto } from "utils/validators/todo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req?.method) {
    case "POST":
      const { description, userId } = req.body;
      // Create a new todo
      const { success } = createTodoDto.safeParse({
        description,
        userId,
      });
      if (!success) {
        res.status(400);
        res.json({ error: "Invalid input" });
        return;
      }

      const todo: TodoResponse | null = await todoRepository.create({
        description,
        userId,
      });
      if (!todo) {
        res.status(500);
        res.json({ error: "Failed to create todo" });
        return;
      }

      res.status(201);
      res.json({ todo });
      return;
    default:
      // Method not allowed
      res.status(405);
      res.end();
      return;
  }
}
