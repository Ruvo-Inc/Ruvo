import React from 'react';
import './style.css'
import Heading from '../../components/UI/Heading/Heading';
import Hero from '../../components/UI/Hero/Hero';
import BannerImage from '../../assets/images/Sustainability/banner.png'
const PressMedia = () => {
  return (
  <Hero img={BannerImage}>
  
    <Heading headingStyle='h1' className='text-center text-white'>   Press & Media</Heading>

</Hero>
  );
}

export default PressMedia;
