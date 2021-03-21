import * as React from 'react';
import Banner from '../components/Banner';
import Technologies from '../components/Tecnologies';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <title>Home Page</title>
      <Banner />
      <Technologies />
    </main>
  );
}
