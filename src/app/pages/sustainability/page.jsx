'use client'
import { useEffect } from 'react';
import './style.css';
import Hero from '../../components/UI/Hero/Hero';
import BannerImage from '../../assets/images/Sustainability/banner.png'
import Heading from '../../components/UI/Heading/Heading';
import Wrapper from '@/app/components/UI/Wrapper/Wrapper';
import Text from '@/app/components/UI/Text/Text';
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sustainab } from '@/app/data/Menu';
import Container from '@/app/components/UI/Container/Container';
gsap.registerPlugin(ScrollTrigger);
const Sustainability = () => {
  useEffect(() => {
    const panels = gsap.utils.toArray(".makes-text-sub");
    const theBar = gsap.utils.toArray(".theBar-sub");    
    const panelHeights = panels.map(panel => panel.clientHeight);    
    const endPositions = panelHeights.reduce((acc, height) => {
      acc.push(acc.length === 0 ? height : acc[acc.length - 1] + height + 160);
      return acc;
    }, []);    
    panels.forEach((panel, index) => {
      const op3 = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top center",
          end: "100% center",
          scrub: 1,
          markers: false,
          onEnter: ({ progress, direction, isActive }) => {
            panel.classList.add("enter");
          },
          onLeaveBack: ({ progress, direction, isActive }) => {
            panel.classList.remove("enter");
          }
        }
      });
    
      const bar = gsap.timeline({
        scrollTrigger: {
          trigger: '.the-trigger-point',
          start: index === 0 ? "top center" : `${endPositions[index - 1]} center`,
          end: `${endPositions[index]} center`,
          scrub: 1,
          markers: false
        }
      });
    
      bar.to(".theBar-sub", { height: endPositions[index] });
    });
    
    

  }, []);
  useEffect(() => {
    const panels = gsap.utils.toArray(".wrapper-div");
    panels.forEach((panel, index) => {
      const op3 = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top center",
          end: "100% center",
          scrub: 1,
          markers: false,
          onEnter: ({ progress, direction, isActive }) => {
            panel.classList.add("active-op");
          },
          onLeaveBack: ({ progress, direction, isActive }) => {
            panel.classList.remove("active-op");
          },
        },
      });
    });
  }, []);
  return (
    <>
      <Hero img={BannerImage}>
        <Heading headingStyle='h3' className='text-center text-white'> Ruvo's Commitment to</Heading>
        <Heading headingStyle='h1' className='text-center text-white'> Sustainability</Heading>
        <Heading headingStyle='h3' className='text-center text-white'>  Driving Tomorrow's Change</Heading>

      </Hero>
      <Wrapper className="relative py-[85px]   max-md:py-[50px] bg-[#FBF7F6] max-smlg:max-w-full">
      <Container className=' flex gap-x-[30px] justify-between max-smlg:flex-col gap-y-5'>
        <Wrapper className="flex-1 ">
          <Heading headingStyle="h2" className="!text-[32px] sticky top-[150px]">
          Our Vision for a Greener Future
          </Heading>
        </Wrapper>
        <Wrapper className="w-full max-w-[855px] min-5xl:max-w-[70%] max-3xlsm:max-w-[60%] max-smlg:max-w-full">
          <Text className="  text-[22px]">
          Ruvo envisions a world where every journey contributes to a healthier planet. Our commitment extends beyond transportation to revolutionize urban mobility with zero emissions. We're not just part of the conversation on sustainability; we aim to lead it, setting new standards for how cities move and breathe.
          </Text>
        </Wrapper>
        </Container>
      </Wrapper>
      <Wrapper className="relative py-[85px]   max-md:py-[50px] bg-white ">
      <Container className=' flex gap-x-[30px] justify-between max-smlg:flex-col gap-y-5'>
        <Wrapper className="flex-1 ">
          <Heading headingStyle="h2" className="!text-[32px] sticky top-[150px]">
          Starting with a Fully Electrified Fleet
          </Heading>
        </Wrapper>
        <Wrapper className="w-full max-w-[855px] min-5xl:max-w-[70%] max-3xlsm:max-w-[60%] max-smlg:max-w-full">
          <Text className="  text-[22px]">
          From day one, Ruvo is pioneering the shift towards sustainable urban mobility with our all-electric vehicle (EV) fleet. Our commitment to environmental stewardship is at the core of our operations, ensuring every Ruvo ride contributes positively to our planet.
<br/><br/>
This foundational decision places Ruvo at the forefront of eco-friendly transportation, offering a cleaner, greener alternative from the get-go. Our partnership with leading EV manufacturers not only emphasizes our dedication to cutting-edge technology but also our resolve to significantly reduce urban CO2 emissions.
<br/><br/>
Ruvo's initiative is set to redefine the standards for environmentally conscious travel, making every journey with us a step toward a more sustainable future.
          </Text>
        </Wrapper>
        </Container>
      </Wrapper>
      <Wrapper className="relative py-[85px]   max-md:py-[50px] bg-[#FBF7F6]">
      <Container className=' flex gap-x-[30px] justify-between max-smlg:flex-col gap-y-5'>
        <Wrapper className="flex-1 ">
          <Heading headingStyle="h2" className="!text-[32px] sticky top-[150px]">
          Pioneering Renewable Energy Integration by 2030
          </Heading>
        </Wrapper>
        <Wrapper className="w-full max-w-[855px] min-5xl:max-w-[70%] max-3xlsm:max-w-[60%] max-smlg:max-w-full">
          <Text className="  text-[22px]">
          Ruvo is charting a course towards powering our operations and charging infrastructure with 100% renewable energy by 2030. Our journey towards sustainability includes strategic investments in solar and wind energy projects and forming partnerships with leading green energy providers.
<br/><br/>
This future-focused initiative marks Ruvo's commitment to reducing our environmental footprint and leading by example in the transition to a more sustainable mobility landscape. Through these efforts, we aim to significantly decrease our reliance on fossil fuels, ensuring that Ruvo's fleet operates within a fully sustainable ecosystem, driving us all towards a cleaner, greener future.
          </Text>
        </Wrapper>
        </Container>
      </Wrapper>
      <Wrapper className="flex  py-[50px] min-smlg:py-[85px]  bg-white">
      <Container className=' flex gap-x-[30px] justify-between max-smlg:flex-col gap-y-5 w-full'>
        <Wrapper className='flex-1'>
          <Wrapper className="sticky top-[150px]">
            <Heading headingStyle="h2Class" className='!text-[32px]'>sustainability</Heading>
          </Wrapper>
        </Wrapper>
        <Wrapper className=" flex flex-col gap-16  w-full max-w-[855px] max-smlg:max-w-full max-xl:flex-1">

          {Object.entries(Sustainab).map(([key,item]) => (
            <Wrapper className="wrapper-div " key={key}>
              <Heading
                headingStyle="h2Class"
                className="!text-[28px] mb-4 max-xl:!"
                text={item.heading}
              />
              <Heading headingStyle="span">
                {" "}
                <Text className="z-[1]    text-[22px] leading-[1.5] "> {item.text}</Text>
              </Heading>
            </Wrapper>
                ))}
        </Wrapper>
   </Container>
      </Wrapper>
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
            <Heading headingStyle='empty' className='number max-md:mx-auto max-md:mb-2 min-md:absolute min-md:left-[-83px] min-md:top-[16px] text-[16px] font-medium font-Mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[14px]'>
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
          <Heading headingStyle='empty' className='max-md:mx-auto max-md:mb-2 number min-md:absolute min-md:right-[-83px] min-md:top-[16px] text-[16px] font-medium font-Mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[14px]'>
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