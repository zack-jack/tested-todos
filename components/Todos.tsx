import * as React from "react";
import Todo from "components/Todo";

type TodosProps = {
  todos: { id: number; description: string; completed: boolean }[];
};

const Todos = ({ todos }: TodosProps): JSX.Element => {
  const totalRemaining: number = React.useMemo(() => {
    return todos?.filter(({ completed }) => !completed).length;
  }, [todos]);

  if (!todos?.length) {
    return (
      <div>
        <p>No todos</p>
      </div>
    );
  }

  return (
    <div className="p-10">
      {todos.map(({ id, description, completed }) => {
        return (
          <Todo
            key={id}
            id={id}
            description={description}
            completed={completed}
          />
        );
      })}
      <div className="mt-6">
        <p>{`${totalRemaining} remaining`}</p>
      </div>
    </div>
  );
};

export default Todos;
