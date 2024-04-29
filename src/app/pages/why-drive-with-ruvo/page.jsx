import React from 'react';
import './style.css'
import Heading from '../../components/UI/Heading/Heading';
import Hero from '../../components/UI/Hero/Hero';
import Wrapper from '../../components/UI/Wrapper/Wrapper';
import BannerImage from '../../assets/images/Sustainability/banner.png'
import Text from '@/app/components/UI/Text/Text';
import Container from '@/app/components/UI/Container/Container';
import { whyDrive, whyRide } from '@/app/data/Menu';
import NavButton from '@/app/components/UI/NavButton/NavButton';
const WhyDriveRuvo = () => {
  return (
    <>
    
    <Hero img={BannerImage}>
        <Heading headingStyle='h1' className='text-center text-white'>Why Drive with Ruvo?</Heading>
        <Text className="text-white max-w-3xl mx-auto text-center">
        Embark on a journey with Ruvo where every mile and every minute counts. As a Ruvo driver, you’re not just part of a ride-hailing service—you’re at the forefront of reshaping urban mobility. Our innovative, AI-powered platform ensures that your time on the road is efficient, profitable, and environmentally conscious. Join us to drive smarter, not harder.
        </Text>
    </Hero>
    {Object.entries(whyDrive).map(([key,item], index) => (
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
       Ready to maximize your driving efficiency?
        </Heading>
         <Text className='text-center mt-2  mb-4 text-white max-w-[671px] mx-auto'>
         Are you ready to maximize your driving efficiency with Ruvo’s revolutionary AI technology?
Apply today, and turn your driving time into a smarter, more profitable experience. 
Join us, and be part of a movement that values your time and the environment. </Text>
        <Wrapper className="max-w-[220px] mx-auto flex gap-x-[25px]">
          <NavButton link="/" color="green" type="solid">
          Apply to Drive
          </NavButton>
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default WhyDriveRuvo;
