import { useQuery } from "@tanstack/react-query";
import { getTodoByUserId, getTodos } from "../../../apis/todo.api";
import { TodoType } from "../../../types/todo.type";
import { todoQueryKeys } from "./queryKey";

export const useGetTodos = () =>
  useQuery<TodoType[]>({
    queryKey: todoQueryKeys.all,
    queryFn: async () => await getTodos(),
  });

export const useGetTodoByUserId = (userId: TodoType["userId"]) =>
  useQuery<TodoType[]>({
    queryKey: todoQueryKeys.detail(userId),
    queryFn: async () => await getTodoByUserId(userId),
  });
