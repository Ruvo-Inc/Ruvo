import React from 'react';
import './style.css'
import Heading from '../../components/UI/Heading/Heading';
import Hero from '../../components/UI/Hero/Hero';
import BannerImage from '../../assets/images/Sustainability/banner.png'
const Blog = () => {
  return (
    <div>
   <Hero img={BannerImage}>

        <Heading headingStyle='h1' className='text-center text-white'> Blog</Heading>

    </Hero>
    </div>
  );
}

export default Blog;
