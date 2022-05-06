import React from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Sales from '../components/Sales';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
        <Announcement />
        <Navbar />
        <Slider />
        <Sales color="grey" title="Categories" text="Almost before we knew it, we had left the ground." />
        <Categories />
        <Sales color="teal" title="Current Sales" text="Almost before we knew it, we had left the ground." />
        <Products />
        <Newsletter />
        <Footer />
    </>
  );
}

export default Home