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
import { MultiColumnCard } from '../why-ride-with-ruvo/page';
import  Instant from '../../assets/images/Why Drive/MAXIMIZE YOUR EARNINGS WITH ZERO COMMISSION.webp';
import  SEAMLESS from '../../assets/images/Why Drive/WORK WHEN YOU WANT, HOW YOU WANT.webp';
import  Join from '../../assets/images/Why Drive/JOIN A COMMUNITY DRIVING CHANGE.webp';
import  GET from '../../assets/images/Why Drive/GET STARTED IN NO TIME.webp';
import  STATE from '../../assets/images/Why Drive/STATE-OF-THE-ART TOOLS AT YOUR FINGERTIPS.webp';
import  PIONEERING from '../../assets/images/Why Drive/PIONEERING SUSTAINABLE URBAN TRANSPORT.webp';

const WhyDriveRuvo = () => {
  return (
    <>
  
    <Wrapper className='bg-c-green-100 py-12'>
      <Container>
        <Wrapper className='flex items-center justify-between gap-x-12  gap-y-7 max-smlg:flex-col'>
            <Wrapper className='flex-[30%]'>
            <Heading headingStyle='h1' className='text-left max-2xl:text-[40px] max-sm:text-[30px]  mb-2'> Why Drive with Ruvo?</Heading>
        <Text className="text-left">
        Embark on a journey with Ruvo where every mile and every minute counts. As a Ruvo driver, you’re not just part of a ride-hailing service—you’re at the forefront of reshaping urban mobility. Our innovative, AI-powered platform ensures that your time on the road is efficient, profitable, and environmentally conscious. Join us to drive smarter, not harder.
        </Text>
            </Wrapper>
            <Wrapper className='flex-[70%] flex gap-7 max-sm:flex-col'>
              
  <MultiColumnCard
    heading="Maximize Your Earnings with Zero Commission"
    image={Instant}
    text="At Ruvo, enjoy a transparent, commission-free earning model that respects your hard work. Our marketplace allows you to set competitive fares based on demand, not dictates. With Ruvo, what you earn is yours to keep—boost your income without any hidden fees."
  />
  
 

  <MultiColumnCard
    heading="Work When You Want, How You Want"
    image={SEAMLESS}
    text="Our platform puts you in the driver’s seat—not just of your vehicle but of your schedule. Choose to drive part-time or full-time, and select rides that fit your life and preferences. With Ruvo, you’re in control of your time, ensuring you drive at your convenience."
  />
  
 
              </Wrapper>
        </Wrapper>
      </Container>
    </Wrapper>

    <Wrapper className=' py-12'>
      <Container>
      
 
            <Wrapper className='grid grid-cols-3 gap-7 flex-wrap  max-md:grid-cols-2 max-sm:grid-cols-1'>
  <MultiColumnCard
    heading="State-of-the-Art Tools at Your Fingertips"
    image={STATE}
    text="Leverage our AI-driven platform designed to optimize your routes and reduce downtime. Our support goes beyond the road—with Ruvo, you have 24/7 access to assistance and tools that make driving as straightforward as possible. Our technology predicts high-demand areas and times, increasing your rides and revenue."
  />
  


  <MultiColumnCard
    heading="Pioneering Sustainable Urban Transport"
    image={PIONEERING}
    text="Driving with Ruvo means you contribute to a greener city. Our commitment to an all-electric fleet reduces urban pollution and positions you as a key player in the global move towards sustainable transportation. By reducing deadheading, you also help decrease overall traffic congestion, making city environments cleaner and more livable."
  />
  

    <MultiColumnCard
    heading="Join a Community Driving Change"
    image={Join}
    text="As a Ruvo driver, you’re part of a forward-thinking community that values sustainability and social impact. Our all-electric fleet not only reduces your carbon footprint but also aligns you with a global movement towards environmental responsibility. Drive with us and help shape the future of urban transport."
  />
  
 

    <MultiColumnCard
    heading="Get Started in No Time"
    image={GET}
    text="Signing up to drive with Ruvo is quick and easy. Our streamlined onboarding process gets you on the road faster, so you can start earning. Plus, we provide all the training you need to be successful—from navigating the app to optimizing your earnings."
  />
              </Wrapper>
      </Container>
    </Wrapper>
    
            

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
          <NavButton link="/?form=1" color="green" type="solid">
          Apply to Drive
          </NavButton>
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default WhyDriveRuvo;
