import Wrapper from "@/app/components/UI/Wrapper/Wrapper";
import Heading from "../../components/UI/Heading/Heading";
import Text from "@/app/components/UI/Text/Text";
import ContactForm from "@/app/components/Form/ContactForm/ContactForm";
import Container from "@/app/components/UI/Container/Container";
import { MultiColumnCard } from "../why-ride-with-ruvo/page";
import NavButton from "@/app/components/UI/NavButton/NavButton";

export const metadata = {
  title: "Investor Information",
  description: `As you delve into the Ruvo story, you’re engaging with more than a
  service. Ruvo is a catalyst for change in urban transportation, a
  champion for sustainability, and a community where every journey is
  meaningful. Our name, Ruvo, is a vow to our drivers, our riders, and
  to the environment.`,
};


export default function InvestorInformation() {
  return (
<>
  <Wrapper className="bg-c-green-100 py-8">
    <Container>
      <Wrapper className="flex items-center justify-between gap-x-12  gap-y-7 max-smlg:flex-col">
        <Wrapper className="flex-[30%]">
          <Heading headingStyle="h1" className="">
            {" "}
            Investor Information
          </Heading>
        </Wrapper>
        <Wrapper className="flex-[70%] flex gap-6 max-sm:flex-col">
          <MultiColumnCard heading="The Opportunity with Ruvo">
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
          </MultiColumnCard>
        </Wrapper>
      </Wrapper>
    </Container>
  </Wrapper>

  <Wrapper className=" py-8">
    <Container>
      <Wrapper className="flex flex-wrap gap-6  max-md:grid-cols-2 max-sm:grid-cols-1 justify-center">
        <MultiColumnCard
          className="w-[calc(33%-16px)] !flex-none max-md:w-[calc(50%-12px)] max-sm:w-full"
          heading="Market Potential"
        >
          As cities pivot towards greener initiatives, Ruvo is strategically
          positioned to capitalize on a significant shift in consumer behavior.
          With governments worldwide incentivizing electric vehicles and smart
          city solutions, Ruvo’s timing couldn't be better to seize a
          substantial market share in the sustainable ride-hailing sector.
        </MultiColumnCard>
        <MultiColumnCard
          className="w-[calc(33%-16px)] !flex-none max-md:w-[calc(50%-12px)] max-sm:w-full"
          heading="Growth Plans"
        >
          Ruvo's expansion blueprint is strategically phased to maximize market
          penetration and operational scalability.
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
              Expand internationally, adapting our model to local regulations
              and cultural landscapes.
            </li>
          </ul>
        </MultiColumnCard>
        <MultiColumnCard
          className="w-[calc(33%-16px)] !flex-none max-md:w-[calc(50%-12px)] max-sm:w-full"
          heading="Business model viability"
        >
          Our dual revenue stream – combining subscription services with
          on-demand ride fees – ensures a steady cash flow, while our
          no-commission stance presents an unbeatable proposition for drivers.
          Ruvo's model is built for resilience, with diversification strategies
          to weather market shifts and fuel sustainable growth.
        </MultiColumnCard>
      </Wrapper>
    </Container>
  </Wrapper>
  <Wrapper className="bg-c-green-100 py-6 max-sm:px-[20px]">
    <Heading headingStyle="h3Class" className="text-center mb-4  ">
      Join the Journey
    </Heading>
    <Text className=" max-w-3xl mx-auto text-center">
      Your investment can drive the next phase of Ruvo's journey. As an investor
      in Ruvo, you will fuel innovation in a company that prioritizes the planet
      and its people. Together, we can steer towards a cleaner, greener future.
    </Text>
    <Wrapper className="max-w-[220px] mx-auto flex gap-x-[25px] mt-4">
      <NavButton
        link="mailto:investor.relations@myruvo.com"
        color="orange"
        type="solid"
      >
        Contact us
      </NavButton>
    </Wrapper>
  </Wrapper>
</>
  );
}
