import { PostProps } from "@/interfaces";
import React from "react";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <p>Content: {content}</p>
        <p>User ID: {userId}</p>
      </div>
    </div>
  );
};

export default PostCard;
