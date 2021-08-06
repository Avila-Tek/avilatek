import React from 'react';
import DefaultBanner from '../components/common/DefaultBanner';
import SEO from '../components/SEO';
import PairProgramming from '../components/icons/PairProgramming';
import Definition from '../components/sdaas/Definition';
import Testimonies from '../components/sdaas/Testimonies';
import Benefits from '../components/sdaas/Benefits';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function SDaaSPage() {
  const banner = {
    title: (
      <>
        Frase relacionada al{' '}
        <mark className="inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 text-font-dark dark:text-font-white">
          SDaaS
        </mark>{' '}
        que se muestra aquí
      </>
    ),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna in sit id hac. ',
    illustration: <PairProgramming />,
  };

  return (
    <>
      <SEO title="SDaaS" />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <DefaultBanner {...banner} />
      <Definition />
      <Benefits />
      <Testimonies />
    </>
  );
}
