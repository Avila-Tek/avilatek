import React from 'react';
import { Fade } from 'react-awesome-reveal';
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
            data: [64, 36],
          },
        ],
      },
      number: '64',
      symbol: '%',
      feature: translation(
        language,
        'sdaas.byTheNumbers.outsourcingPercentage'
      ),
    },
    {
      data: {
        datasets: [
          {
            label: 'Satisfaction',
            data: [65, 35],
          },
        ],
      },
      number: '65',
      symbol: '%',
      feature: translation(language, 'sdaas.byTheNumbers.satisfaction'),
    },
    {
      data: {
        datasets: [
          {
            label: 'Capacity',
            data: [23, 77],
          },
        ],
      },
      number: '23',
      symbol: '%',
      feature: translation(language, 'sdaas.byTheNumbers.capacity'),
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
    },
  ];

  const roundCornersPlugin = {
    // eslint-disable-next-line object-shorthand
    afterUpdate: function (chart) {
      if (chart.config?.options?.elements?.arc?.roundedCornersFor) {
        const arc =
          chart.getDatasetMeta(0).data[
            chart.config.options.elements.arc.roundedCornersFor
          ];
        arc.round = {
          x: (chart.chartArea.left + chart.chartArea.right) / 2,
          y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
          radius: (chart.outerRadius + chart.innerRadius) / 2,
          thickness: (chart.outerRadius - chart.innerRadius) / 2 - 1,
          backgroundColor: arc._model.backgroundColor,
        };
      }
    },

    // eslint-disable-next-line object-shorthand
    afterDraw: function (chart) {
      if (chart.config?.options?.elements?.arc?.roundedCornersFor) {
        const { ctx } = chart.chart;
        const arc =
          chart.getDatasetMeta(0).data[
            chart.config.options.elements.arc.roundedCornersFor
          ];
        const startAngle = Math.PI / 2 - arc._view.startAngle;
        const endAngle = Math.PI / 2 - arc._view.endAngle;

        ctx.save();
        ctx.translate(arc.round.x, arc.round.y);
        ctx.fillStyle = arc.round.backgroundColor;
        ctx.beginPath();
        ctx.arc(
          arc.round.radius * Math.sin(startAngle),
          arc.round.radius * Math.cos(startAngle),
          arc.round.thickness,
          0,
          2 * Math.PI
        );
        ctx.arc(
          arc.round.radius * Math.sin(endAngle),
          arc.round.radius * Math.cos(endAngle),
          arc.round.thickness,
          0,
          2 * Math.PI
        );
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    },
  };

  return (
    <section className="pb-36 px-14 md:px-20 lg:px-28 xl:px-44 relative z-10 overflow-hidden">
      <Fade duration={600} cascade triggerOnce>
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
          {statistics.map(({ data, feature, number, symbol }) => (
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
                  <h3 className="text-4xl xl:text-5xl font-semibold">
                    {number}
                    <span className="text-xl xl:text-2xl">{symbol}</span>
                  </h3>
                </div>
              </div>
              {/* Feature name */}
              <div className="w-full mt-5 text-center">
                <h4 className="font-medium text-2sm md:text-base xl:text-2base leading-snug md:leading-snug xl:leading-snug">
                  {feature}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </Fade>
      <div className="absolute top-16 right-1/3 rounded-third-blob w-7/12 md:w-5/12 h-72 brick bg-medium-blue dark:bg-dark-gray bg-opacity-30 dark:bg-opacity-10" />
    </section>
  );
}
