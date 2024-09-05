import axios from "axios";
import { CommentType, PostType, UserType } from "../types/post.type";

export const getPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

export const getPostDetailById = async (postId: PostType["id"]) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return response.data;
};

export const getCommentsByPostId = async (postId: CommentType["postId"]) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  return response.data;
};

export const getUserByEmail = async (userId: UserType["id"]) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return response.data;
};
