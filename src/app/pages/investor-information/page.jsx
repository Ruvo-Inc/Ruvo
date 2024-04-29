"use client";
import Wrapper from "@/app/components/UI/Wrapper/Wrapper";
import GroupImage from "../../assets/images/Group.png";
import Heading from "../../components/UI/Heading/Heading";
import Hero from "../../components/UI/Hero/Hero";
import Text from "@/app/components/UI/Text/Text";
import ContactForm from "@/app/components/Form/ContactForm/ContactForm";
import Container from "@/app/components/UI/Container/Container";
export default function InvestorInformation() {
  return (
    <>
      <Hero img={GroupImage}>
        <Heading headingStyle="h1" className="text-center text-white">
          {" "}
          Investor Information
        </Heading>
      </Hero>
      <Wrapper className="relative py-[85px]  max-md:py-[50px] bg-[#FBF7F6] max-smlg:max-w-full">
        <Container className=" flex gap-x-[30px] justify-between max-smlg:flex-col gap-y-5">
          <Wrapper className="flex-1 ">
            <Heading
              headingStyle="h2"
              className="!text-[32px] sticky top-[150px]"
            >
              The Opportunity with Ruvo
            </Heading>
          </Wrapper>
          <Wrapper className="w-full max-w-[855px] min-5xl:max-w-[70%] max-3xlsm:max-w-[60%] max-smlg:max-w-full">
            <Text className="text-[22px]">
              Embrace the Future of Sustainable Urban Mobility
              <br />
              <br />
              Ruvo is redefining the ride-hailing landscape with an
              eco-conscious business model poised for global impact. By
              integrating state-of-the-art technology with an all-electric
              fleet, we cater to a growing demographic that values environmental
              responsibility as much as convenience. Our mission is to
              facilitate clean, efficient, and affordable urban transportation
              that promotes sustainability and urban innovation.
            </Text>
          </Wrapper>
        </Container>
      </Wrapper>
      <Wrapper className="relative py-[85px]  max-md:py-[50px] bg-[white] max-smlg:max-w-full">
        <Container className=" flex gap-x-[30px] justify-between max-smlg:flex-col gap-y-5">
          <Wrapper className="flex-1 ">
            <Heading
              headingStyle="h2"
              className="!text-[32px] sticky top-[150px]"
            >
              Market Potential
            </Heading>
          </Wrapper>
          <Wrapper className="w-full max-w-[855px] min-5xl:max-w-[70%] max-3xlsm:max-w-[60%] max-smlg:max-w-full">
            <Text className="text-[22px]">
              As cities pivot towards greener initiatives, Ruvo is strategically
              positioned to capitalize on a significant shift in consumer
              behavior. With governments worldwide incentivizing electric
              vehicles and smart city solutions, Ruvo’s timing couldn't be
              better to seize a substantial market share in the sustainable
              ride-hailing sector.
            </Text>
          </Wrapper>
        </Container>
      </Wrapper>
      <Wrapper className="relative py-[85px]  max-md:py-[50px] bg-[#FBF7F6] max-smlg:max-w-full">
        <Container className=" flex gap-x-[30px] justify-between max-smlg:flex-col gap-y-5">
          <Wrapper className="flex-1 ">
            <Heading
              headingStyle="h2"
              className="!text-[32px] sticky top-[150px]"
            >
              Growth Plans
            </Heading>
          </Wrapper>
          <Wrapper className="w-full max-w-[855px] min-5xl:max-w-[70%] max-3xlsm:max-w-[60%] max-smlg:max-w-full">
            <Text className="text-[22px]">
              Ruvo's expansion blueprint is strategically phased to maximize
              market penetration and operational scalability.
              <br /> <br />
              We aim to:
              <ul className="list-disc pl-10">
                <li>
                  Launch in key metropolitan areas with high environmental index
                  scores.
                </li>
                <li>
                  Scale our platform through strategic partnerships with EV
                  manufacturers and urban developers.
                </li>
                <li>
                  Expand internationally, adapting our model to local
                  regulations and cultural landscapes.
                </li>
              </ul>
            </Text>
          </Wrapper>
        </Container>
      </Wrapper>
      <Wrapper className="relative py-[85px]  max-md:py-[50px] bg-[white] max-smlg:max-w-full">
        <Container className=" flex gap-x-[30px] justify-between max-smlg:flex-col gap-y-5">
          <Wrapper className="flex-1 ">
            <Heading
              headingStyle="h2"
              className="!text-[32px] sticky top-[150px]"
            >
              Business Model Viability
            </Heading>
          </Wrapper>
          <Wrapper className="w-full max-w-[855px] min-5xl:max-w-[70%] max-3xlsm:max-w-[60%] max-smlg:max-w-full">
            <Text className="text-[22px]">
              Our dual revenue stream – combining subscription services with
              on-demand ride fees – ensures a steady cash flow, while our
              no-commission stance presents an unbeatable proposition for
              drivers. Ruvo's model is built for resilience, with
              diversification strategies to weather market shifts and fuel
              sustainable growth.
            </Text>
          </Wrapper>
        </Container>
      </Wrapper>
      <Wrapper className="bg-primary py-[30px] max-sm:px-[20px]">
        <Heading
          headingStyle="h3Class"
          className="text-center mb-4 text-white "
        >
          Join the Journey
        </Heading>
        <Text className="text-white max-w-3xl mx-auto text-center">
          Your investment can drive the next phase of Ruvo's journey. As an
          investor in Ruvo, you will fuel innovation in a company that
          prioritizes the planet and its people. Together, we can steer towards
          a cleaner, greener future.
        </Text>
      </Wrapper>

      <Wrapper
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="300"
        className=" py-12  bg-c-salmon-100 "
      >
        <Container>
          <Wrapper className="flex border border-c-gray-400 rounded-[15px] relative max-smlg:flex-col bg-white">
            <Wrapper className="flex-1 flex justify-center  p-[21px] items-center">
              <Wrapper>
                <Heading headingStyle="h2Class">Connect with Us</Heading>
                <Text className="max-w-[617px] mt-[10px]">
                  {" "}
                  Please reach out through the contact form below or direct your
                  inquiries to investor.relations@myruvo.com.
                </Text>
              </Wrapper>
            </Wrapper>
            <Wrapper className="max-w-2xl w-full flex items-center justify-center">
              <Wrapper className="xl:px-[56px] xl:py-[57px] p-[30px] w-full max-sm:p-[20px]">
                <ContactForm />
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Container>
      </Wrapper>
    </>
  );
}
