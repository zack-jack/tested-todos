import type { NextApiRequest, NextApiResponse } from "next";
import { TodoResponse, todoRepository } from "lib/todoRepository";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  switch (req?.method) {
    case "GET":
      // Get all todos
      const todos: TodoResponse[] = await todoRepository.getAll(id as string);
      res.status(200);
      res.json({ todos });
      return;
    default:
      // Method not allowed
      res.status(405);
      res.end();
      return;
  }
}
