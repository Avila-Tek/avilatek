import React from 'react';

interface TestimonyProps {
  name: string;
  job?: string;
  quote: string;
  image?: string;
}

function Testimony({ name, job, quote, image }: TestimonyProps) {
  return (
    <div className="rounded-md overflow-hidden">
      <div>as</div>
    </div>
  );
}

export default function Testimonies() {
  return (
    <section>
      <Testimony
        name="John Doe"
        job="BAT CEO"
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus leo lacinia elementum quam vulputate vitae."
      />
    </section>
  );
}
