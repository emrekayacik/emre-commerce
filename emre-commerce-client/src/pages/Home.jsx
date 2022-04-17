import React from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';

const Home = () => {
  return (
    <>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
    </>
  );
}

export default Home