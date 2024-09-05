import { CommentType, PostType, UserType } from "../../../types/post.type";

const postQueryKey = "post";
const commentQueryKey = "comment";
const userQueryKey = "user";

export const postQueryKeys = {
  all: [postQueryKey] as const,
  detail: (postId: PostType["id"]) =>
    [postQueryKey, { postId: postId }] as const,
  comment: (postId: CommentType["postId"]) =>
    [commentQueryKey, { postId: postId }] as const,
  user: (userId: UserType["id"]) => [userQueryKey, { userId: userId }] as const,
};
