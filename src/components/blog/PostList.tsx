import React from 'react';
import { Fade } from 'react-awesome-reveal';
import PostCard, { Post } from './PostCard';
import Filters from './Filters';
import Empty from '../icons/Empty';

interface PostListProps {
  posts: Array<Post>;
  filters?: boolean;
  pagination?: boolean;
}

// A number that can fit three columns and two columns nicely, example: 6 or 12
const PER_PAGE = 6;

export default function PostList({
  posts: unfilteredPosts = [],
  filters = false,
  pagination = false,
}: PostListProps) {
  const [posts, setPosts] = React.useState(unfilteredPosts || []);
  const [items, setItems] = React.useState<Array<Post>>([]);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState<{
    category: string;
    author: string;
  }>({ author: '', category: '' });
  const updateFilter = React.useCallback(setFilter, [setFilter]);
  const updateSearch = React.useCallback(setSearch, [setSearch]);

  const categories = [];
  unfilteredPosts?.map(({ category }) => {
    if (!categories.includes(category)) {
      categories.push(category);
    }
  });

  const authors = [];
  unfilteredPosts?.map(({ author }) => {
    if (!authors.includes(author)) {
      authors.push(author);
    }
  });

  React.useEffect(
    function syncItems() {
      if (posts && posts.length > 0) {
        const skip = Math.max(0, (page - 1) * PER_PAGE);
        setItems(posts?.slice(skip, page * PER_PAGE));
      } else {
        setItems([]);
      }
    },
    [posts, page]
  );

  React.useEffect(() => {
    const filteredPosts = unfilteredPosts.filter((post) => {
      return (
        (search === ''
          ? post
          : post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.description.toLowerCase().includes(search.toLowerCase()) ||
            post.subtitle.toLowerCase().includes(search.toLowerCase())) &&
        (filter.category === ''
          ? post
          : post.category.toLowerCase() === filter.category.toLowerCase()) &&
        (filter.author === ''
          ? post
          : post.author.toLowerCase() === filter.author.toLowerCase())
      );
    });
    setPosts(filteredPosts);
    setPage(1);
  }, [filter, search]);

  return (
    <Fade triggerOnce>
      <div className="w-full flex flex-col justify-center px-8">
        {filters ? (
          <Filters
            authors={authors}
            categories={categories}
            updateFilter={updateFilter}
            updateSearch={updateSearch}
          />
        ) : null}
        {items.length === 0 ? (
          <div className="flex flex-col items-center text-center mb-48 md:mb-52 mx-auto w-8/12 sm:w-6/12 lg:w-4/12">
            <Empty className="w-11/12 md:w-10/12" />
            <p className="text-sm lg:text-base -mt-20 sm:-mt-20 md:-mt-16">
              No se pudieron encontrar resultados
            </p>
          </div>
        ) : (
          <div
            className={`${
              pagination
                ? 'mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1'
                : 'w-full flex flex-wrap justify-center'
            }`}
          >
            {items.map((post) => (
              <PostCard key={post?.slug} {...post} />
            ))}
          </div>
        )}
        {pagination && items.length > 0 ? (
          <div className="w-10/12 sm:w-112 mt-14 mb-28 mx-auto flex items-center justify-between bg-light-blue dark:bg-dark-gray rounded-full py-2 px-10 shadow-blue dark:shadow-none">
            <button
              type="button"
              aria-label="Previous button"
              className="flex items-center text-xs sm:text-xsm md:text-sm font-medium text-secondary-50 dark:text-neutral-400 hover:text-primary-400 dark:hover:text-primary-300 focus:outline-none transition-all duration-150 ease-in-out disabled:cursor-not-allowed"
              disabled={!(page > 1)}
              onClick={(e) => {
                e.preventDefault();
                setPage((_page) => _page - 1);
              }}
            >
              <svg
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:mr-1.5 sm:h-3 w-3"
              >
                <path d="M5.13611 0.263508C5.30483 0.432283 5.39962 0.66116 5.39962 0.899808C5.39962 1.13846 5.30483 1.36733 5.13611 1.53611L2.17241 4.49981L5.13611 7.46351C5.30005 7.63325 5.39076 7.86059 5.38871 8.09657C5.38666 8.33255 5.29201 8.55828 5.12514 8.72514C4.95828 8.89201 4.73255 8.98666 4.49657 8.98871C4.26059 8.99076 4.03325 8.90005 3.86351 8.73611L0.263508 5.13611C0.094784 4.96733 0 4.73846 0 4.49981C0 4.26116 0.094784 4.03228 0.263508 3.86351L3.86351 0.263508C4.03228 0.094784 4.26116 0 4.49981 0C4.73846 0 4.96733 0.094784 5.13611 0.263508Z" />
              </svg>
              <span className="hidden sm:inline-block">Anterior</span>
            </button>
            <span className="text-xsm sm:text-sm">
              Página <span className="font-medium">{page}</span> de{' '}
              <span className="font-medium">
                {Math.ceil(posts.length / PER_PAGE)}
              </span>
            </span>
            <button
              type="button"
              aria-label="Next button"
              className="flex items-center text-xs sm:text-xsm md:text-sm font-medium text-secondary-50 dark:text-neutral-400 hover:text-primary-400 dark:hover:text-primary-300 focus:outline-none transition-all duration-150 ease-in-out disabled:cursor-not-allowed"
              disabled={
                !(items?.length > PER_PAGE || page * PER_PAGE < posts?.length)
              }
              onClick={(e) => {
                e.preventDefault();
                setPage((_page) => _page + 1);
              }}
            >
              <span className="hidden sm:inline-block">Siguiente</span>
              <svg
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:ml-1.5 h-3 w-3"
              >
                <path d="M0.662922 8.72524C0.494198 8.55647 0.399414 8.32759 0.399414 8.08894C0.399414 7.85029 0.494198 7.62142 0.662922 7.45264L3.62662 4.48894L0.662922 1.52524C0.49898 1.3555 0.408264 1.12816 0.410315 0.89218C0.412366 0.656203 0.507018 0.430472 0.673885 0.263604C0.840752 0.0967369 1.06648 0.0020846 1.30246 3.40222e-05C1.53844 -0.00201656 1.76578 0.0886988 1.93552 0.252641L5.53552 3.85264C5.70425 4.02142 5.79903 4.25029 5.79903 4.48894C5.79903 4.72759 5.70425 4.95647 5.53552 5.12524L1.93552 8.72524C1.76675 8.89396 1.53787 8.98875 1.29922 8.98875C1.06057 8.98875 0.831697 8.89396 0.662922 8.72524Z" />
              </svg>
            </button>
          </div>
        ) : null}
      </div>
    </Fade>
  );
}
