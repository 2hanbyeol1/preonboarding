import { Link } from "react-router-dom";
import { PostType } from "../../types/post.type";

export interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  return (
    <Link
      to={`/post/${post.id}/${post.userId}`}
      className="p-3 border-b border-gray-300"
    >
      <h2 className="text-lg font-bold">{post.title}</h2>
      <p>{post.body}</p>
    </Link>
  );
}

export default Post;
