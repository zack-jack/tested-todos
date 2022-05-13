import { Todo } from "@prisma/client";
import { prisma } from "lib/prisma";

export type TodoResponse = Pick<
  Todo,
  "id" | "description" | "completed" | "userId"
>;

class TodoRepository {
  async getAll(): Promise<TodoResponse[]> {
    try {
      const todos: TodoResponse[] = await prisma.todo.findMany({
        select: {
          id: true,
          description: true,
          completed: true,
          userId: true,
        },
        orderBy: { createdAt: "desc" },
      });
      return todos;
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  async create({
    description,
    userId,
  }: {
    description: string;
    userId: string;
  }): Promise<TodoResponse | null> {
    try {
      const createdTodo: TodoResponse = await prisma.todo.create({
        data: {
          description,
          completed: false,
          userId,
        },
        select: {
          id: true,
          description: true,
          completed: true,
          userId: true,
        },
      });
      return createdTodo;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async updateCompletedStatus(
    id: number,
    completed: boolean
  ): Promise<TodoResponse | null> {
    try {
      const updatedTodo: Todo = await prisma.todo.update({
        where: { id },
        data: { completed },
      });
      return updatedTodo;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async delete(id: number): Promise<{ success: boolean }> {
    try {
      await prisma.todo.delete({
        where: { id },
      });
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false };
    }
  }
}

export const todoRepository = new TodoRepository();
