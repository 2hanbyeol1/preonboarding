import useModal from "../../hooks/useModal";
import { TodoType } from "../../types/todo.type";
import TodoModalContents from "./TodoModalContents";

export interface TodoProps {
  todo: TodoType;
}

function Todo({ todo }: TodoProps) {
  const modal = useModal();

  const handleTodoClick = () => {
    modal.open({
      contents: <TodoModalContents todo={todo} />,
    });
  };

  return (
    <div className="p-3 border-b border-gray-300" onClick={handleTodoClick}>
      {todo.title}
    </div>
  );
}

export default Todo;
