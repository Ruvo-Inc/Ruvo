'use client'
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import Heading from "../../UI/Heading/Heading";
import Text from "../../UI/Text/Text";
gsap.registerPlugin(ScrollTrigger);

const HowRuvoWorks = () => {
useEffect(() => {
    const panels = gsap.utils.toArray(".makes-text");
    const theBar = gsap.utils.toArray(".theBar");    
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
    
      bar.to(".theBar", { height: endPositions[index] });
    });
    
    

  }, []);
  return (

<Wrapper className=" relative overflow-hidden the-trigger-point max-md:pt-[0px] pt-[81px] mt-[70px] mb-[100px] max-md:px-5">
<Wrapper className="w-[1px] bg-c-gray-400 left-1/2 translate-x-[-50%] absolute theBar top-0 h-0 "></Wrapper>
<Wrapper className='bg-c-green-600 py-[18px] px-[55px] max-md:py-[10px] max-md:px-[0] max-md:w-full rounded-[10px] max-md:static max-md:translate-x-[0%] absolute top-[0] left-1/2 translate-x-[-50%]'>
<Heading headingStyle='h3Class' className='text-white text-center max-smlg:!text-[24px]'>
      How Ruvo works
      </Heading>
      </Wrapper>
<Wrapper className="makes-text makes-text-1 relative">

<Wrapper className="flex py-[80px] gap-[109px] max-md:py-[40px]">
<Wrapper className="flex-1 max-md:hidden">

</Wrapper>
<Wrapper className="flex-1 relative max-md:bg-white pb-3">
    <Heading  headingStyle='empty' className='max-md:static max-md:mb-3 max-md:mx-auto number bg-c-green-200 text-c-gray-600 absolute left-[-83px] top-[31px] text-[16px] font-medium font-Mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[14px]'>
            1
    </Heading>
<Wrapper className="max-md:flex max-md:flex-col max-md:items-center">
<Heading headingStyle='empty' className='text-c-gray-600 bg-c-green-200 rounded-[5px] py-[5px] px-[18px] inline text-[16px] uppercase font-bold font-mulish'>Guest</Heading>
<Heading headingStyle='h3Class' className='mt-[13px] mb-[11px]'>Select your Destination</Heading>
<Text>
You can schedule rides without fees
</Text></Wrapper>
</Wrapper>


</Wrapper>
</Wrapper> 
<Wrapper className="makes-text makes-text-2">
<Wrapper className="flex py-[80px] gap-[109px] max-md:py-[40px]">
<Wrapper className="flex-1 relative max-md:bg-white pb-3">
  
    <Heading  headingStyle='empty' className='max-md:static max-md:mb-3 max-md:mx-auto  number bg-c-green-200 text-c-gray-600 absolute right-[-83px] top-[31px] text-[16px] font-medium font-Mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[14px]'>
            2
    </Heading>
<Wrapper className="max-md:flex max-md:flex-col max-md:items-center text-right ml-auto">
<Heading headingStyle='empty' className='text-c-gray-600 bg-c-green-200 rounded-[5px] py-[5px] px-[18px] inline text-[16px] uppercase font-bold font-mulish'>Guest</Heading>
<Heading headingStyle='h3Class' className='mt-[13px] mb-[11px]'>Select a Partner</Heading>
<Text>
You have a choice
</Text></Wrapper>
</Wrapper>

<Wrapper className="flex-1 max-md:hidden">

</Wrapper>



</Wrapper>
</Wrapper>


<Wrapper className="makes-text makes-text-3 relative">

<Wrapper className="flex py-[80px] gap-[109px] max-md:py-[40px]">
<Wrapper className="flex-1 max-md:hidden">

</Wrapper>
<Wrapper className="flex-1 relative max-md:bg-white  pb-3">
    <Heading  headingStyle='empty' className='max-md:static max-md:mb-3 max-md:mx-auto  number bg-c-teal-500 text-white absolute left-[-83px] top-[31px] text-[16px] font-medium font-Mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[14px]'>
            3
    </Heading>
<Wrapper className="max-md:flex max-md:flex-col max-md:items-center">
<Heading headingStyle='empty' className='text-white bg-c-teal-500 rounded-[5px] py-[5px] px-[18px] inline text-[16px] uppercase font-bold font-mulish'>Partner</Heading>
<Heading headingStyle='h3Class' className='mt-[13px] mb-[11px] max-md:text-center'>Accept or Decline Guest</Heading>
<Text>
You have a choice too
</Text></Wrapper>
</Wrapper>


</Wrapper>
</Wrapper> 
<Wrapper className="makes-text makes-text-4">
<Wrapper className="flex py-[80px] gap-[109px] max-md:py-[40px]">
<Wrapper className="flex-1 relative max-md:bg-white pb-3">
  
    <Heading  headingStyle='empty' className='max-md:static max-md:mb-3 max-md:mx-auto  number bg-c-salmon-100 border border-c-gray-400 text-c-gray-600 absolute right-[-83px] top-[-5px] text-[16px] font-medium font-Mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[14px]'>
            4
    </Heading>
<Wrapper className="max-md:flex max-md:flex-col max-md:items-center text-right ml-auto">
<Heading headingStyle='h3Class' className='mb-[11px] max-md:text-center'>Travel with Confidence</Heading>
<Text>
We’ve got your back
</Text></Wrapper>
</Wrapper>

<Wrapper className="flex-1 max-md:hidden">

</Wrapper>



</Wrapper>
</Wrapper>

<Wrapper className="makes-text makes-text-5 relative">

<Wrapper className="flex py-[80px] gap-[109px] max-md:py-[40px]">
<Wrapper className="flex-1 max-md:hidden">

</Wrapper>
<Wrapper className="flex-1 relative max-md:bg-white pb-3">
<Heading  headingStyle='empty' className='max-md:static max-md:mb-3 max-md:mx-auto  number bg-c-green-200 text-c-gray-600 absolute left-[-83px] top-[31px] text-[16px] font-medium font-Mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[14px]'>
            5
    </Heading>
<Wrapper className="max-md:flex max-md:flex-col max-md:items-center">
<Heading headingStyle='empty' className='text-c-gray-600 bg-c-green-200 rounded-[5px] py-[5px] px-[18px] inline text-[16px] uppercase font-bold font-mulish'>Guest</Heading>
<Heading headingStyle='h3Class' className='mt-[13px] mb-[11px] max-md:text-center'>Arrive at the destination</Heading>
<Text>
Notify us when the trip has ended
</Text></Wrapper>
</Wrapper>


</Wrapper>
</Wrapper> 
<Wrapper className="makes-text makes-text-6">
<Wrapper className="flex py-[80px] gap-[109px] max-md:py-[40px]">
<Wrapper className="flex-1 relative text-right max-md:bg-white pb-3">

<Heading  headingStyle='empty' className='max-md:static max-md:mb-3 max-md:mx-auto  number bg-c-green-200 text-c-gray-600 absolute right-[-83px] top-[31px] text-[16px] font-medium font-Mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[14px]'>
            6
    </Heading>
<Wrapper className="max-md:flex max-md:flex-col max-md:items-center text-right max-md:text-center ml-auto">
<Heading headingStyle='empty' className='text-c-gray-600 bg-c-green-200 rounded-[5px] py-[5px] px-[18px] inline text-[16px] uppercase font-bold font-mulish'>Guest</Heading>
<Heading headingStyle='h3Class' className='mt-[13px] mb-[11px]'>Save your preferences</Heading>
<Text>
Build your partner list to reference on future rides
</Text></Wrapper>
</Wrapper>

<Wrapper className="flex-1 max-md:hidden">

</Wrapper>



</Wrapper>
</Wrapper>

<Wrapper className="makes-text makes-text-7">
<Wrapper className="flex py-[80px] gap-[109px] max-md:py-[40px]">
<Wrapper className="flex-1 max-md:hidden">

</Wrapper>
<Wrapper className="flex-1 relative max-md:bg-white pb-3">
  
<Heading  headingStyle='empty' className='max-md:static max-md:mb-3 max-md:mx-auto  number bg-c-salmon-100 border border-c-gray-400 text-c-gray-600 absolute left-[-83px] top-[-5px] text-[16px] font-medium font-Mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[14px]'>
            7
    </Heading>
<Wrapper className="max-md:flex max-md:flex-col max-md:items-center max-md:text-center text-left ">
<Heading headingStyle='h3Class' className='mb-[11px]'>Rate your travel</Heading>
<Text>
Ruvo’s AI will learn from every ride 

</Text></Wrapper>
</Wrapper>





</Wrapper>
</Wrapper>

<Wrapper className="makes-text makes-text-8">
<Wrapper className="flex pt-[80px] gap-[109px]">

<Wrapper className="flex-1 relative max-md:bg-white  pb-3">
  
<Heading  headingStyle='empty' className='max-md:static max-md:mb-3 max-md:mx-auto  number bg-c-salmon-100 border border-c-gray-400 text-c-gray-600 absolute right-[-83px] top-[-5px] text-[16px] font-medium font-Mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[14px]'>
            8
            <Wrapper className='absolute top-[102%] h-full w-full bg-white left-0'>

            </Wrapper>
    </Heading>
<Wrapper className="max-md:flex max-md:flex-col max-md:items-center text-right ml-auto">
<Heading headingStyle='h3Class' className='mb-[11px]'>Rate your travel</Heading>
<Text>
Ruvo’s AI will learn from every ride 

</Text></Wrapper>
</Wrapper>
<Wrapper className="flex-1 max-md:hidden">

</Wrapper>




</Wrapper>
</Wrapper>
</Wrapper>
  );
}

export default HowRuvoWorks;
