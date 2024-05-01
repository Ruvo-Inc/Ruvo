'use client'
import './style.css'
import Hero from '../../components/UI/Hero/Hero';
import BannerImage from '@/app/assets/images/HowRuvoWorks/Banner image.png'
import Image1 from '@/app/assets/images/HowRuvoWorks/image 7.png'
import Image2 from '@/app/assets/images/HowRuvoWorks/Group 300.png'
import Image3 from '@/app/assets/images/HowRuvoWorks/Group 301.png'
import Image4 from '@/app/assets/images/HowRuvoWorks/image 13.png'
import Image5 from '@/app/assets/images/HowRuvoWorks/image 14.png'
import Heading from '../../components/UI/Heading/Heading';
import Text from '@/app/components/UI/Text/Text';
import Wrapper from '@/app/components/UI/Wrapper/Wrapper';
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);



const HowRuvoWorks = () => {
  useEffect(() => {
    const panels = gsap.utils.toArray(".makes-text-how");
    const panelHeights = panels.map(panel => panel.clientHeight);
    const endPositions = panelHeights.reduce((acc, height) => {
      acc.push(acc.length === 0 ? height : acc[acc.length - 1] + height + 38);
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

      bar.to(".theBar-how", { height: endPositions[index] });
    });



  }, []);
  return (
    <>
    <Hero img={BannerImage}>

      <Heading headingStyle='h1' className='text-center text-white'>  Why Ride with Ruvo? </Heading>
      <Text className='text-center text-white text-sm max-w-[1052px] mx-auto mt-[10px]'>
      Welcome to the future of urban travel. At Ruvo, we're not just taking you places—we're pioneering a movement towards a smarter, cleaner, and more sustainable way to move around your city. Join us on a journey where every ride promises more than just a destination; it offers unparalleled freedom and efficiency, reshaping your travel experience with instant, personalized choices.
      </Text>

  </Hero>
  
  <Wrapper className='py-[100px] px-5 max-md:py-[50px]'>
  <Wrapper className='flex justify-center '>
        <Heading headingStyle='h3Class' className='text-center  bg-c-green-600 text-white inline-block py-[18px] px-[55px] rounded-[10px]'>
          Steps
        </Heading>
        </Wrapper>
        <Wrapper className="relative overflow-hidden the-trigger-point max-md:pt-[50px] pt-[108px] max-md:flex max-md:flex-col max-md:gap-5">
          <Wrapper className="w-[1px] bg-c-gray-400 left-1/2 translate-x-[-50%] absolute theBar-how top-0 h-0 "></Wrapper>
          <LeftSide
            image={Image1}
            index={1}
            heading='Setting the Destination'
            text='A rider opens the Ruvo app, inputs their destination into the search box, and reviews the available ride options. Each option details the vehicle type, fare estimate, and expected arrival time. The rider selects their preferred option and confirms the pickup location.'
          />
          <RightSide
            image={Image2}  
            index={2}
            heading='Matching with a Driver'
            text="Nearby Ruvo drivers receive the ride request notification and have the option to accept it. The rider is then notified when a driver accepts their request and can track the approaching vehicle in real-time within the app."
          />
          <LeftSide
            image={Image3}  
            index={3}
            heading='The Pickup'
            text="Upon arrival, the driver and rider verify each other’s details to ensure a secure and correct match. The driver then initiates the journey in the app, starting the eco-friendly ride to the rider's destination."
          />


          <RightSide
            image={Image4}  
            index={4}
            heading='The Journey'
            text="Ruvo's app provides the driver with the most efficient route to the destination, optimizing for both time and energy consumption. This smart routing not only ensures a timely arrival but also contributes to Ruvo's commitment to reducing the environmental impact of each trip."
          />


          <LeftSide
            image={Image5}  
            index={5}
            heading='Feedback and Support'
            text="At the end of the journey, both the rider and the driver have the opportunity to rate the experience and provide feedback. This two-way rating system is essential for maintaining high service standards and fostering a community of respect and trust. Riders also have the option to tip their drivers directly through the app as a token of appreciation for excellent service."
          />




        </Wrapper>
      </Wrapper>
  </>
  );
}

export default HowRuvoWorks;



export function LeftSide({ index, heading, text, image }) {
  return (
    <>
      <Wrapper className="makes-text-how  relative max-md:bg-white">

        <Wrapper className="flex min-md:py-[40px] py-[20px] gap-[109px] max-md:flex-col max-md:gap-[10px]  max-md:items-center">
          <Wrapper className="flex-1 ">
          <Image src={image?.src} alt="icon" className='ml-auto'  width={image?.width} height={image?.height}/>
          </Wrapper>
          <Wrapper className="flex-1 relative">
            <Heading headingStyle='empty' className='number max-md:mx-auto max-md:mb-2 min-md:absolute min-md:left-[-83px] min-md:top-[-3px] text-[16px] font-medium font-mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[14px]'>
              {index}
            </Heading>
            <Wrapper className="max-w-[631px] max-md:mx-auto">
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

export function RightSide({ index, heading, text, image }) {
  return (

    <Wrapper className="makes-text-how max-md:bg-white relative">

      <Wrapper className="flex min-md:py-[40px] py-[20px] gap-[109px] max-md:gap-[10px] max-md:flex-col-reverse max-md:items-center">

        <Wrapper className="flex-1 relative">
          <Heading headingStyle='empty' className='max-md:mx-auto max-md:mb-2 number min-md:absolute min-md:right-[-83px] min-md:top-[-3px] text-[16px] font-medium font-mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[14px]'>
            {index}
          </Heading>
          <Wrapper className="max-w-[631px] text-right ml-auto max-md:mx-auto">
            <Heading headingStyle='h3' className='mb-[10px] max-md:text-center'>{heading}</Heading>
            <Text className=" ml-auto max-md:text-center">
              {text}
            </Text></Wrapper>
        </Wrapper>
        <Wrapper className="flex-1 ">
        <Image src={image?.src} alt="icon"  width={image?.width} height={image?.height}/>
        </Wrapper>

      </Wrapper>
    </Wrapper>

  )
}