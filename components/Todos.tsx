import * as React from "react";
import Todo from "components/Todo";

type TodosProps = {
  todos: {
    id: number;
    description: string;
    completed: boolean;
    userId: string;
  }[];
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
    <div className="px-6 mt-10">
      <div className="bg-white rounded-lg shadow-sm dark:bg-gray-800">
        {todos.map(({ id, description, completed, userId }) => {
          return (
            <Todo
              key={id}
              id={id}
              description={description}
              completed={completed}
              userId={userId}
            />
          );
        })}
        <div className="p-6">
          <p className="text-gray-500">{`${totalRemaining} items remaining`}</p>
        </div>
      </div>
    </div>
  );
};

export default Todos;
