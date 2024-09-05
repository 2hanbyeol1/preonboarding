import { TodoType } from "../../../types/todo.type";

const todoQueryKey = "todo";

export const todoQueryKeys = {
  all: [todoQueryKey] as const,
  detail: (userId: TodoType["userId"]) => [todoQueryKey, userId] as const,
};
