import axios from "axios";
import { TodoType } from "../types/todo.type";

export const getTodos = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
};

export const getTodoByUserId = async (userId: TodoType["userId"]) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
  );
  return response.data;
};
