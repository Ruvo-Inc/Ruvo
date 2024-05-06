'use client'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import Heading from "../../UI/Heading/Heading";
import Text from "../../UI/Text/Text";
import Container from "../../UI/Container/Container";
gsap.registerPlugin(ScrollTrigger);

const HowRuvoWorks = () => {
  const bar = useRef();
  const [resize,setResize] = useState('');
  useEffect(() => {
    const lastpanel = gsap.utils.toArray(".makes-text:last-child");
    const trigger = gsap.utils.toArray(".the-trigger-point");
    bar.current.style.maxHeight = trigger[0].clientHeight - lastpanel[0].clientHeight  + "px";
  },[resize]);
  useEffect(() => {
      const panels = gsap.utils.toArray(".makes-text");
    const panelsHeight = gsap.utils.toArray(".makes-text:not(:last-child)");

    const panelHeights = panelsHeight.map(panel => panel.clientHeight);
    const endPositions = panelHeights.reduce((acc, height) => {
      acc.push(acc.length === 0 ? height : acc[acc.length - 1] + height + 80);
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
            setResize(progress)
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
      bar.to(".theBar", { height: endPositions[index]});
    });    

  }, []);
  return (
   
<Wrapper className=" relative overflow-hidden max-md:py-[50px] py-4 max-md:px-5 bg-white z-[1]">
  <Container className=' w-full h-full absolute z-[-1] left-1/2 translate-x-[-50%]'>
    <Wrapper className='how-ruvo-works  w-full h-full'>

    </Wrapper>
  </Container>
  <Heading
    headingStyle="h3Class"
    className="text-primary text-center"
  >
    How Ruvo works
  </Heading>
  <Wrapper className="the-trigger-point relative overflow-hidden mt-3 max-md:mt-[0px]">
    <div className="w-[1px] bg-c-gray-400 left-1/2 translate-x-[-50%] absolute theBar top-[30px] max-md:top-[40px] h-0 " ref={bar}></div>
    <CardBothSide
       postion="left"
       heading="Select your destination"
       text="You can schedule rides without fees"
       index={1}
       type="rider"
       heading1="Select a driver"
       text1="You have a choice"
    />
     <Card
      postion="right"
      heading="Accept or Decline ride"
      text="You have a choice too"
      index={2}
      type="driver"
    />
    <Card
      postion="right"
      heading="Arrive at the destination"
      text="Notify us when the trip has ended"
      index={3}
      type="driver"
    />
     <Card
      postion="left"
      heading="Save your preferences"
      text="Build your driver list to reference on future rides"
      index={4}
      type="rider"
    />   
  </Wrapper>
  <Wrapper>
  <Wrapper className={ `relative` }>
        <Wrapper className="flex py-2 min-md:gap-[109px] max-md:flex-col">
          <Wrapper className="flex-1 relative pt-[10px]">     
            <Wrapper
              className={
                "max-md:flex max-md:flex-col max-md:items-center"                
              }
            >           

        
                <Wrapper className="flex gap-[13px] justify-center  ">
                  <Heading
                    headingStyle="empty"
                    className={
                      `bg-black ` +
                      "text-white  rounded-[5px] py-[5px] px-[18px] inline-block text-[14px]  font-bold font-mulish capitalize"
                    }
                  >
                    rider
                  </Heading>
                  <Heading
                    headingStyle="empty"
                    className={
                      `bg-black ` +
                      "text-white rounded-[5px] py-[5px] px-[18px] inline-block text-[14px]  font-bold font-mulish capitalize"
                    }
                  >
                    driver
                  </Heading>
                </Wrapper>
    

              <Heading headingStyle="h3Class" className="mt-[8px] mb-[0px] text-center max-sm:text-[20px] !text-[22px]">
              Rate your travel
              </Heading>
              <Text  className="text-center ">Ruvo’s AI will learn from every ride

</Text>
            </Wrapper>
            <Wrapper className="flex-1">
            <Wrapper className="flex-1 relative ">
  
            <Wrapper
              className={
                "max-md:flex max-md:flex-col items-center"}               
            >           

              <Heading headingStyle="h3Class" className="mt-[8px] mb-[0px] text-center max-sm:text-[20px] !text-[22px]">
              See the impact we made

              </Heading>
              <Text className="text-center "> Track your carbon offset

</Text>
            </Wrapper>
          </Wrapper>


            </Wrapper>
          </Wrapper>
        
        </Wrapper>
      </Wrapper>
  </Wrapper>
</Wrapper>
  );
}

