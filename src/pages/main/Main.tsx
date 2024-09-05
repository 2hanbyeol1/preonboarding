import { Loading } from "../../components/common/Loading";
import Post from "../../components/main/Post";
import { useGetPosts } from "../../hooks/queries/post/usePost";

function MainPage() {
  const { data: posts, isPending, isError, error } = useGetPosts();

  if (isPending) return <Loading />;
  if (isError) return <div className="text-center">🚨 {error.message}</div>;

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainPage;
