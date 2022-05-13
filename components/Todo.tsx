import { mutate } from "swr";
import * as React from "react";
import InputCheckbox from "components/InputCheckbox";

type TodoProps = {
  id: number;
  description: string;
  completed: boolean;
};

const Todo = ({ id, description, completed }: TodoProps): JSX.Element => {
  const handleToggleCompleted = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const requestUrl = `/api/todo/${id}`;
    const response = await fetch(requestUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !completed,
      }),
    });
    const { todo } = await response.json();
    if (!todo || todo?.completed === completed) {
      return;
    }

    mutate("/api/todo");
  };

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const requestUrl = `/api/todo/${id}`;
    const response = await fetch(requestUrl, { method: "DELETE" });
    const { success } = await response.json();
    if (!success) return;

    mutate("/api/todo");
  };

  return (
    <div
      id={`todo-${id}`}
      className="flex justify-between mt-6 first-of-type:mt-0"
    >
      <InputCheckbox checked={completed} handleChange={handleToggleCompleted}>
        <p>{description}</p>
      </InputCheckbox>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
