'use client'
import './style.css';
import Banner from '@/app/assets/images/Home/banner.png'
import Element from "@/app/components/UI/Element/Element";
import Wrapper from "@/app/components/UI/Wrapper/Wrapper";
import Heading from "@/app/components/UI/Heading/Heading";
import NavButton from "@/app/components/UI/NavButton/NavButton";
import HowRuvoWorks from '@/app/components/Sections/Home/HowRuvoWorks';
import Image from 'next/image';
import Logo from '@/app/components/UI/SiteLogo/Logo';

export default function HomePage() {
  return (
    <>
    <div data-aos="zoom-out" data-aos-duration="800" >
<Element tag="section" className='relative w-full overflow-hidden home-hero py-[23.12500vw] pb-[19.0104167vw] max-sm:py-[50vw] '>
 
  <Wrapper className=' min-5xl:max-w-[1200px] max-w-[32.5vw] max-sm:max-w-[86vw] mx-auto max-smlg:max-w-[40.5vw]'>
  <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="400" className='min-sm:mix-blend-difference'>
    <Logo mode='light'/>
    </div>
  <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
  <Heading headingStyle='h6Class' className='!text-white mt-6 text-center  max-smlg:whitespace-normal whitespace-nowrap home-banner-heading max-xl:text-[30px]'>
  RIDE THE CHANGE
  </Heading>
  </div>
  </Wrapper>
   

</Element>
</div>
      <HowRuvoWorks/>
      <Wrapper className='py-[60px] bg-primary max-smlg:pt-[50px] max-smlg:pb-[50px]  max-sm:px-[20px]'>
    <Heading headingStyle='h3Class' className='text-center mb-[16px] text-white ' >
    Ready to Ride the Change?
    </Heading>

    <Wrapper className="max-w-[428px] mx-auto flex gap-x-[25px] mt-[35px]">
      <NavButton link='/' color='green' type='solid' >
      Drive With Us
      </NavButton>
      <NavButton link='/' color='green' type='solid' >
       Ride with Us
      </NavButton>
    </Wrapper>
  </Wrapper>
</>
  );
}
