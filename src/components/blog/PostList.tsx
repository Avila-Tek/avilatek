import React from 'react';
import PostCard, { Post } from './PostCard';

interface PostListProps {
  posts: Array<Post>;
  filters?: boolean;
  pagination?: boolean;
}

const PER_PAGE = 9;

export default function PostList({
  posts,
  filters = false,
  pagination = false,
}: PostListProps) {
  const [items, setItems] = React.useState<Array<Post>>([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(
    function syncItems() {
      if (posts && posts.length > 0) {
        const skip = Math.max(0, (page - 1) * PER_PAGE);
        setItems(posts?.slice(skip, page * PER_PAGE));
      }
    },
    [posts, page]
  );

  return (
    <div className="w-full flex justify-center px-8">
      {filters ? <div>I'M A FILTER</div> : null}
      <div className="w-full flex flex-wrap justify-center">
        {posts.map((post) => (
          <PostCard key={post?.id} {...post} />
        ))}
      </div>
      {pagination ? (
        <div className="flex bg-light-blue dark:bg-dark-gray rounded-full py-1 px-6 shadow-blue dark:shadow-none">
          <button
            type="button"
            aria-label="Previous button"
            className="flex items-center text-sm font-medium text-secondary-50 dark:text-neutral-400 hover:text-primary-400 focus:outline-none"
            disabled={!(page > 1)}
            onClick={(e) => {
              e.preventDefault();
              setPage((_page) => _page - 1);
            }}
          >
            Anterior
          </button>
          <span>{`Página ${page} de ${Math.ceil(
            posts.length / PER_PAGE
          )}`}</span>
          <button
            type="button"
            aria-label="Next button"
            className="flex items-center text-sm font-medium text-secondary-50 dark:text-neutral-400 hover:text-primary-400 focus:outline-none"
            disabled={
              !(items?.length > PER_PAGE || page * PER_PAGE < posts?.length)
            }
            onClick={(e) => {
              e.preventDefault();
              setPage((_page) => _page + 1);
            }}
          >
            Siguiente
          </button>
        </div>
      ) : null}
    </div>
  );
}
