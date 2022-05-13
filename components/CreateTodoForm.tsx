import { useUser } from "@auth0/nextjs-auth0";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { mutate } from "swr";
import * as React from "react";
import { createTodoForm } from "utils/validators/todo";
import InputText from "components/InputText";

type FormData = {
  createTodo: string;
};

const CreateTodoForm = () => {
  const { user } = useUser();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(createTodoForm),
  });
  const [formError, setFormError] = React.useState<string>("");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!user?.sub) {
      setFormError("You must be logged in to create a todo");
      return;
    }

    const response = await fetch("/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: data.createTodo,
        userId: user.sub,
      }),
    });
    const { todo } = await response.json();
    if (!todo) {
      setFormError("Failed to create todo");
    }

    mutate("/api/todo");
    reset();
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
      <InputText
        label="Create Todo"
        name="createTodo"
        placeholder="Create a new todo..."
        register={register}
        error={errors?.createTodo?.message || ""}
      />
      {formError && <p>{formError}</p>}
      <button type="submit" className="mt-6">
        Submit
      </button>
    </form>
  );
};

export default CreateTodoForm;
