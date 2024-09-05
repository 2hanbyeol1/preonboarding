import { useQuery } from "@tanstack/react-query";
import {
  getCommentsByPostId,
  getPostDetailById,
  getPosts,
  getUserByEmail as getUserByUserId,
} from "../../../apis/post.api";
import { CommentType, PostType, UserType } from "../../../types/post.type";
import { postQueryKeys } from "./queryKey";

export const useGetPosts = () =>
  useQuery<PostType[]>({
    queryKey: postQueryKeys.all,
    queryFn: async () => await getPosts(),
  });

export const useGetPostDetailById = (postId: PostType["id"]) =>
  useQuery<PostType>({
    queryKey: postQueryKeys.detail(postId),
    queryFn: async () => await getPostDetailById(postId),
  });

export const useGetCommentsByPostId = (postId: CommentType["postId"]) =>
  useQuery<CommentType[]>({
    queryKey: postQueryKeys.comment(postId),
    queryFn: async () => await getCommentsByPostId(postId),
  });

export const useGetUserByUserId = (userId: UserType["id"]) =>
  useQuery<UserType>({
    queryKey: postQueryKeys.user(userId),
    queryFn: async () => await getUserByUserId(userId),
  });
