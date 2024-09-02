import { useGetTodoDetail } from "../../hooks/queries/todo/useTodo";
import useModal from "../../hooks/useModal";
import { TodoType } from "../../types/todo.type";

interface TodoProps {
  todo: TodoType;
}

function Todo({ todo }: TodoProps) {
  const {
    data: todoDetail,
    isPending,
    isError,
    refetch,
  } = useGetTodoDetail(todo.id);

  const modal = useModal();

  const handleTodoClick = () => {
    refetch();
    if (!isPending && !isError)
      modal.open({
        contents: [
          `[유저 ${todoDetail.userId}]의 ${
            todoDetail.completed ? "완료된" : "완료되지 않은"
          } 투두입니다.`,
        ],
      });
  };

  return (
    <div className="p-3 border-b border-gray-300" onClick={handleTodoClick}>
      {todo.title}
    </div>
  );
}

export default Todo;