export default HowRuvoWorks;
export function Card({ postion, index, heading, text, type }) {
  return (
    <>
      <Wrapper className={ `makes-text relative makes-text-${index}` }>
        <Wrapper className="flex py-2 gap-[109px]">
          {postion === "right" && (
            <Wrapper className="flex-1 max-md:hidden min-h-[98px]"></Wrapper>
          )}
          <Wrapper className="flex-1 relative pt-[10px]">
            <Heading
              headingStyle="empty"
              className={
                `${postion === "left" ? " right-[-83px]" : " left-[-83px]"}` +
                `${type === "blank" ? " top-[0px]" : " top-[0px]"}` +                
                `${type === "rider" ? " bg-black" : ""} ${
                  type === "driver" ? " bg-black" : ""
                } ${
                  type === "both" ? " bg-black border-[5px] border-black" : ""
                } ${type === "blank" ? " bg-black " : ""}` +
                " max-md:static max-md:mb-3 max-md:mx-auto number  text-white absolute  text-[20px] font-medium font-mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[16px]"
              }
            >
              {index}
            </Heading>
            <Wrapper
              className={
                "max-md:flex max-md:flex-col max-md:items-center" +
                `${postion === "left" ? " text-right ml-auto" : ""}`
              }
            >
              {type !== "both" && type !== "blank" && (
                <Heading
                  headingStyle="empty"
                  className={
                    `${type === "rider" ? " bg-black" : ""} ${
                      type === "driver" ? " bg-black" : ""
                    }  ${type === "blank" ? " bg-black " : ""}` +
                    "text-white rounded-[5px] py-[5px] px-[18px] inline-block text-[14px]  font-bold font-mulish capitalize"
                  }
                >
                  {type}
                </Heading>
              )}

              {type === "both" && (
                <Wrapper className="flex gap-[13px] justify-end">
                  <Heading
                    headingStyle="empty"
                    className={
                      `bg-black ` +
                      "text-white  rounded-[5px] py-[5px] px-[18px] inline-block text-[14px]  font-bold font-mulish capitalize"
                    }
                  >
                    rider
                  </Heading>
                  <Heading
                    headingStyle="empty"
                    className={
                      `bg-black ` +
                      "text-white rounded-[5px] py-[5px] px-[18px] inline-block text-[14px]  font-bold font-mulish capitalize"
                    }
                  >
                    driver
                  </Heading>
                </Wrapper>
              )}

              <Heading headingStyle="h3Class" className="mt-[8px] mb-[0px] max-md:text-center max-sm:text-[20px] !text-[22px]">
                {heading}
              </Heading>
              <Text>{text}</Text>
            </Wrapper>
          </Wrapper>
          {postion === "left" && (
            <Wrapper className="flex-1 max-md:hidden min-h-[98px]"></Wrapper>
          )}
        </Wrapper>
      </Wrapper>
    </>
  );
}

export function CardBothSide({ postion, index, heading, text, type, text1, heading1 }) {
  return (
    <>
      <Wrapper className={ `makes-text relative makes-text-${index}` }>
        <Wrapper className="flex py-2 min-md:gap-[109px] max-md:flex-col">
          <Wrapper className="flex-1 relative pt-[10px]">
            <Heading
              headingStyle="empty"
              className={
                `${postion === "left" ? " right-[-83px]" : " left-[-83px]"}` +
                `${type === "blank" ? " top-[0px]" : " top-[0px]"}` +                
                `${type === "rider" ? " bg-black" : ""} ${
                  type === "driver" ? " bg-black" : ""
                } ${
                  type === "both" ? " bg-black border-[5px] border-black" : ""
                } ${type === "blank" ? " bg-black " : ""}` +
                " max-md:static max-md:mb-3 max-md:mx-auto number  text-white absolute  text-[20px] font-medium font-mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[16px]"
              }
            >
              {index}
            </Heading>
            <Wrapper
              className={
                "max-md:flex max-md:flex-col max-md:items-center" +
                `${postion === "left" ? " text-right ml-auto" : ""}`
              }
            >
              {type !== "both" && type !== "blank" && (
                <Heading
                  headingStyle="empty"
                  className={
                    `${type === "rider" ? " bg-black" : ""} ${
                      type === "driver" ? " bg-black" : ""
                    }  ${type === "blank" ? " bg-black " : ""}` +
                    "text-white max-md:mx-auto rounded-[5px] py-[5px] px-[18px] inline-block text-[14px]  font-bold font-mulish capitalize"
                  }
                >
                  {type}
                </Heading>
              )}

              {type === "both" && (
                <Wrapper className="flex gap-[13px] justify-end  min-md:absolute right-0 top-[-15px] ">
                  <Heading
                    headingStyle="empty"
                    className={
                      `bg-black ` +
                      "text-white  rounded-[5px] py-[5px] px-[18px] inline-block text-[14px]  font-bold font-mulish capitalize"
                    }
                  >
                    rider
                  </Heading>
                  <Heading
                    headingStyle="empty"
                    className={
                      `bg-black ` +
                      "text-white rounded-[5px] py-[5px] px-[18px] inline-block text-[14px]  font-bold font-mulish capitalize"
                    }
                  >
                    driver
                  </Heading>
                </Wrapper>
              )}

              <Heading headingStyle="h3Class" className="mt-[8px] mb-[0px] max-md:text-center max-sm:text-[20px] !text-[22px]">
                {heading}
              </Heading>
              <Text>{text}</Text>
            </Wrapper>
          </Wrapper>
            <Wrapper className="flex-1  min-h-[98px]">
            <Wrapper className="flex-1 relative pt-[10px] text-center">
            {type !== "both" && type !== "blank" && (
                <Heading
                  headingStyle="empty"
                  className={
                    `${type === "rider" ? " bg-black" : ""} ${
                      type === "driver" ? " bg-black" : ""
                    }  ${type === "blank" ? " bg-black " : ""}` +
                    "text-white max-md:mx-auto rounded-[5px] py-[5px] px-[18px] inline-block text-[14px]  font-bold font-mulish capitalize"
                  }
                >
                  {type}
                </Heading>
              )}
            <Wrapper
              className={
                "max-md:flex max-md:flex-col max-md:items-center"}               
            >           

              <Heading headingStyle="h3Class" className="mt-[8px] mb-[0px] max-md:text-center max-sm:text-[20px] !text-[22px]">
                {heading1}
              </Heading>
              <Text>{text1}</Text>
            </Wrapper>
          </Wrapper>


            </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
}


