import { useQuery } from "react-query";

function PostsComponent() {

  const fetchPosts = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.json();
  };

  const {
    data,
    isLoading,
    isError,
    refetch
  } = useQuery(
    "posts",
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  );

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>Error fetching data</h2>;

  return (
    <div>
      <h1>Posts</h1>

      <button onClick={refetch}>
        Refetch Posts
      </button>

      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsComponent;