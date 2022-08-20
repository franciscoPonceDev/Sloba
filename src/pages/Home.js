import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Auction from '../components/Auction';

function Home() {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <Hero />
      <Auction />
      <Auction />
      <Auction />
      <Auction />

    </div>
  );
}

export default Home;
