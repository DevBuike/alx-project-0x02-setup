import Header from '@/components/layout/Header';
// import {useMemo, useState, useEffect} from 'react';
import PostCard from '@/components/common/PostCard';
import { PostData, PostsPageProps } from '@/interfaces';


const Posts: React.FC<PostsPageProps> = ({ posts }) => {

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        {
          posts?.map(({ title, body, userId, id }: PostData) => (
            <PostCard key={id} title={title} content={body} userId={userId} />
            ))
          }
      </div>
    </>
  );
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Posts;
