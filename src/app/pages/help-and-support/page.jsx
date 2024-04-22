import React from 'react';
import Heading from '../../components/UI/Heading/Heading';
import './style.css'
import Hero from '../../components/UI/Hero/Hero';
import BannerImage from '../../assets/images/Sustainability/banner.png'
const Help = () => {
  return (
    <div>
      <Hero img={BannerImage}>

        <Heading headingStyle='h1' className='text-center text-white'>  Help and support</Heading>

      </Hero>
    </div>
  );
}

export default Help;
