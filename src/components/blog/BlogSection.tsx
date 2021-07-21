import React from 'react';
import { navigate } from 'gatsby';
import { Fade } from 'react-awesome-reveal';
import { Waypoint } from 'react-waypoint';
import { Post } from './PostCard';
import PostList from './PostList';
import useLanguage from '../../hooks/useLanguage';
import useActiveLink from '../../hooks/useActiveLink';

interface BlogSectionProps {
  posts?: Array<Post>;
}

export default function BlogSection({ posts }: BlogSectionProps) {
  const [, setActiveLink] = useActiveLink();
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();

  return (
    <section
      id="blog"
      className="pt-0.5 -mt-0.5 pb-48 md:pb-60 w-full relative z-10 overflow-hidden"
    >
      <Fade duration={600} cascade triggerOnce>
        <div className="w-full text-center mb-20 mt-32">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold px-14 sm:px-28">
            <mark className="text-font-black inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              Beyond
            </mark>{' '}
            the <span className="text-primary-400">Blog</span>
          </h1>
          <p className="w-9/12 md:w-6/12 mx-auto mt-6 lg:mt-7 text-sm lg:text-base">
            {translation(language, 'blog.text')}
          </p>
        </div>
        <Waypoint
          onEnter={() => {
            setActiveLink(`/${language === 'es' ? '' : language + '/'}blog`);
          }}
        />
        {posts?.length > 0 ? <PostList posts={posts} /> : null}
        {/* More posts button */}
        <div className="w-full flex justify-center mt-14 lg:mt-16">
          <button
            type="button"
            aria-label="Ir al blog"
            className="text-sm lg:text-base text-primary-400 bg-transparent border-2 border-primary-400 hover:border-primary-300 hover:text-primary-300 py-1.5 px-6 rounded-full focus:outline-none active:border-primary-500 active:text-primary-500"
            onClick={() => {
              navigate(`/${language === 'es' ? '' : language + '/'}blog`);
              setActiveLink(`/${language === 'es' ? '' : language + '/'}blog`);
            }}
          >
            {translation(language, 'blog.seeMore')}
          </button>
        </div>
        <div className="absolute top-0 right-1/3 rounded-third-blob w-7/12 md:w-5/12 h-72 brick bg-medium-blue dark:bg-dark-gray bg-opacity-40 dark:bg-opacity-20" />
      </Fade>
    </section>
  );
}
