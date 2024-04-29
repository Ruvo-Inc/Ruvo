'use client'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import Heading from "../../UI/Heading/Heading";
import Text from "../../UI/Text/Text";
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
   
<Wrapper className=" relative overflow-hidden max-md:py-[50px] py-12 max-md:px-5 the-gradient">
  <Heading
    headingStyle="h3Class"
    className="text-primary text-center max-smlg:!text-[24px] !text-[48px]"
  >
    How Ruvo works
  </Heading>
  <Wrapper className="the-trigger-point relative overflow-hidden mt-[47px] max-md:mt-[0px]">
    <div className="w-[1px] bg-c-gray-400 left-1/2 translate-x-[-50%] absolute theBar top-[30px] max-md:top-[40px] h-0 " ref={bar}></div>

    <Card
      postion="right"
      heading="Select your Destination"
      text="You can schedule rides without fees"
      index={1}
      type="rider"
    />
    <Card
      postion="left"
      heading="Select a driver"
      text="You have a choice"
      index={2}
      type="rider"
    />
    <Card
      postion="right"
      heading="Accept or Decline Guest"
      text="You have a choice too"
      index={3}
      type="driver"
    />
    <Card
      postion="left"
      heading="Travel with Confidence"
      text="We’ve got your back"
      index={4}
      type="blank"
    />
    <Card
      postion="right"
      heading="Arrive at the destination"
      text="Notify us when the trip has ended"
      index={5}
      type="driver"
    />
    <Card
      postion="left"
      heading="Save your preferences"
      text="Build your driver list to reference on future rides"
      index={6}
      type="rider"
    />
    <Card
      postion="right"
      heading="Rate your travel"
      text="Ruvo’s AI will learn from every ride"
      index={7}
      type="blank"
    />
    <Card
      postion="left"
      heading="See the impact we made"
      text="Track your carbon offset"
      index={8}
      type="both"
    />
  </Wrapper>
</Wrapper>
  );
}

export default HowRuvoWorks;
export function Card({ postion, index, heading, text, type }) {
  return (
    <>
      <Wrapper className={ `makes-text relative makes-text-${index}` }>
        <Wrapper className="flex py-[30px] gap-[109px]">
          {postion === "right" && (
            <Wrapper className="flex-1 max-md:hidden"></Wrapper>
          )}
          <Wrapper className="flex-1 relative pt-[10px]">
            <Heading
              headingStyle="empty"
              className={
                `${postion === "left" ? " right-[-83px]" : " left-[-83px]"}` +
                `${type === "blank" ? " top-[0]" : " top-[0px]"}` +                
                `${type === "rider" ? " bg-rider" : ""} ${
                  type === "driver" ? " bg-driver" : ""
                } ${
                  type === "both" ? " bg-rider border-[5px] border-driver" : ""
                } ${type === "blank" ? " bg-primary " : ""}` +
                " max-md:static max-md:mb-3 max-md:mx-auto number  text-white absolute  text-[20px] font-medium font-Mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[16px]"
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
                    `${type === "rider" ? " bg-rider" : ""} ${
                      type === "driver" ? " bg-driver" : ""
                    }  ${type === "blank" ? " bg-primary " : ""}` +
                    "text-white rounded-[5px] py-[5px] px-[18px] inline-block text-[16px] uppercase font-bold font-mulish"
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
                      `bg-rider ` +
                      "text-white  rounded-[5px] py-[5px] px-[18px] inline-block text-[16px] uppercase font-bold font-mulish"
                    }
                  >
                    rider
                  </Heading>
                  <Heading
                    headingStyle="empty"
                    className={
                      `bg-driver ` +
                      "text-white rounded-[5px] py-[5px] px-[18px] inline-block text-[16px] uppercase font-bold font-mulish"
                    }
                  >
                    driver
                  </Heading>
                </Wrapper>
              )}

              <Heading headingStyle="h3Class" className="mt-[8px] mb-[11px] max-md:text-center max-sm:text-[20px]">
                {heading}
              </Heading>
              <Text>{text}</Text>
            </Wrapper>
          </Wrapper>
          {postion === "left" && (
            <Wrapper className="flex-1 max-md:hidden"></Wrapper>
          )}
        </Wrapper>
      </Wrapper>
    </>
  );
}


