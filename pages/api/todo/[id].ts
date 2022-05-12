import type { NextApiRequest, NextApiResponse } from "next";
import { todoRepository } from "lib/todoRepository";
import { updateTodoInput } from "utils/validators/todo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  switch (req?.method) {
    case "PATCH":
      // Toggle todo completed status
      const { completed } = req.body;
      const { success: isUpdateInputValid } = updateTodoInput.safeParse({
        completed,
      });
      if (!isUpdateInputValid) {
        res.status(400);
        res.json({ error: "Invalid input" });
        return;
      }

      const updatedTodo = await todoRepository.updateCompletedStatus(
        +id,
        completed
      );
      if (!updatedTodo) {
        res.status(500);
        res.json({ error: "Failed to update todo" });
        return;
      }

      res.status(200);
      res.json({ todo: updatedTodo });
      return;
    case "DELETE":
      // Remove todo
      const { success } = await todoRepository.delete(+id);
      if (!success) {
        res.status(500);
        res.json({ error: "Failed to delete todo" });
        return;
      }

      res.status(200);
      res.json({ success });
      return;
    default:
      // Method not allowed
      res.status(405);
      res.end();
      return;
  }
}
