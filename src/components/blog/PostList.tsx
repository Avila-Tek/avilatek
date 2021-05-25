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
    <div className="w-full flex flex-col justify-center px-8">
      {filters ? <div>I'M A FILTER</div> : null}
      <div className="w-full flex flex-wrap justify-center">
        {posts.map((post) => (
          <PostCard key={post?.id} {...post} />
        ))}
      </div>
      {pagination ? (
        <div className="w-96 my-8 mx-auto flex items-center justify-between bg-light-blue dark:bg-dark-gray rounded-full py-1.5 px-10 shadow-blue dark:shadow-none">
          <button
            type="button"
            aria-label="Previous button"
            className="flex items-center text-xsm md:text-sm font-medium text-secondary-50 dark:text-neutral-400 hover:text-primary-400 dark:hover:text-primary-300 focus:outline-none transition-all duration-150 ease-in-out"
            disabled={!(page > 1)}
            onClick={(e) => {
              e.preventDefault();
              setPage((_page) => _page - 1);
            }}
          >
            Anterior
          </button>
          <span className="text-sm">
            Página <span className="font-medium">{page}</span> de{' '}
            <span className="font-medium">
              {Math.ceil(posts.length / PER_PAGE)}
            </span>
          </span>
          <button
            type="button"
            aria-label="Next button"
            className="flex items-center text-xsm md:text-sm font-medium text-secondary-50 dark:text-neutral-400 hover:text-primary-400 dark:hover:text-primary-300 focus:outline-none transition-all duration-150 ease-in-out"
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
