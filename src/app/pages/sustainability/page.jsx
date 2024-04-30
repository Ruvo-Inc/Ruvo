'use client'
import { useEffect } from 'react';
import './style.css';
import Hero from '../../components/UI/Hero/Hero';
import BannerImage from '../../assets/images/Sustainability/banner.png'
import Heading from '../../components/UI/Heading/Heading';
import Wrapper from '@/app/components/UI/Wrapper/Wrapper';
import Text from '@/app/components/UI/Text/Text';
import { Sustainab } from '@/app/data/Menu';
import Container from '@/app/components/UI/Container/Container';

const Sustainability = () => {

  return (
    <>
      <Hero img={BannerImage}>
        <Heading headingStyle='h3' className='text-center text-white'> Ruvo's Commitment to</Heading>
        <Heading headingStyle='h1' className='text-center text-white'> Sustainability</Heading>
        <Heading headingStyle='h3' className='text-center text-white'>  Driving Tomorrow's Change</Heading>

      </Hero>
      <StickyHeading
        className="bg-[#FBF7F6]"
        heading="Our Vision for a Greener Future"
      >
        Ruvo envisions a world where every journey contributes to a healthier planet.
        Our commitment extends beyond transportation to revolutionize urban mobility
        with zero emissions. We're not just part of the conversation on
        sustainability; we aim to lead it, setting new standards for how cities move
        and breathe.
      </StickyHeading>
      <StickyHeading
        className="bg-white"
        heading=" Starting with a Fully Electrified Fleet"
      >
         From day one, Ruvo is pioneering the shift towards sustainable urban mobility with our all-electric vehicle (EV) fleet. Our commitment to environmental stewardship is at the core of our operations, ensuring every Ruvo ride contributes positively to our planet.
              <br /><br />
              This foundational decision places Ruvo at the forefront of eco-friendly transportation, offering a cleaner, greener alternative from the get-go. Our partnership with leading EV manufacturers not only emphasizes our dedication to cutting-edge technology but also our resolve to significantly reduce urban CO2 emissions.
              <br /><br />
              Ruvo's initiative is set to redefine the standards for environmentally conscious travel, making every journey with us a step toward a more sustainable future.
      </StickyHeading>

      <StickyHeading
        className="bg-[#FBF7F6]"
        heading="  Pioneering Renewable Energy Integration by 2030"
      >
         Ruvo is charting a course towards powering our operations and charging infrastructure with 100% renewable energy by 2030. Our journey towards sustainability includes strategic investments in solar and wind energy projects and forming partnerships with leading green energy providers.
              <br /><br />
              This future-focused initiative marks Ruvo's commitment to reducing our environmental footprint and leading by example in the transition to a more sustainable mobility landscape. Through these efforts, we aim to significantly decrease our reliance on fossil fuels, ensuring that Ruvo's fleet operates within a fully sustainable ecosystem, driving us all towards a cleaner, greener future.
      </StickyHeading>

      {Object.entries(Sustainab).map(([key, item], index) => (
         <StickyHeading key={key}
         className={`${index % 2 === 0 ? ' bg-white' : ' bg-[#FBF7F6]'}`}
         heading={item.heading}
       >
         {item.text}
       </StickyHeading>
      ))}

    </>
  );
}

export default Sustainability;



export function LeftSide({ index, heading, text }) {
  return (
    <>
      <Wrapper className="makes-text-sub  relative ">

        <Wrapper className="flex py-[80px] gap-[109px]">
          <Wrapper className="flex-1 max-md:hidden">

          </Wrapper>
          <Wrapper className="flex-1 relative max-md:bg-c-salmon-100">
            <Heading headingStyle='empty' className='number max-md:mx-auto max-md:mb-2 min-md:absolute min-md:left-[-83px] min-md:top-[16px] text-[16px] font-medium font-mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[14px]'>
              {index}
            </Heading>
            <Wrapper className="max-w-[632px] max-md:mx-auto">
              <Heading headingStyle='h3' className='mb-[10px] max-md:text-center'>{heading}</Heading>
              <Text className="max-md:text-center">
                {text}
              </Text></Wrapper>
          </Wrapper>


        </Wrapper>
      </Wrapper>
    </>
  )
}

export function RightSide({ index, heading, text }) {
  return (

    <Wrapper className="makes-text-sub  relative">

      <Wrapper className="flex py-[80px] gap-[109px]">

        <Wrapper className="flex-1 relative max-md:bg-c-salmon-100">
          <Heading headingStyle='empty' className='max-md:mx-auto max-md:mb-2 number min-md:absolute min-md:right-[-83px] min-md:top-[16px] text-[16px] font-medium font-mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[14px]'>
            {index}
          </Heading>
          <Wrapper className="max-w-[632px] text-right ml-auto max-md:mx-auto">
            <Heading headingStyle='h3' className='mb-[10px] max-md:text-center'>{heading}</Heading>
            <Text className=" ml-auto max-md:text-center">
              {text}
            </Text></Wrapper>
        </Wrapper>
        <Wrapper className="flex-1 max-md:hidden">

        </Wrapper>

      </Wrapper>
    </Wrapper>

  )
}

export const StickyHeading = ({ className, children, heading, mode }) => {
  return (
    <Wrapper className={className + " relative py-12   max-md:py-[50px] max-smlg:max-w-full"}>
      <Container className=' flex gap-x-[30px] justify-between max-smlg:flex-col gap-y-5 z-[1] relative'>
        <Wrapper className="flex-1 ">
          <Heading headingStyle="h2" className={`!text-[24px] sticky top-[150px] ${mode === 'light' || mode === 'light-overlay' ? 'text-white' : ''}`}>
            {heading}
          </Heading>
        </Wrapper>
        <Wrapper className="w-full max-w-[855px] min-5xl:max-w-[70%] max-3xlsm:max-w-[60%] max-smlg:max-w-full">
          <Text className={`text-[16px] ${mode === 'light' || mode === 'light-overlay' ? 'text-white' : ''}`}>
            {children}
          </Text>
        </Wrapper>
      </Container>
      {mode === 'light-overlay' && (<Wrapper className="absolute w-full h-full bg-black opacity-55 top-0 left-0 "></Wrapper>) }
    </Wrapper>
  )
}