import React from 'react';

import Hero from '../components/Hero';
import Auction from '../components/Auction';

function Home() {
  return (
    <div className="bg-gray-800">
      <Hero />
      <Auction />
      <Auction />
      <Auction />
      <Auction />

    </div>
  );
}

export default Home;
