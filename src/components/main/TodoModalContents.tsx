import { useGetTodoByUserId } from "../../hooks/queries/todo/useTodo";
import { TodoType } from "../../types/todo.type";
import { Loading } from "../common/Loading";
import { TodoProps } from "./Todo";

function TodoModalContents({ todo }: TodoProps) {
  const {
    data: todoDetail,
    isPending,
    isError,
    error,
  } = useGetTodoByUserId(todo.userId);

  if (isPending) return <Loading />;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      {todoDetail.map((detail: TodoType) => (
        <div key={detail.id}>
          {detail.completed}
          {detail.id}
          {detail.title}
          {detail.userId}
        </div>
      ))}
    </div>
  );
}

export default TodoModalContents;
