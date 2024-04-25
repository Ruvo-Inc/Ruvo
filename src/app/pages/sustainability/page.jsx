'use client'
import { useEffect } from 'react';
import './style.css';
import Hero from '../../components/UI/Hero/Hero';
import BannerImage from '../../assets/images/Sustainability/banner.png'
import Heading from '../../components/UI/Heading/Heading';
import Wrapper from '@/app/components/UI/Wrapper/Wrapper';
import Text from '@/app/components/UI/Text/Text';
import Image from 'next/image';
import VisionImage1 from '@/app/assets/images/Sustainability/istockphoto-1438980177.png';
import VisionImage2 from '@/app/assets/images/Sustainability/istockphoto-1321942355.png';
import ImageText from '@/app/components/UI/reusable-components/ImageText';
import CarImage from '@/app/assets/images/Sustainability/cars.png'
import Earth from '@/app/assets/images/Sustainability/earth.png'
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  return (
    <>
      <Hero img={BannerImage}>
        <Heading headingStyle='h3' className='text-center text-white'> Ruvo's Commitment to</Heading>
        <Heading headingStyle='h1' className='text-center text-white'> Sustainability</Heading>
        <Heading headingStyle='h3' className='text-center text-white'>  Driving Tomorrow's Change</Heading>

      </Hero>


      <Wrapper id='section-sustainability' className='bg-c-salmon-100 relative min-smlg:flex justify-between overflow-hidden pt-[67px] items-end'>
        <Image src={VisionImage1.src} alt="hero-image" className='max-smlg:max-w-[50%] max-smlg:order-2' data-aos="zoom-out" data-aos-duration="800" width={VisionImage1.width} height={VisionImage1.height} />
        <Wrapper className="max-w-[612px] text-center mx-auto flex items-center justify-center self-center max-smlg:px-5 max-smlg:order-1">
          <Wrapper >
            <Heading text="Our Vision for a Greener Future" headingStyle='h2' className="mb-4" />
            <Text>
              Ruvo envisions a world where every journey contributes to a healthier planet. Our commitment extends beyond transportation to revolutionize urban mobility with zero emissions. We're not just part of the conversation on sustainability; we aim to lead it, setting new standards for how cities move and breathe.
            </Text>
          </Wrapper>
        </Wrapper>
        <Image src={VisionImage2.src} alt="hero-image" className='max-smlg:ml-auto max-smlg:max-w-[50%] max-smlg:order-3' data-aos="zoom-out" data-aos-duration="800" width={VisionImage2.width} height={VisionImage2.height} />
      </Wrapper>


      <Wrapper className='overflow-hidden relative'>
        <ImageText image={CarImage} imagePostion='left' heading='Starting with a Fully Electrified Fleet' imageClassName=' mix-blend-multiply'>
          <Heading headingStyle='span' className='max-w-[636px] block'>
            From day one, Ruvo is pioneering the shift towards sustainable urban mobility with our all-electric vehicle (EV) fleet. Our commitment to environmental stewardship is at the core of our operations, ensuring every Ruvo ride contributes positively to our planet.
            <br></br><br></br>
            This foundational decision places Ruvo at the forefront of eco-friendly transportation, offering a cleaner, greener alternative from the get-go. Our partnership with leading EV manufacturers not only emphasizes our dedication to cutting-edge technology but also our resolve to significantly reduce urban CO2 emissions.
            <br></br><br></br>
            Ruvo's initiative is set to redefine the standards for environmentally conscious travel, making every journey with us a step toward a more sustainable future.
          </Heading>
        </ImageText>
      </Wrapper>

      <Wrapper className='overflow-hidden relative bg-c-salmon-100' >
        <ImageText image={Earth} imagePostion='right' heading='Pioneering Renewable Energy Integration by 2030' imageClassName=' mix-blend-multiply'>
          <Heading headingStyle='span' className='max-w-[636px] block'>
            Ruvo is charting a course towards powering our operations and charging infrastructure with 100% renewable energy by 2030. Our journey towards sustainability includes strategic investments in solar and wind energy projects and forming partnerships with leading green energy providers.
            <br></br><br></br>
            This future-focused initiative marks Ruvo's commitment to reducing our environmental footprint and leading by example in the transition to a more sustainable mobility landscape. Through these efforts, we aim to significantly decrease our reliance on fossil fuels, ensuring that Ruvo's fleet operates within a fully sustainable ecosystem, driving us all towards a cleaner, greener future.

          </Heading>
        </ImageText>
      </Wrapper>




      <Wrapper className="border-t border-c-gray-400 bg-c-salmon-100 relative overflow-hidden the-trigger-point pt-[80px] px-5">
        <Wrapper className="w-[1px] bg-c-gray-400 left-1/2 translate-x-[-50%] absolute theBar-sub top-0 h-0 "></Wrapper>
        <LeftSide 
        heading='Empowering Our Community'
        index={1}
        text="We're launching the Ruvo Green Ambassador program, encouraging drivers and riders to adopt sustainable practices. From rewards for zero-waste practices to workshops on eco-friendly living, we're fostering a community where everyone plays a part in protecting the environment."
        />
        <RightSide
        index={2}
        heading='Innovating for Efficiency'
        text="Leveraging AI, Ruvo is crafting smarter routes that reduce travel time and emissions. Our technology minimizes idle times and suggests the most energy-efficient routes, significantly lowering the ecologica l impact of every ride."
        
        />
        <LeftSide 
        heading='Partnering for Progress'
        index={3}
        text="Collaborating with city planners, Ruvo is at the forefront of designing greener urban landscapes. Our data-driven insights help shape policies that reduce traffic congestion, promote the use of public transit, and support the creation of EV-friendly infrastructure."
        />
        <RightSide
        index={4}
        heading='Measuring Our Impact'
        text="Transparency is key to our sustainability mission. Ruvo will publish annual sustainability reports, detailing our progress towards reducing emissions, energy consumption, and our overall environmental impact. We're setting ambitious targets that will challenge us to innovate continually."
        
        />
 <LeftSide 
        heading='Looking Ahead'
        index={5}
        text="The journey to sustainability is ongoing, and Ruvo is committed to leading the charge. With every innovation, partnership, and community initiative, we're not just envisioning a greener future; we're actively creating it. Our mission drives us to explore new frontiers in sustainable mobility, ensuring that Ruvo remains synonymous with eco-friendly, efficient, and accessible urban transportation."
        />



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