import React, { Children } from 'react';
import './style.css';
import Element from '../Element/Element';
import Wrapper from '../Wrapper/Wrapper';
import Image from 'next/image';
const Hero = ({children,img}) => {
  return (
   <Element tag="section" className='relative w-full overflow-hidden'>
    <Wrapper animation='fade-up' delay='500' className='absolute z-[1] top-1/2 left-0 translate-y-[-50%] w-full'>
    {children}
    </Wrapper>
    <Image src={img.src} alt="hero-image" className='min-h-[100vh] max-sm:min-h-[100vw] object-cover'  data-aos="zoom-out" data-aos-duration="800" width={img.width} height={img.height}/>
   </Element>
  );
}

export default Hero;
