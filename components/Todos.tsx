import Todo from "components/Todo";

type TodosProps = {
  todos: { id: number; description: string; completed: boolean }[];
};

const Todos = ({ todos }: TodosProps): JSX.Element => {
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
    </div>
  );
};

export default Todos;
