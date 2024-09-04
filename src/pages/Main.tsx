import { Loading } from "../components/common/Loading";
import Todo from "../components/main/Todo";
import { useGetTodos } from "../hooks/queries/todo/useTodo";

function MainPage() {
  const { data: todos, isPending, isError } = useGetTodos();

  if (isPending) return <Loading />;
  if (isError) return <div>err</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-3">Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainPage;
