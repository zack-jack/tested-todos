import { useSession } from "next-auth/react";
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
  const { data: session } = useSession();
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
    if (!session?.user?.id) {
      setFormError("You must be logged in to create a todo");
      return;
    }

    const response = await fetch(`/api/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: data.createTodo,
        userId: session.user.id,
      }),
    });
    const { todo } = await response.json();
    if (!todo) {
      setFormError("Failed to create todo");
    }

    mutate(`/api/todos/${session.user.id}`);
    reset();
  };

  return (
    <form className="px-6" onSubmit={handleSubmit(onSubmit)}>
      <InputText
        label="Create Todo"
        name="createTodo"
        placeholder="Create a new todo..."
        register={register}
        error={errors?.createTodo?.message || ""}
      />
      {formError && <p className="mt-3 error">{formError}</p>}
      <button className="w-full mt-6 c-btn">Submit</button>
    </form>
  );
};

export default CreateTodoForm;
