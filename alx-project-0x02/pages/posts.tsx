import Header from '@/components/layout/Header';
import {useMemo, useState, useEffect} from 'react';
import PostCard from '@/components/common/PostCard';


interface PostData {
  id: number;
  title: string;
  body: string;
  userId: number;
}

function Posts() {
  // State to hold posts data
  const [posts, setPosts] = useState<PostData[]>([]);

  // Fetching posts data from the API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10))); // Fetch first 10 posts for display
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} content={post.body} userId={post.userId} />
        ))}
      </div>
    </>
  );
}

export default Posts;