import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import React, {useMemo, useState} from 'react';
import PostModal from '@/components/common/PostModal';

function Home() {
  const cardId = useMemo(() => crypto.randomUUID(), []);

  // post modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const addNewPost = (post: { title: string; content: string }) => {
    setPosts([...posts, post]);
  };

  return (
    <>
      <Header />
      
      <div>
        <Card
          className="mb-4 w-100"
          id= {cardId}
          title="Welcome to My Application"
          content="This is a simple card component that displays a title and some content."
        />
      </div>

      <button className='bg-blue-500 p-2 rounded mt-1' onClick={() => setIsModalOpen(true)}>Create Post </button>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addNewPost}
      />

      <div>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Card
              className="mb-4 w-100"
              key={index}
              id={`post-${index}`}
              title={post.title}
              content={post.content}
            />
          ))
        ) : (
          <p>No posts available. Create a new post!</p>
        )}
      </div>
    </>
  );
}
export default Home;