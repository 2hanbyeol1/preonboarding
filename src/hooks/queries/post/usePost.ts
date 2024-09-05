import { useQuery } from "@tanstack/react-query";
import {
  getCommentsByPostId,
  getPostDetailById,
  getPosts,
  getUserByEmail as getUserByUserId,
} from "../../../apis/post.api";
import { PostDetailType, PostType } from "../../../types/post.type";
import { postQueryKeys } from "./queryKey";

export const useGetPosts = () =>
  useQuery<PostType[]>({
    queryKey: postQueryKeys.all,
    queryFn: async () => await getPosts(),
  });

export const useGetPostDetailById = (postId: PostType["id"]) =>
  useQuery<PostDetailType>({
    queryKey: postQueryKeys.detail(postId),
    queryFn: async () => {
      const post = await getPostDetailById(postId);
      const comments = await getCommentsByPostId(postId);
      const user = await getUserByUserId(post.userId);
      return { ...post, comments, user };
    },
  });
