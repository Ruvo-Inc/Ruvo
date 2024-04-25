"use client";
import BannerImage from "../../assets/images/banner.png";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import Heading from "../../components/UI/Heading/Heading";
import Hero from "../../components/UI/Hero/Hero";
import Text from "@/app/components/UI/Text/Text";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
function AboutUs() {
  useEffect(() => {
    const panels = gsap.utils.toArray(".the-text-animation span");
    console.log(panels);
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
        <Heading headingStyle="h1" className="text-center text-white">
          {" "}
          About Us
        </Heading>
        <Text className="text-center text-white text-sm max-w-[676px] mx-auto mt-[10px] text-[24px] leading-[1.5] tracking-[0.5px]">
          At Ruvo, our essence and ethos are encapsulated in our name, a
          testament to our commitment and vision for a sustainable future.
          "Ruvo" is not just a label; it's the very heart of our mission,
          reflecting our drive for innovation and a greener tomorrow.
        </Text>
      </Hero>

      <Wrapper className="relative py-[85px] px-[60px] max-md:px-5 max-md:py-[50px] flex gap-x-[35px] justify-between bg-[#FBF7F6] max-smlg:max-w-full gap-y-5 max-smlg:flex-col">
        <Wrapper className="flex-1 ">
          <Heading headingStyle="h2" className="text-[60px] sticky top-[150px]">
            Essence Behind Ruvo
          </Heading>
        </Wrapper>
        <Wrapper className="w-full max-w-[1003px] min-5xl:max-w-[70%] max-3xlsm:max-w-[60%] max-smlg:max-w-full">
          <Text className="text-[30px]">
            <span className="text-[#D32D08]">
              {" "}
              The "Ru" in Ruvo pays homage to Rudolph, a symbol of navigating
              through uncharted territories with resilience and grace.
            </span>{" "}
            It’s a subtle nod to "Route" and "Revolution," signifying our
            commitment to carving new paths in urban mobility and initiating a
            meaningful shift in how ride-hailing integrates with our
            environmental and social fabric. Rudolph's journey, characterized by
            overcoming challenges with uniqueness and leading the way, mirrors
            our endeavor to lead the mobility world towards sustainability and
            fairness.  <br /> <br />
            The "u" stands at the core of Ruvo, symbolizing the bridge we are
            building. It connects people, places, and possibilities, weaving
            together a tapestry of shared experiences and collective ambitions
            towards a healthier planet.
          </Text>
        </Wrapper>
      </Wrapper>

      <Wrapper className="px-[60px] py-[84px] max-md:px-5 max-md:py-[50px] about-bg flex gap-x-[76px] justify-between max-smlg:flex-col gap-y-5">
        <Wrapper className="">
          <Heading
            headingStyle="h2Class"
            className="text-white sticky top-[150px]"
          >
            Our Pledge to You
          </Heading>
        </Wrapper>
        <Text className="text-white max-w-[1003px] min-5xl:max-w-[70%]  max-3xlsm:max-w-[60%] max-smlg:max-w-full  text-[30px] leading-[1.5] ">
          As you delve into the Ruvo story, you’re engaging with more than a
          service. Ruvo is a catalyst for change in urban transportation, a
          champion for sustainability, and a community where every journey is
          meaningful. Our name, Ruvo, is a vow to our drivers, our riders, and
          to the environment.
          <br /> <br />
          We invite you to join us on this remarkable journey. Together, let's
          pioneer a future where every trip is a commitment to innovation,
          community, and the pursuit of a better, greener world. With Ruvo,
          every journey is an opportunity to make a lasting difference.
        </Text>
      </Wrapper>

      <Wrapper className="flex max-md:px-5 py-[50px] min-smlg:py-[85px] px-[60px] max-smlg:flex-col max-smlg:gap-5 justify-between bg-[#FBF7F6]">
        <Wrapper>
          <Wrapper className="sticky top-[150px]">
            <Heading headingStyle="h2Class">Mission & Vision</Heading>
            <Text className="mt-[29px] text-[36px] text-c-gray-500 !font-black max-w-[420px]">
              Energizing Every Move: Ruvo's Commitment to Tomorrow's Transport
            </Text>
          </Wrapper>
        </Wrapper>
        <Wrapper className="max-w-[1003px] min-5xl:max-w-[70%]  max-3xlsm:max-w-[60%] w-full max-smlg:max-w-full the-text-animation max-xl:flex-1 max-3xl:max-w-[700px]">
        <Text className="text-c-gray-600  text-[30px] leading-[1.5] ">
            <Heading headingStyle="span">
              At Ruvo, we’re forging the pathways of tomorrow by redefining
              mobility today.{" "}
            </Heading>
            <Heading headingStyle="span">
              Our mission is to create a world where movement is not only
              possible for all but also propels us toward a greener, more
              connected future.
            </Heading>
            <Heading headingStyle="span">
              With every innovation, with every mile, we are committed to
              providing services that enhance lives,
            </Heading>
            <Heading headingStyle="span">
              protect the environment, and bolster communities.
            </Heading>
            <br /> <br />
            <Heading headingStyle="span">
              We envision a future where our all-electric fleet becomes the
              heartbeat of urban transit,{" "}
            </Heading>
            <Heading headingStyle="span">
              empowering riders with smooth, reliable journeys, and offering
              drivers dignified,{" "}
            </Heading>
            <Heading headingStyle="span">
              rewarding opportunities. Ruvo is more than a service; it’s a
              commitment to equity,{" "}
            </Heading>
            <Heading headingStyle="span">
              a pledge to sustainability, and a partnership with cities to
              nurture growth and foster progress.
            </Heading>
            <br /> <br />
            <Heading headingStyle="span">
              As we navigate the road ahead, we are propelled by the promise of
              technology to bridge gaps{" "}
            </Heading>
            <Heading headingStyle="span">
              {" "}
              and by the spirit of resilience to overcome challenges. We are
              advocates for change, champions{" "}
            </Heading>
            <Heading headingStyle="span">
              {" "}
              for inclusivity, and stewards of the planet. Our goal is not just
              to move people from point A to B{" "}
            </Heading>
            <Heading headingStyle="span">
              {" "}
              but to be a catalyst for a transportation revolution that elevates
              quality of life and reimagines what’s possible.
            </Heading>
            <br /> <br />
            <Heading headingStyle="span">
              Join us on this journey as we harness the power of connection,
              celebrate the spirit of community,{" "}
            </Heading>
            <Heading headingStyle="span">
              {" "}
              and steer a course to a thriving, more accessible world for
              generations to come. This is Ruvo – where every{" "}
            </Heading>
            <Heading headingStyle="span">
              {" "}
              journey matters and every destination is a step toward a brighter,
              cleaner, and more inclusive world.
            </Heading>
          </Text>
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default AboutUs;
