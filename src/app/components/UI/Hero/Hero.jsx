import React, { Children } from 'react';
import './style.css';
import Element from '../Element/Element';
import Wrapper from '../Wrapper/Wrapper';
import Image from 'next/image';
const Hero = ({children,img, styles}) => {
  return (
   <Element tag="section" className={styles + ' relative w-full overflow-hidden min-h-[80vh]  max-smlg:min-h-[700px]  max-sm:min-h-[120vw] hero-clip' }>
    <Wrapper animation='fade-up' delay='500' className='absolute z-[1] top-1/2 left-0 translate-y-[-30%] w-full animated-y px-5'>
    {children}
    </Wrapper>
    <Image src={img.src} alt="hero-image" className='min-h-[100vh] max-sm:min-h-[167vw] object-cover h-full max-sm:h-[120vw]  fixed top-0 left-0 w-full'  data-aos="zoom-out" data-aos-duration="800" width={img.width} height={img.height}/>
   </Element>
  );
}

export default Hero;
