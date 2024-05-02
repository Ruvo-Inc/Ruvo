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
import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useThemeConfig } from "@/app/contexts/ThemeConfig/ThemeConfig";

const HomePageContent = () => {
  const [apply, setApply] = useState(false);
  const applyRef = useRef();
  const hash = useSearchParams();
  const {formActive,formActiveTerm, setFormActiveTerm, setFormActive} = useThemeConfig();
  const getApply = (e) => {
    setApply(true);
    setTimeout(() => {
      applyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };
  useEffect(() => {
    hash.get("form") === "1" ? setApply(true) : setApply(false);
    setTimeout(() => {
      hash.get("form") === "1"
        ? applyRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
        : "";
    }, 100);
  }, [hash]);
  useEffect(()=>{   
    formActiveTerm === true ?   setApply(formActiveTerm) : ''
    formActive === true && formActiveTerm === true ?   setFormActive(false) : ''
  },[formActiveTerm])
  useEffect(()=>{   
    formActive === true ?   setApply(formActive) : ''   
    formActiveTerm === true && formActive === true  ?   setFormActiveTerm(false) : ''   
  },[formActive])
  return (
    <>
      <div className="overflow-hidden">
        <div data-aos="zoom-out" data-aos-duration="800">
          <Element tag="section" className="relative w-full overflow-hidden bg-c-green-100 py-8">
            <Container>
              <ImageText
                heading="Empower Your Journey, Your Way"
                image={Banner}
                imagePostion="left"
              >
                <Text>
                  At Ruvo, we're driven by the belief that better choices lead to better lives.
                  That’s why we’re launching the first all-electric ride-hailing marketplace that
                  not only offers a greener way to travel but empowers our community to choose how
                  they move, work, and thrive. Every journey with us is a step towards a sustainable
                  future, fueled by innovation and driven by the power of choice. Join us as we
                  transform urban mobility and create opportunities that matter—for our planet, our
                  riders, and our drivers.
                </Text>
                <Wrapper className="max-w-[448px] flex gap-x-3 mt-4 max-sm:gap-x-[15px]">
                  <Button
                    event={getApply}
                    color="orange"
                    btnType="solid"
                    type="button"
                    label="Apply to drive"
                    additionalCss="max-sm:!px-0"
                  />
                  <Button
                    event={getApply}
                    color="orange"
                    additionalCss="max-sm:!px-0"
                    btnType="outlined"
                    type="button"
                    label=" Sign up to ride"
                  />
                </Wrapper>
              </ImageText>
            </Container>
          </Element>
        </div>
      </div>
      {apply && (
        <div ref={applyRef}>
          <ApplyForm />
        </div>
      )}

      <HowRuvoWorks />
      <Wrapper className="bg-c-green-100 py-4 max-sm:px-[20px]">
        <Heading headingStyle="h3Class" className="text-center mb-3 ">
          Ready to ride the change?
        </Heading>

        <Wrapper className="max-w-[428px] mx-auto flex gap-x-[25px] max-sm:gap-x-[15px]">
          <Button
            event={getApply}
            color="orange"
            btnType="solid"
            type="button"
            label="Apply to drive"
            additionalCss="max-sm:!px-0 "
          />
          <Button
            event={getApply}
            color="orange"
            additionalCss="max-sm:!px-0 "
            btnType="outlined"
            type="button"
            label="  Sign up to ride"
          />
        </Wrapper>
      </Wrapper>
      <WhyRuvo />
    </>
  );
};

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent />
    </Suspense>
  );
}
