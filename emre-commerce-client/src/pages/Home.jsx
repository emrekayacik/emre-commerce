import React from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Sales from '../components/Sales';

const Home = () => {
  return (
    <>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Sales />
        <Products />
    </>
  );
}

export default Home