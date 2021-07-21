import React from 'react';
import Button from './Button';
import useLanguage from '../../hooks/useLanguage';

export default function Subscription() {
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();
  const [email, setEmail] = React.useState<string>('');

  return (
    <form
      method="POST"
      action="https://appspot.us11.list-manage.com/subscribe/post?u=ca4401d693dd2c51f872ca449&amp;id=6171877bdf"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      className="w-11/12 sm:w-10/12 mx-auto validate"
      noValidate
    >
      <label htmlFor="EMAIL" className="mx-auto text-center p-0">
        <span className="block mb-4 text-base md:text-2base lg:text-lg text-primary-500 dark:text-primary-400 font-semibold">
          {translation(language, 'subscription.title')}
        </span>
        <span className="block w-full sm:w-8/12 lg:w-144 mx-auto mb-8 text-sm md:text-2sm lg:text-base">
          {translation(language, 'subscription.text')}
        </span>
      </label>
      <div className="w-full md:w-136 xl:w-144 max-w-sm mx-auto flex items-center bg-medium-blue dark:bg-medium-gray rounded-full">
        <input
          name="EMAIL"
          id="mce-EMAIL"
          type="email"
          value={email}
          placeholder={translation(language, 'subscription.placeholder')}
          className="px-4 py-2 w-full block bg-transparent text-font-black dark:text-font-white rounded-full text-sm md:text-2sm border-medium-blue dark:border-medium-gray focus:border-0 focus:ring-0 focus:outline-none"
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
          required
          maxLength={127}
          autoComplete="off"
        />

        <div
          style={{
            position: 'absolute',
            left: '-5000px',
          }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_f70e9ab9a887a03a1ba170a6c_886969109d"
            tabIndex={-1}
          />
        </div>
        <Button
          type="submit"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="text-sm md:text-2sm py-2"
        >
          {translation(language, 'subscription.button')}
        </Button>
      </div>
    </form>
  );
}
