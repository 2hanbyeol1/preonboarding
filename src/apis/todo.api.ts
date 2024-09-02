import axios from "axios";
import { TodoType } from "../types/todo.type";

export const getTodos = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
};

export const getTodoById = async (todoId: TodoType["id"]) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  return response.data;
};
