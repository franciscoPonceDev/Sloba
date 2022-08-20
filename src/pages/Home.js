import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Auction from '../components/Auction';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Auction />
    </div>
  );
}

export default Home;
