import React from 'react';
import PostCard, { Post } from './PostCard';

interface PostListProps {
  posts: Array<Post>;
  filters?: boolean;
  pagination?: boolean;
}

export default function PostList({
  posts,
  filters = false,
  pagination = false,
}: PostListProps) {
  return (
    <div className="w-full flex justify-center px-10 md:px-28">
      {filters ? <div>I'M A FILTER</div> : null}
      <div className="grid grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post?.id} {...post} />
        ))}
      </div>
      {pagination ? <div>I'M A pagination</div> : null}
    </div>
  );
}
