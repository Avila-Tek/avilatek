import React from 'react';
import Waves from '../components/icons/Waves';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import RotatingTriangle from '../components/icons/RotatingTriangle';
import Line from '../components/icons/Line';
import SEO from '../components/SEO';
import { Post } from '../components/blog/PostCard';

dayjs.locale('es');

interface SinglePostPageProps {
  post?: Post;
}

export default function SinglePostPage({ post }: SinglePostPageProps) {
  return (
    <>
      <SEO title="Blog" />
      <main>
        {/* Banner */}
        <section className="relative w-full bg-light-blue dark:bg-dark-gray flex flex-col items-center pt-32 md:pt-44 transition duration-300 ease-in-out">
          <div className="flex flex-col items-center px-10 text-center z-10">
            <h3 className="text-sm md:text-base text-secondary-50 dark:text-primary-100 font-semibold mb-2">
              Desarrollo Web
            </h3>
            <h1 className="w-10/12 font-bold text-lg md:text-xl">
              Why we all should use Gatsby and why it works so well
            </h1>
          </div>
          <div className="w-full mt-24 md:mt-32">
            <Waves className="w-full h-full -mb-2" />
          </div>
          <RotatingTriangle className="top-20 right-1/2" />
          <RotatingTriangle className="right-2/12 top-5/12" />
          <RotatingTriangle className="bottom-5/12 left-2/12" />
          <Line className="top-12 right-1/4 w-12" />
          <Line className="top-1/4 left-2/12 w-14" />
          <Line className="bottom-4/12 right-6/12 w-12" />
        </section>
        {/* Post */}
        <section className="w-9/12 md:w-7/12 mx-auto mt-8 mb-40">
          {/* Post header */}
          <div>
            <h2 className="font-semibold text-base md:text-lg text-secondary-100 dark:text-neutral-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              arcu, nunc consectetur tincidunt. Amet, et at nunc dolor
            </h2>
            <div className="flex items-center mt-3">
              <div className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 bg-primary-400 rounded-full" />
              <p className="text-xsm sm:text-sm ml-3 text-neutral-400 font-medium">
                Por{' '}
                <span className="text-primary-400 dark:text-primary-300 mr-3">
                  John Doe
                </span>
                |
                <span className="ml-3">
                  {dayjs(new Date().toISOString().split('T')[0]).format(
                    'DD MMM, YYYY'
                  )}
                </span>
              </p>
            </div>
          </div>
          <hr className="my-12 border border-dark-blue dark:border-dark-gray" />
          {/* Post body */}
          <div className="grid gap-5 text-sm lg:text-base">
            <div className="w-full h-half lg:h-third bg-secondary-200 mb-4" />
            {/* //! Hard coded just for now */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              arcu, nunc consectetur tincidunt. Amet, et at nunc dolor. Sed a
              amet fusce ut dolor, nulla faucibus. Purus at enim nulla diam id
              bibendum. Donec curabitur sed senectus consectetur tristique odio
              viverra. Erat blandit vitae vitae, vitae dolor in eu amet, nisl.
              Massa ornare feugiat nascetur nec pellentesque egestas enim a.
              Tellus curabitur sed volutpat velit vulputate tincidunt. Volutpat
              ultricies mattis fringilla dignissim. Consequat nisl aliquam sit
              et pulvinar nibh cras. Pulvinar molestie vestibulum eget et odio.
              Eu tristique lectus nec pharetra, diam fames. Eget urna nunc
              condimentum integer nunc enim. Convallis fringilla ipsum in tellus
              tempus, eu elementum.
            </p>
            <p>
              Elementum orci, nulla ipsum urna ut cras tincidunt at in. Tempus
              neque gravida lobortis pretium nec sit lorem. Massa morbi
              pellentesque sapien amet, diam nisl, molestie sollicitudin. Nunc
              enim, aliquam malesuada dapibus neque adipiscing nullam orci. Mi
              cursus velit vitae cursus sit. Tellus sagittis enim, pellentesque
              pulvinar a justo in. Blandit scelerisque cum in eget leo facilisis
              rutrum vel purus. Scelerisque nunc est cras sem quam platea sit.
              Vel, adipiscing hendrerit ipsum vel, nisi ac velit sed
              pellentesque. Mattis dictumst arcu tempus morbi. Sit nulla lectus
              mattis quis tellus urna.
            </p>
            <p>
              Lacinia sit est non, in leo, pellentesque. Pellentesque aliquam
              mi, ultricies mi. Ornare mi eget magna sit ut sed tellus. Turpis
              ultrices convallis amet diam eget sagittis. Elit in non vulputate
              rutrum eu donec. Tempor lorem nunc, faucibus aenean consectetur at
              malesuada condimentum. Justo fermentum nisi turpis scelerisque
              cursus. Facilisi et netus vestibulum mus in. Tellus maecenas nec
              donec dui mattis. Elementum, placerat aenean cras sit tempor eget
              massa viverra sem. Netus commodo arcu et eget. Dolor feugiat
              vestibulum odio vel gravida dolor rhoncus semper. Sit aliquam
              adipiscing quam viverra pellentesque. Proin curabitur porta
              viverra sit nunc.
            </p>
          </div>
          <hr className="my-12 border border-dark-blue dark:border-dark-gray" />
          {/* Post footer */}
          <div className="flex flex-col md:flex-row">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:h-20 lg:w-20 mr-6 mb-4 bg-primary-400 rounded-full overflow-hidden" />
            <div className="w-11/12 md:w-9/12">
              <h3 className="font-semibold text-primary-400 dark:text-primary-300 text-sm lg:text-base">
                John Doe
              </h3>
              <p className="mt-2 text-xsm lg:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
                nunc augue ut neque amet sed sed laoreet. Vitae egestas sit
                ornare consequat, laoreet sit eget sollicitudin a. Velit
                malesuada dui porta sed facilisis posuere imperdiet.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
