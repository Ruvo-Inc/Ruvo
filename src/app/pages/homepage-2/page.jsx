import './style.css';
import Element from "@/app/components/UI/Element/Element";
import Group from "../../assets/images/Group-.png";
import Wrapper from "@/app/components/UI/Wrapper/Wrapper";
import Heading from "@/app/components/UI/Heading/Heading";
import NavButton from "@/app/components/UI/NavButton/NavButton";
import ImageWithText from "@/app/components/UI/ImageWithText/ImageWithText";
import ImageGirl from "../../assets/images/image-girl.png";
import WhyRuvo from "@/app/components/Sections/Home/WhyRuvo";
import HowRuvoWorks from "@/app/components/Sections/Home/HowRuvoWorks";
import Image from 'next/image';
function page() {
  return (
    <div>
      <Element tag="section" className="relative w-full overflow-hidden">

               
        <Wrapper className="max-md:static  absolute top-[210px]  max-tab:top-[12%]  max-4xl:top-[11vw] text-center w-full max-xl:px-5 max-md:px-0 flex flex-col gap-[30px] max-sm:gap-[20px] z-[2] max-4xl:w-full max-xl:top-[25%]" animation='fade-up' delay={500}>
        <Wrapper className='max-md:bg-[#bdd6ff] max-md:pt-[80px]'>
        <Heading
            headingStyle="h1Class"
            className="!text-[#3479E0] text-center max-xl:whitespace-normal whitespace-nowrap home-banner-heading max-sm:!text-[30px] max-xl:!text-[44px]  max-tab:!text-[40px]"
          >
           Empower Your Journey With RuVO
          </Heading>
          <Heading
            headingStyle="h1Class"
            className="!text-[#3479E0] text-stroke z-[-1] text-center max-xl:whitespace-normal whitespace-nowrap max-sm:!text-[30px] max-xl:!text-[44px]  max-tab:!text-[40px] home-banner-heading absolute left-0 top-0 w-full max-xl:px-5"
          >
           Empower Your Journey With RuVO
          </Heading>
          </Wrapper> 
        </Wrapper>
        <Image
          src={Group.src}
          alt="hero-image"
          className="object-cover"
          data-aos="zoom-out"
          data-aos-duration="800"
          width={Group.width} height={Group.height}
        />
        <Wrapper className=" bg-[#e1ffff] pb-5 w-full  max-md:px-5 mx-auto flex flex-col gap-[30px] max-sm:gap-[20px] z-[2] max-4xl:w-full" >
        <Wrapper animation='fade-up' delay={600}> <Heading
            headingStyle="h3Class"
            className="font-mulish max-w-[1349px] w-full mx-auto text-[#3479E0] text-center  max-md:!text-[18px] max-sm:text-[14px] max-xs:text-[12px] "
          >
            Experience the future of urban mobility with Ruvo’s all-electric,
            community-driven ride-hailing service.
          </Heading>
          </Wrapper>
          <Wrapper className="max-w-[428px] whitespace-nowrap mx-auto flex gap-x-[25px] max-sm:gap-x-[15px]" animation='fade-up' delay={700}>
            <NavButton link="/" color="salmon" type="solid">
              APPLY TO DRIVE
            </NavButton>
            <NavButton link="/" color="salmon" type="outlined">
              Sign up to Ride
            </NavButton>
          </Wrapper>
        </Wrapper>
      </Element>
      <Wrapper className="overflow-hidden relative py-[100px] px-[124px] max-2xl:py-[50px] max-2xl:px-[40px] max-sm:px-5 max-sm:py-[50px]">
        <ImageWithText
          image={ImageGirl}
          imagePostion="right"
          heading="Embrace the future with every ride"
          imageClassName=" mix-blend-multiply animate-spin2"
          anchor="section-2"
        >
          <Heading
            headingStyle="span"
            className="max-w-[631px] block sm:mt-[38px]"
          >
            In an urban landscape thirsty for change, Ruvo emerges as a beacon
            of sustainable mobility. Our mission? To transform urban
            transportation through an innovative ride-hailing service powered
            entirely by electric vehicles. We&apos;re not just another option; we&apos;re
            the alternative paving the way to a greener, cleaner future.The
            movement begins with our Partners and Guests, one ride at a time.
            <br />
            <br />
            At Ruvo, drivers and riders are more than just terms—we call them
            Partners and Guests. This reflects our deep commitment to respect
            and collaboration, propelling our mission forward. Together, we are
            integral to a movement that cherishes our community and protects our
            planet.
          </Heading>
        </ImageWithText>
      </Wrapper>
      <WhyRuvo />
      <div id="ruvo">
        <Wrapper
          className="overflow-hidden bg-white py-[44px] max-md:py-[20px]"
          anchor={"#ruvo"}
          animation={"fade-up"}
          delay={100}
        >
          <Heading
            className="max-md:px-5 text-center max-md:!text-[22px]"
            headingStyle="h2Class"
          >
            Ruvo — Where Every Journey Matters, Every Choice Counts
          </Heading>
        </Wrapper>
      </div>
      <HowRuvoWorks />
      <Wrapper className="py-[60px] bg-c-salmon-100 max-smlg:pt-[50px] max-smlg:pb-[50px]  max-sm:px-[20px]">
        <Heading headingStyle="h2Class" className="text-center mb-[16px]">
          Ready to Ride the Change?
        </Heading>

        <Wrapper className="max-w-[428px] mx-auto flex gap-x-[25px] mt-[35px]">
          <NavButton link="/" color="green" type="solid">
            Be a Partner
          </NavButton>
          <NavButton link="/" color="green" type="outlined">
             Be our Guest
          </NavButton>
        </Wrapper>
      </Wrapper>
    </div>
  );
}

export default page;
