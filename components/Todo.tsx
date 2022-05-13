import { mutate } from "swr";
import * as React from "react";
import clsx from "clsx";
import NextImage from "next/image";
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

  const containerClasses = clsx(
    "flex items-center",
    "relative",
    "bg-white border-b border-gray-300",
    "first-of-type:rounded-t-lg",
    "dark:bg-gray-800 dark:border-gray-700"
  );

  return (
    <div id={`todo-${id}`} className={containerClasses}>
      <InputCheckbox checked={completed} handleChange={handleToggleCompleted}>
        <p>{description}</p>
      </InputCheckbox>
      <button
        type="button"
        className="absolute flex items-center justify-center right-6"
        onClick={handleDelete}
      >
        <NextImage
          alt={"Delete icon"}
          src={`/assets/icons/icon-cross.svg`}
          width={16}
          height={16}
        />
      </button>
    </div>
  );
};

export default Todo;
