import React from 'react';
import DefaultBanner from '../components/common/DefaultBanner';
import SEO from '../components/SEO';
import PairProgramming from '../components/icons/PairProgramming';
import Definition from '../components/sdaas/Definition';
import Testimonies from '../components/sdaas/Testimonies';
import Benefits from '../components/sdaas/Benefits';
import ByTheNumbers from '../components/sdaas/ByTheNumbers';
import ContactSection from '../components/ContactSection';
import Clients from '../components/Clients';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function SDaaSPage() {
  const banner = {
    title: (
      <>
        <mark className="inline-block bg-primary-200 bg-opacity-50 pb-3 leading-0 text-font-dark dark:text-font-white">
          SDaaS:
        </mark>{' '}
        Tu departamento de desarrollo
      </>
    ),
    description:
      'Si necesitas de un equipo de profesionales en desarrollo, llegaste al lugar indicado',
    illustration: <PairProgramming />,
  };

  return (
    <>
      <SEO title="SDaaS" />
      <DefaultBanner {...banner} />
      <Clients />
      <Definition />
      <Benefits />
      <ByTheNumbers />
      <ContactSection sdaas />
      {/* <Testimonies /> */}
    </>
  );
}
