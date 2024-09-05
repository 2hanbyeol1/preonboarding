import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/common/Button";
import { Loading } from "../../components/common/Loading";
import UserModalContents from "../../components/main/UserModalContents";
import { useGetPostDetailById } from "../../hooks/queries/post/usePost";
import useModal from "../../hooks/useModal";
import { CommentType, PostType, UserType } from "../../types/post.type";

function PostDetailPage() {
  const { postId } = useParams() as {
    postId: PostType["id"];
    userId: UserType["id"];
  };
  const modal = useModal();
  const navigate = useNavigate();
  const {
    data: post,
    isPending,
    isError,
    error,
  } = useGetPostDetailById(postId);

  if (!postId) {
    navigate("/");
    return <></>;
  }

  if (isPending) return <Loading />;
  if (isError) return <div>🚨 {error?.message}</div>;

  const handleUserClick = () => {
    modal.open({
      contents: <UserModalContents user={post.user} />,
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
                src={`https://i.pravatar.cc/30?img=${post.user.id}`}
                alt={post.user.username}
              />
              <div>{post.user.username}</div>
            </div>
          </Button>
        </div>
      </div>
      <div className="w-full h-0 border border-slate-200"></div>
      <div className="flex-grow-1">
        <ul className="flex flex-col gap-3 mr-3">
          {post.comments.map((comment: CommentType) => (
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
