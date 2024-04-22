import React from 'react';
import './style.css'
import Heading from '../../components/UI/Heading/Heading';
import Hero from '../../components/UI/Hero/Hero';
import Wrapper from '../../components/UI/Wrapper/Wrapper';
import BannerImage from '../../assets/images/Sustainability/banner.png'
const WhyRuvo = () => {
  return (
    <Hero img={BannerImage}>
        <Heading headingStyle='h1' className='text-center text-white'>  Why Ruvo</Heading>
    </Hero>
  );
}

export default WhyRuvo;
