import { useQuery } from "@tanstack/react-query";
import { getTodoById, getTodos } from "../../../apis/todo.api";
import { TodoType } from "../../../types/todo.type";
import { todoQueryKeys } from "./queryKey";

export const useGetTodos = () =>
  useQuery<TodoType[]>({
    queryKey: todoQueryKeys.all,
    queryFn: async () => await getTodos(),
  });

export const useGetTodoDetail = (todoId: TodoType["id"]) =>
  useQuery<TodoType>({
    queryKey: todoQueryKeys.detail(todoId),
    queryFn: async () => await getTodoById(todoId),
  });
