import { TodoType } from "../../../types/todo.type";

const todoQueryKey = "todo";

export const todoQueryKeys = {
  all: [todoQueryKey] as const,
  detail: (todoId: TodoType["id"]) => [todoQueryKey, todoId] as const,
};
