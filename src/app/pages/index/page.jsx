"use client";
import "./style.css";
import Banner from "../../assets/images/Home/banner.webp";
import Element from "@/app/components/UI/Element/Element";
import Wrapper from "@/app/components/UI/Wrapper/Wrapper";
import Heading from "@/app/components/UI/Heading/Heading";
import NavButton from "@/app/components/UI/NavButton/NavButton";
import HowRuvoWorks from "@/app/components/Sections/Home/HowRuvoWorks";
import Container from "@/app/components/UI/Container/Container";
import ImageText from "@/app/components/UI/reusable-components/ImageText";
import WhyRuvo from "@/app/components/Sections/Home/WhyRuvo";
import ApplyForm from "@/app/components/Form/ApplyForm/ApplyForm";
import Text from "@/app/components/UI/Text/Text";
import Button from "@/app/components/Form/Button/Button";
import { useRef, useState } from "react";

export default function HomePage() {
  const [apply, setApply] = useState(false);
  const applyRef = useRef();
  const getApply = (e) => {
    setApply(true);
    setTimeout(() => {
      applyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };
  return (
    <>
      <div data-aos="zoom-out" data-aos-duration="800">
        <Element
          tag="section"
          className="relative w-full overflow-hidden bg-c-green-100 py-12"
        >
          <Container>
            <ImageText
              heading="Empower Your Journey, Your Way"
              image={Banner}
              imagePostion="left"
            >
              <Text>
                Ruvo isn’t just about moving people from place to place. We
                believe in empowering our community with choices that matter.
                Whether you're driving or riding, Ruvo puts you in control of
                how you travel, earn, and connect in a marketplace designed with
                everyone in mind.
              </Text>
              <Wrapper className="max-w-[448px] flex gap-x-6 mt-4 max-sm:gap-x-[15px]">
                <Button
                  event={getApply}
                  color="green"
                  btnType="solid"
                  type="button"
                  label="Apply to Drive"
                  additionalCss='max-sm:!px-0'
                />
                <Button
                  event={getApply}
                  color="green"
                  additionalCss='max-sm:!px-0'
                  btnType="outlined"
                  type="button"
                  label=" Sign up to Ride"
                />
              </Wrapper>
            </ImageText>
          </Container>
        </Element>
      </div>
      {apply && (
        <div ref={applyRef}>
          <ApplyForm />
        </div>
      )}

      <HowRuvoWorks />
      <Wrapper className="bg-primary py-[30px] max-sm:px-[20px]">
        <Heading
          headingStyle="h3Class"
          className="text-center mb-4 text-white "
        >
          Ready to Ride the Change?
        </Heading>

        <Wrapper className="max-w-[428px] mx-auto flex gap-x-[25px] max-sm:gap-x-[15px]">
        <Button
                  event={getApply}
                  color="green"
                  btnType="solid"
                  type="button"
                  label=" Drive With Us"
                  additionalCss='max-sm:!px-0'
                />
                <Button
                  event={getApply}
                  color="green"
                  additionalCss='max-sm:!px-0'
                  btnType="solid"
                  type="button"
                  label="  Ride with Us"
                />
         
        </Wrapper>
      </Wrapper>
      <WhyRuvo />
    </>
  );
}
