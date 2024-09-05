import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/common/Button";
import { Loading } from "../../components/common/Loading";
import UserModalContents from "../../components/main/UserModalContents";
import {
  useGetCommentsByPostId,
  useGetPostDetailById,
  useGetUserByUserId,
} from "../../hooks/queries/post/usePost";
import useModal from "../../hooks/useModal";
import { CommentType, PostType, UserType } from "../../types/post.type";

function PostDetailPage() {
  const { postId, userId } = useParams() as {
    postId: PostType["id"];
    userId: UserType["id"];
  };
  const modal = useModal();
  const navigate = useNavigate();
  const {
    data: post,
    isPending: isGettingPostDetail,
    isError: isGetPostError,
    error: getPostError,
  } = useGetPostDetailById(postId);
  const {
    data: comments,
    isPending: isGettingComments,
    isError: isGetCommentsError,
    error: getCommentsError,
  } = useGetCommentsByPostId(postId);
  const {
    data: user,
    isPending: isGettingUser,
    isError: isGetUserError,
    error: getUserError,
  } = useGetUserByUserId(userId);

  if (!postId) {
    navigate("/");
    return <></>;
  }

  if (isGettingPostDetail || isGettingComments || isGettingUser)
    return <Loading />;
  if (isGetPostError || isGetCommentsError || isGetUserError)
    return (
      <div>
        🚨{" "}
        {getPostError?.message ||
          getCommentsError?.message ||
          getUserError?.message}
      </div>
    );

  const handleUserClick = () => {
    modal.open({
      contents: <UserModalContents user={user} />,
    });
  };

  return (
    <div className="h-[calc(100vh-76px)] flex flex-col gap-5">
      <div className="flex flex-col gap-2 mt-3">
        <h1 className="text-2xl font-extrabold">{post.title}</h1>
        <div className="text-lg">{post.body}</div>
        <div className="mt-3 ml-auto">
          <Button
            type="button"
            intent="secondary"
            variant="outline"
            fontSize="lg"
            onClick={handleUserClick}
          >
            <div className="flex items-center gap-3">
              <img
                className="rounded-full"
                src={`https://i.pravatar.cc/30?img=${user.id}`}
                alt={user.username}
              />
              <div>{user.username}</div>
            </div>
          </Button>
        </div>
      </div>
      <div className="w-full h-0 border border-slate-200"></div>
      <div className="flex-grow-1">
        <ul className="flex flex-col gap-3 mr-3">
          {comments.map((comment: CommentType) => (
            <li key={comment.id}>
              <button className="font-semibold">{comment.email}</button>
              <p className="pl-4 text-slate-700">ㄴ {comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PostDetailPage;
