import React from 'react';
import './style.css'
import Heading from '../../components/UI/Heading/Heading';
import Hero from '../../components/UI/Hero/Hero';
import Wrapper from '../../components/UI/Wrapper/Wrapper';
import BannerImage from '../../assets/images/Sustainability/banner.png'
import Text from '@/app/components/UI/Text/Text';
import Container from '@/app/components/UI/Container/Container';
import { whyRide } from '@/app/data/Menu';
import NavButton from '@/app/components/UI/NavButton/NavButton';
const WhyRuvo = () => {
  return (
    <>
    
    <Hero img={BannerImage}>
        <Heading headingStyle='h1' className='text-center text-white'> Why Ride with Ruvo?</Heading>
        <Text className="text-white max-w-3xl mx-auto text-center">
        Welcome to the future of urban travel. At Ruvo, we're not just taking you places—we're pioneering a movement towards a smarter, cleaner, and more sustainable way to move around your city. Join us on a journey where every ride promises more than just a destination; it offers unparalleled freedom and efficiency, reshaping your travel experience with instant, personalized choices.
        </Text>
    </Hero>
    {Object.entries(whyRide).map(([key,item], index) => (
    <Wrapper className={`flex    py-[50px] min-smlg:py-[85px]   ${index % 2 === 1 ? ' bg-white' : ' bg-[#FBF7F6]' }`} key={key}>
      <Container className=' flex gap-x-[30px] justify-between max-smlg:flex-col gap-y-5'>
        <Wrapper className='flex-1'>
          <Wrapper className="sticky top-[150px]">
            <Heading headingStyle="h2Class" className='!text-[32px]'>{item.heading}</Heading>
          </Wrapper>
        </Wrapper>
        <Wrapper className="w-full max-w-3xl min-5xl:max-w-[70%] max-3xlsm:max-w-[60%] max-smlg:max-w-full">
          <Text className="text-[22px]">
          {item.text}
          </Text>
        </Wrapper>
        </Container>
      </Wrapper>
         ))}
            <Wrapper className="bg-primary py-[30px] max-sm:px-[20px]">
        <Heading
          headingStyle="h3Class"
          className="text-center text-white "
        >
        Ready to ride the change?
        </Heading>
         <Text className='text-center mt-2  mb-4 text-white'>
         Sign up now and take your first step towards a smarter, cleaner commute.
         </Text>
        <Wrapper className="max-w-[220px] mx-auto flex gap-x-[25px]">
          <NavButton link="/" color="green" type="solid">
           Sign up to Ride
          </NavButton>
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default WhyRuvo;
