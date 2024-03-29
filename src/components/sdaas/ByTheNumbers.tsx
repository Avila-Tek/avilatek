import React from 'react';
// import { Fade } from 'react-awesome-reveal';
import { Doughnut, Chart } from 'react-chartjs-2';
import useLanguage from '../../hooks/useLanguage';
import useTheme from '../../hooks/useTheme';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function ByTheNumbers() {
  const [translation, getCurrentLanguage] = useLanguage();
  const language = getCurrentLanguage();
  const [theme] = useTheme();

  Chart.defaults.plugins.tooltip.enabled = false;
  Chart.defaults.datasets.doughnut.borderWidth = 0;
  Chart.defaults.datasets.doughnut.backgroundColor = [
    '#13cb6e',
    `${
      theme === 'dark' ||
      (theme === 'auto' &&
        window?.matchMedia('(prefers-color-scheme: dark)').matches)
        ? '#464646'
        : '#E5EEFD'
    }`,
  ];

  const statistics = [
    {
      data: {
        datasets: [
          {
            label: 'Outsourcing percentage',
            data: [65, 35],
          },
        ],
      },
      plus: '+',
      number: '65',
      symbol: '%',
      feature: translation(
        language,
        'sdaas.byTheNumbers.outsourcingPercentage'
      ),
      source: 'State of Software Development',
    },
    {
      data: {
        datasets: [
          {
            label: 'Savings',
            data: [67.2, 32.8],
          },
        ],
      },
      number: '67',
      symbol: '%',
      feature: translation(language, 'sdaas.byTheNumbers.savings'),
      source: 'Digital Skynet',
    },
    {
      data: {
        datasets: [
          {
            label: 'Skills Shortage',
            data: [87, 13],
          },
        ],
      },
      number: '87',
      symbol: '%',
      feature: translation(language, 'sdaas.byTheNumbers.shortage'),
      source: 'McKinsey',
    },
    {
      data: {
        datasets: [
          {
            label: 'Global market value',
            data: [70, 30],
          },
        ],
      },
      number: '342.9',
      symbol: 'B',
      feature: translation(language, 'sdaas.byTheNumbers.globalMarket'),
      source: 'Business Wire',
    },
  ];

  return (
    <section className="pb-36 px-14 md:px-20 lg:px-28 xl:px-44 relative z-10 overflow-hidden">
      {/* <Fade duration={600} cascade triggerOnce> */}
        {/* Section title and text */}
        <div className="w-full md:w-7/12">
          <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
            <span className="text-primary-400">SDaaS</span> by the{' '}
            <mark className="text-font-black inline-block bg-primary-400 bg-opacity-50 pb-3 leading-0 dark:text-font-white">
              numbers
            </mark>
          </h1>
          <p className="my-6 lg:my-7 text-sm lg:text-base text-justify">
            {translation(language, 'sdaas.byTheNumbers.text')}
          </p>
        </div>
        {/* Numbers */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 xl:gap-10 mt-20">
          {statistics.map(({ data, feature, number, symbol, source, plus }) => (
            <div className="w-44 sm:w-48 xl:w-52 mx-auto">
              <div className="w-full relative">
                <Doughnut
                  data={data}
                  options={{
                    responsive: true,
                    cutout: '90%',
                  }}
                />
                {/* Number at the center */}
                <div className="chart-inner absolute top-0 left-0 h-full w-full p-1 flex items-center justify-center rounded-full z-minus">
                  <h2 className="text-4xl xl:text-5xl font-semibold">
                    {plus ? (
                      <span className="text-2xl xl:text-3xl">{plus}</span>
                    ) : null}
                    {number}
                    <span className="text-xl xl:text-2xl">{symbol}</span>
                  </h2>
                </div>
              </div>
              {/* Feature name and source */}
              <div className="w-full mt-5 text-center">
                <h3 className="font-medium text-sm md:text-2sm xl:text-base leading-snug md:leading-snug xl:leading-snug">
                  {feature}
                </h3>
                <p className="text-2xs opacity-25 dark:opacity-50  mt-2">
                  {language === 'es' ? 'Fuente' : 'Source'}: {source}
                </p>
              </div>
            </div>
          ))}
        </div>
      {/* </Fade> */}
      <div className="absolute top-16 right-1/3 rounded-third-blob w-7/12 md:w-5/12 h-72 brick bg-medium-blue dark:bg-dark-gray bg-opacity-30 dark:bg-opacity-10" />
    </section>
  );
}
