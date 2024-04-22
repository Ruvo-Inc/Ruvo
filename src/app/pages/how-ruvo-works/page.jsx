import React from 'react';
import './style.css'
import Hero from '../../components/UI/Hero/Hero';
import BannerImage from '../../assets/images/Sustainability/banner.png'
import Heading from '../../components/UI/Heading/Heading';
const HowRuvoWorks = () => {
  return (
    <Hero img={BannerImage}>

      <Heading headingStyle='h1' className='text-center text-white'>  How Ruvo Works </Heading>

  </Hero>
  );
}

export default HowRuvoWorks;
