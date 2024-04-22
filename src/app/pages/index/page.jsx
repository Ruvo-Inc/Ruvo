'use client'
import Banner from '@/app/assets/images/Home/banner.png'
import Element from "@/app/components/UI/Element/Element";
import Wrapper from "@/app/components/UI/Wrapper/Wrapper";
import Heading from "@/app/components/UI/Heading/Heading";
import NavButton from "@/app/components/UI/NavButton/NavButton";
import ImageWithText from '@/app/components/UI/ImageWithText/ImageWithText';
import ChildImage from '@/app/assets/images/Home/Embrace the future with every ride.png'
import WhyRuvo from '@/app/components/Sections/Home/WhyRuvo';
import HowRuvoWorks from '@/app/components/Sections/Home/HowRuvoWorks';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
<Element tag="section" className='relative w-full overflow-hidden a'>
<Image src={Banner.src}  alt="hero-image" width={Banner.width} height={Banner.height} className='object-cover max-smlg:min-h-[90vh]' data-aos="zoom-out" data-aos-duration="800" />
<Wrapper className='absolute top-[223px] left-1/2 max-md:px-5  translate-x-[-50%] flex flex-col gap-[30px] max-sm:gap-[20px] z-[2] max-4xl:w-full max-xl:top-[25%]'>
  <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
  <Heading headingStyle='h1Class' className='!text-white  text-center max-smlg:whitespace-normal whitespace-nowrap home-banner-heading'>
  Drive Change, Ride Green
  </Heading>
  </div> 

<div data-aos="fade-up" data-aos-duration="500" data-aos-delay="800"> 
<Heading headingStyle='h3Class' className='font-mulish max-w-[903px] mx-auto text-white text-center max-md:!text-[18px] max-sm:text-[14px] max-xs:text-[12px] '>
Experience the future of urban mobility with Ruvo’s all-electric, community-driven ride-sharing service.
  </Heading>

  </div>
  <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="900">
  <Wrapper className="max-w-[428px] mx-auto flex gap-x-[25px] max-sm:gap-x-[15px]">
    <NavButton link='/' color='salmon' type='solid' >
      Apply to Drive
    </NavButton>
    <NavButton link='/' color='salmon' type='outlined' >
      Sign up to Ride
    </NavButton>
  </Wrapper></div>
  </Wrapper>
</Element>

<Wrapper className='overflow-hidden relative py-[100px] px-[124px] max-2xl:py-[50px] max-2xl:px-[40px] max-sm:px-5 max-sm:py-[50px]'>
    <ImageWithText image={ChildImage} imagePostion='right' heading='Embrace the future with every ride' imageClassName=' mix-blend-multiply' anchor="section-2">
    <Heading headingStyle='span' className='max-w-[631px] block sm:mt-[38px]'>
      In an urban landscape thirsty for change, Ruvo emerges as a
beacon of sustainable mobility. Our mission? To transform urban
transportation through an innovative ride-hailing service powered
entirely by electric vehicles. We&apos;re not just another option; we&apos;re
alternative paving the way to a greener, cleaner future.The movement begins with our Partners and Guests, one ride at a time.
<br/><br/>
At Ruvo, drivers and riders are more than just terms—we call them Partners and Guests. This reflects our deep commitment to respect and collaboration, propelling our mission forward. Together, we are integral to a movement that cherishes our community and protects our planet.
      </Heading>
    </ImageWithText>
  </Wrapper>

  <WhyRuvo/>

  <div id="ruvo">
      <Wrapper className='overflow-hidden bg-white py-[44px] max-md:py-[20px]' anchor={'#ruvo'} animation={'fade-up'} delay={100}>
        <Heading className='max-md:px-5 text-center max-md:!text-[22px]' headingStyle='h2Class'>
        Ruvo — Where Every Journey Matters, Every Choice Counts
        </Heading>
      </Wrapper>
      </div>
      <HowRuvoWorks/>
      <Wrapper className='py-[60px] bg-c-salmon-100 max-smlg:pt-[50px] max-smlg:pb-[50px]  max-sm:px-[20px]'>
    <Heading headingStyle='h2Class' className='text-center mb-[16px]' >
    Ready to Ride the Change?
    </Heading>

    <Wrapper className="max-w-[428px] mx-auto flex gap-x-[25px] mt-[35px]">
      <NavButton link='/' color='green' type='solid' >
      Be a Partner
      </NavButton>
      <NavButton link='/' color='green' type='outlined' >
       Be our Guest
      </NavButton>
    </Wrapper>
  </Wrapper>
</>
  );
}
