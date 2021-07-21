import React from 'react';

interface FilterProps {
  categories?: Array<string>;
  authors?: Array<string>;
  en?: boolean;
  updateFilter: React.Dispatch<
    React.SetStateAction<{
      category: string;
      author: string;
    }>
  >;
  updateSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Filters({
  categories,
  authors,
  en = false,
  updateFilter,
  updateSearch,
}: FilterProps) {
  const [search, setSearch] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [category, setCategory] = React.useState('');

  const refreshFilters = () => {
    setAuthor('');
    setCategory('');
  };

  React.useEffect(() => {
    updateFilter({ author, category });
  }, [author, category]);

  React.useEffect(() => {
    updateSearch(search);
  }, [search]);

  return (
    <div className="mx-auto w-11/12 lg:w-10/12 xl:w-9/12 flex flex-col sm:flex-row justify-between mb-10 mt-8 md:-mt-2 lg:-mt-10">
      {/* Filters */}
      <div className="flex items-center">
        <select
          value={category}
          name="category"
          onChange={(e) => {
            e.preventDefault();
            setCategory(e.target.value);
          }}
          className="bg-medium-blue dark:bg-medium-gray rounded-md w-2/5 sm:w-32 md:w-40 lg:w-48 text-xsm md:text-sm border-0 mr-3 md:mr-5 focus:outline-none focus:ring-0 focus:border-transparent transition-all duration-300 ease-in-out"
        >
          <option value="">{en ? 'Categories' : 'Categorías'}</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          name="author"
          value={author}
          onChange={(e) => {
            e.preventDefault();
            setAuthor(e.target.value);
          }}
          className="bg-medium-blue dark:bg-medium-gray rounded-md w-2/5 sm:w-32 md:w-40 lg:w-48 text-xsm md:text-sm border-0 mr-2 sm:mr-1.5 md:mr-4 lg:mr-5 focus:outline-none focus:ring-0 focus:border-transparent transition-all duration-300 ease-in-out"
        >
          <option value="">{en ? 'Authors' : 'Autores'}</option>
          {authors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
        <button
          type="button"
          aria-label="Botón para reiniciar filtros"
          onClick={refreshFilters}
          className="focus:outline-none focus:border-transparent text-2sm sm:text-xs md:text-xsm font-medium text-secondary-50 hover:text-secondary-100 active:text-secondary-300 dark:text-neutral-300 dark:hover:text-neutral-200 dark:active:text-neutral-100"
        >
          &#8634;{' '}
          <span className="hidden sm:inline-block">
            {en ? 'Reset' : 'Reiniciar'}
          </span>
        </button>
      </div>
      {/* Search bar */}
      <div className="bg-medium-blue dark:bg-medium-gray rounded-md w-2/5 sm:w-40 md:w-44 lg:w-52 mt-3 sm:mt-0 flex justify-between items-center px-4 transition-all duration-300 ease-in-out">
        <input
          type="text"
          name="search"
          value={search}
          placeholder={en ? 'Search' : 'Buscar'}
          onChange={(e) => {
            e.preventDefault();
            setSearch(e.target.value);
          }}
          className="w-11/12 pl-0 border-transparent bg-transparent rounded-md text-xsm md:text-sm focus:border-transparent focus:ring-0 focus:outline-none"
        />
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-5 sm:w-5"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.4001 3.19998C5.5514 3.19998 4.73747 3.53712 4.13736 4.13724C3.53724 4.73735 3.2001 5.55129 3.2001 6.39998C3.2001 7.24867 3.53724 8.0626 4.13736 8.66272C4.73747 9.26284 5.5514 9.59998 6.4001 9.59998C7.24879 9.59998 8.06272 9.26284 8.66284 8.66272C9.26296 8.0626 9.6001 7.24867 9.6001 6.39998C9.6001 5.55129 9.26296 4.73735 8.66284 4.13724C8.06272 3.53712 7.24879 3.19998 6.4001 3.19998ZM1.6001 6.39998C1.6 5.64454 1.77821 4.89975 2.12023 4.22617C2.46226 3.5526 2.95844 2.96926 3.56841 2.5236C4.17839 2.07794 4.88495 1.78255 5.63061 1.66144C6.37628 1.54034 7.14 1.59695 7.85967 1.82666C8.57933 2.05637 9.23462 2.4527 9.77223 2.98342C10.3098 3.51413 10.7146 4.16424 10.9536 4.88088C11.1926 5.59752 11.259 6.36045 11.1476 7.10762C11.0361 7.85479 10.7498 8.5651 10.3121 9.18078L14.1657 13.0344C14.3114 13.1853 14.3921 13.3873 14.3902 13.5971C14.3884 13.8069 14.3043 14.0075 14.156 14.1558C14.0076 14.3042 13.807 14.3883 13.5972 14.3901C13.3875 14.3919 13.1854 14.3113 13.0345 14.1656L9.1817 10.3128C8.46359 10.8234 7.61878 11.1265 6.73984 11.1889C5.8609 11.2512 4.98176 11.0705 4.19874 10.6664C3.41572 10.2622 2.75905 9.6504 2.30068 8.89786C1.84231 8.14532 1.59993 7.28113 1.6001 6.39998Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
