import Wrapper from "../../components/UI/Wrapper/Wrapper";
import Heading from "../../components/UI/Heading/Heading";
import Text from "@/app/components/UI/Text/Text";
import "./style.css";
import { ValuesCulture } from "@/app/data/Menu";
import Link from "next/link";
import Container from "@/app/components/UI/Container/Container";
import { StickyHeading } from "../sustainability/page";
import { MultiColumnCard } from "../why-ride-with-ruvo/page";


export const metadata = {
  title: "About us",
  description: `At Ruvo, our essence and ethos are encapsulated in our name, a
                testament to our commitment and vision for a sustainable future.
                "Ruvo" is not just a label; it's the very heart of our mission,
                reflecting our drive for innovation and a greener tomorrow.`,
};


function AboutUs() {

  return (
    <>

      <Wrapper className='bg-c-green-100 py-8'>
        <Container>
          <Wrapper className='flex items-center justify-between gap-x-12  gap-y-7 max-smlg:flex-col'>
            <Wrapper className='flex-[30%]'>
              <Heading headingStyle="h1" className="">
                {" "}
                About us
              </Heading>
              <Text className="max-w-[676px] mx-auto mt-[10px]">
                At Ruvo, our essence and ethos are encapsulated in our name, a
                testament to our commitment and vision for a sustainable future.
                "Ruvo" is not just a label; it's the very heart of our mission,
                reflecting our drive for innovation and a greener tomorrow.
              </Text>
            </Wrapper>
            <Wrapper className='flex-[70%] flex gap-6 max-sm:flex-col'>

              <StickyHeading
                className='about-bg max-w-[1920px] mx-auto rounded-lg'
                heading=' Our pledge to you'
                mode="light"
              > As you delve into the Ruvo story, you’re engaging with more than a
                service. Ruvo is a catalyst for change in urban transportation, a
                champion for sustainability, and a community where every journey is
                meaningful. Our name, Ruvo, is a vow to our drivers, our riders, and
                to the environment.
                <br /> <br />
                We invite you to join us on this remarkable journey. Together, let's
                pioneer a future where every trip is a commitment to innovation,
                community, and the pursuit of a better, greener world. With Ruvo,
                every journey is an opportunity to make a lasting difference.
              </StickyHeading>


            </Wrapper>
          </Wrapper>
        </Container>
      </Wrapper>

      <StickyHeading
        className='bg-white'
        heading='Essence behind ruvo'
      >
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
      </StickyHeading>


      <Wrapper className="flex  py-8  bg-c-green-100">
        <Container className=' flex gap-x-[30px] justify-between max-smlg:flex-col gap-y-5'>
          <Wrapper className=" w-full  the-text-animation ">
            <Heading headingStyle="h2Class" className='!text-[24px]'>Mission & vision</Heading>
            <Text className="mt-[10px] text-[18px] text-c-gray-500 !font-black mb-3">
              Energizing rvery move: Ruvo's commitment to tomorrow's transport
            </Text>
            <Text className="text-c-gray-600  text-[16px] leading-[1.5] ">
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
        </Container>
      </Wrapper>

      <StickyHeading
        className='about-bg-2 max-w-[1920px] mx-auto'
        heading=' A narrative of innovation and connection'
        mode="light-overlay"
      >  Ruvo transcends the conventional notions of movement. It embodies a
        journey of thought, innovation, and engagement with ride-hailing
        services. Our name speaks to a revolutionary ethos: redefining the
        principles of driver fairness, rider affordability, and unwavering
        environmental stewardship.
        <br /> <br />
        Each ride with Ruvo is part of a larger narrative — a step towards
        diminishing our carbon footprint, ensuring drivers are valued and
        fairly compensated, and providing riders with accessible,
        environmentally friendly transportation alternatives. This journey is
        not just about the destinations we reach but about the positive impact
        we create along the way.

      </StickyHeading>

      <Wrapper className="flex py-8  bg-white">
        <Container className=' flex gap-x-[30px] justify-between max-smlg:flex-col gap-y-5 w-full'>
          <Wrapper className=" flex flex-col gap-4  w-full">
            <Heading headingStyle="h2Class" className='!text-[24px]'>Values & culture</Heading>
            <Wrapper className='flex flex-wrap gap-6   justify-center'>
              {Object.entries(ValuesCulture).map(([key, item]) => (
                <MultiColumnCard key={key}
                  className="w-[calc(33%-16px)] !flex-none max-md:w-[calc(50%-12px)] max-sm:w-full"
                  heading={item.heading}
                  text={item.text}
                />
              ))}
            </Wrapper>
          </Wrapper>
        </Container>
      </Wrapper>
      <Wrapper className="bg-c-green-100 py-4 max-sm:px-[20px]">
        <Heading
          headingStyle="h3Class"
          className="text-center mb-4  "
        >
          Join the Ruvo family
        </Heading>
        <Text className=" max-w-3xl mx-auto text-center">
          At Ruvo, we are not just coworkers; we're family, united by shared goals and mutual respect. If these values speak to you, we welcome you to join us on this exhilarating ride. Write to us at
          <Link href='mailto:careers@myruvo.com'> careers@myruvo.com</Link>
        </Text>
      </Wrapper>
    </>
  );
}

export default AboutUs;
