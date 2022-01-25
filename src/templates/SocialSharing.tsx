import React from 'react';
import FacebookIcon from '../components/icons/FacebookIcon';
import LinkedInIcon from '../components/icons/LinkedIn';
import TwitterIcon from '../components/icons/TwitterIcon';
import LinkIcon from '../components/icons/LinkIcon';
import useNotify from '../hooks/useNotify';

interface SocialSharingProps {
  SITE_URL: string;
  slug: string;
  title: string;
  footer?: boolean;
}
export default function SocialSharing({
  SITE_URL,
  slug,
  title,
  footer = false,
}: SocialSharingProps) {
  const notify = useNotify();

  return (
    <div
      className={`w-full flex items-center lg:justify-end ${
        footer ? 'mt-10' : 'mt-0.5 sm:mt-2 lg:-mt-6'
      }`}
    >
      <a
        href={`https://twitter.com/intent/tweet/?text=${title}&url=${SITE_URL}blog/${slug}%2F&via=avilatekdev`}
        target="_blank"
        className="flex items-center justify-center text-white h-6 w-6 bg-primary-400 hover:bg-primary-300 rounded-full focus:outline-none active:bg-primary-500 cursor-pointer mr-1.5"
        aria-label="Share in Twitter"
        rel="noopener noreferrer"
      >
        <TwitterIcon className="h-3 w-3" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${SITE_URL}blog/${slug}`}
        target="_blank"
        className="flex items-center justify-center text-white h-6 w-6 bg-primary-400 hover:bg-primary-300 rounded-full focus:outline-none active:bg-primary-500 cursor-pointer mr-1.5"
        aria-label="Share in Facebook"
        rel="noopener noreferrer"
      >
        <FacebookIcon className="h-3 w-3" />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${SITE_URL}blog/${slug}&title=${title}&source=${title}`}
        target="_blank"
        className="flex items-center justify-center text-white h-6 w-6 bg-primary-400 hover:bg-primary-300 rounded-full focus:outline-none active:bg-primary-500 cursor-pointer mr-1.5"
        aria-label="Share in LinkedIn"
        rel="noopener noreferrer"
      >
        <LinkedInIcon className="h-3 w-3" />
      </a>
      <button
        type="button"
        className="flex items-center justify-center text-white h-6 w-6 bg-primary-400 hover:bg-primary-300 rounded-full focus:outline-none active:bg-primary-500 cursor-pointer mr-1.5"
        aria-label="Copy link"
        onClick={() => {
          navigator.clipboard.writeText(`${SITE_URL}blog/${slug}`);
          notify('URL copiado en el portapapeles', 'success');
        }}
      >
        <LinkIcon className="h-3 w-3" />
      </button>
    </div>
  );
}
