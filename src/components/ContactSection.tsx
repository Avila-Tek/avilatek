import React from 'react';
// import { Fade } from 'react-awesome-reveal';
import { Waypoint } from 'react-waypoint';
import ContactForm from './ContactForm';
import LightningIcon from './icons/LightningIcon';
import MessageIcon from './icons/MessageIcon';
import SettingsIcon from './icons/SettingsIcon';
import CallCenter from './icons/CallCenter';
import useLanguage from '../hooks/useLanguage';
import useActiveLink from '../hooks/useActiveLink';

interface ContactSectionProps {
  sdaas?: boolean;
}

export default function ContactSection({ sdaas = false }: ContactSectionProps) {
  const [, setActiveLink] = useActiveLink();
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();

  return (
    <section
      id="contact"
      className="pt-24 -mt-24 pb-48 w-full px-14 md:px-20 lg:px-28 xl:px-44 relative z-10 overflow-hidden"
    >
      {/* <Fade duration={600} cascade triggerOnce> */}
      {/* Section details */}
      <div className="w-11/12 sm:w-10/12 md:w-9/12 xl:w-6/12 mb-16 mx-auto md:mx-0">
        <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
          {sdaas ? (
            <span className="text-primary-400">
              {translation(language, 'contactUs.span2')}{' '}
            </span>
          ) : (
            <>
              <span className="text-primary-400">
                {translation(language, 'contactUs.span')}{' '}
              </span>
              {translation(language, 'contactUs.first')}{' '}
              <mark className="text-font-black inline-block bg-primary-400 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
                {translation(language, 'contactUs.mark')}
              </mark>
            </>
          )}
        </h1>
        <p className="w-full mt-6 lg:mt-7 text-sm lg:text-base">
          {translation(language, 'contactUs.text')}
        </p>
        <p className="w-full mt-4 lg:mt-5 text-sm lg:text-base">
          {translation(language, 'contactUs.work.text')}
          <a
            href="https://avilatek.sg.larksuite.com/share/base/form/shrusngwY7i49v2HkUrJR5r523d"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            <mark className="text-font-black inline-block bg-primary-400 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              {translation(language, 'contactUs.work.form')}
            </mark>
          </a>
        </p>
      </div>

      <Waypoint
        onEnter={() => {
          setActiveLink(`/${language === 'es' ? '' : `${language}/`}#contact`);
        }}
      />

      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Contact form */}

        <ContactForm sdaas={sdaas} />

        {/* Contact us illustration */}
        <div className="w-10/12 sm:w-7/12 lg:w-5/12 pt-8 lg:pt-0 mt-12 lg:mt-0 mx-auto lg:mx-0 h-full">
          <CallCenter />
          {/* Extra info */}
          <div className="mt-10">
            {/* Fast response */}
            <div className="flex items-center">
              <LightningIcon className="h-6 w-6 mr-6 text-primary-400" />
              <div>
                <h2 className="font-bold text-primary-400 text-sm lg:text-base">
                  {translation(language, 'contactUs.quickResponse')}
                </h2>
                <p className="mt-1 text-xsm lg:text-sm">
                  {translation(language, 'contactUs.quickResponseText')}
                </p>
              </div>
            </div>
            {/* Consulting */}
            <div className="flex items-center my-4">
              <MessageIcon className="h-12 w-12 mr-6 text-primary-400" />
              <div>
                <h2 className="font-bold text-primary-400 text-sm lg:text-base">
                  {translation(language, 'contactUs.consulting')}
                </h2>
                <p className="mt-1 text-xsm lg:text-sm">
                  {translation(language, 'contactUs.consultingText')}
                </p>
              </div>
            </div>
            {/* Personalized */}
            <div className="flex items-center">
              <SettingsIcon className="h-12 w-12 mr-7 text-primary-400" />
              <div>
                <h2 className="font-bold text-primary-400 text-sm lg:text-base">
                  {translation(language, 'contactUs.tailorMade')}
                </h2>
                <p className="mt-1 text-xsm lg:text-sm">
                  {translation(language, 'contactUs.tailorMadeText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </Fade> */}
      <div className="absolute top-8 left-1/3 rounded-second-blob w-96 md:w-6/12 h-72 md:h-96 brick bg-medium-blue dark:bg-dark-gray opacity-50 dark:opacity-25" />
    </section>
  );
}
