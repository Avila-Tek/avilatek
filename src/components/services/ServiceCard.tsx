import React from 'react';

interface ServiceCardProps {
  illustration: any;
  title: string;
  description: string;
}

export default function ServiceCard({
  illustration,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="flip-card first-flip-card w-64 h-80">
      {/* Card inner */}
      <div className="flip-card-inner relative w-full h-full text-center">
        {/* Front card */}
        <div className="flip-card-front w-full h-full overflow-hidden absolute bg-light-blue rounded-md shadow-blue">
          <div className="w-full h-full flex flex-col justify-center items-center p-10 text-center">
            <img src={illustration} alt={title} className="w-10/12" />
            <h2 className="text-primary-400 font-bold mx-auto text-lg mt-6">
              {title}
            </h2>
          </div>
        </div>
        {/* Back card */}
        <div className="flip-card-back w-full h-full overflow-hidden absolute shadow-blue bg-primary-300 rounded-md">
          <div className="w-full h-full flex flex-col justify-center items-center p-10">
            <h1 className="text-lg font-bold">{title}</h1>
            <hr className="mt-1 mb-3 border-primary-200" />
            <p className="font-medium">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
