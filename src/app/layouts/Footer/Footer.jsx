import "./style.css";
import Element from "@/app/components/UI/Element/Element";
import Logo from "@/app/components/UI/SiteLogo/Logo";
import Navigation from "@/app/components/UI/Navigation/Navigation";
import Wrapper from "@/app/components/UI/Wrapper/Wrapper";
import { footerMenu1, footerMenu2, footerMenu3 } from "@/app/data/Menu";
import NavButton from "@/app/components/UI/NavButton/NavButton";
import Icon from "@/app/components/UI/Icons/Icon";
import { AiFillYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Heading from "@/app/components/UI/Heading/Heading";
import { FaFacebookF } from "react-icons/fa6";
import { PiInstagramLogo } from "react-icons/pi"; 
import Text from "@/app/components/UI/Text/Text";
import Container from "@/app/components/UI/Container/Container";
 
const Footer = () => {
  return (
    <Element
      tag="footer"
      className="bg-c-gray-600 pt-8"
    >
      <Container>
      <Wrapper className=' flex justify-between max-smlg:flex-col max-smlg:gap-4 pb-12'>
      <Wrapper>
      <Wrapper className="max-w-[75px]">
        <Logo mode="light" />
        </Wrapper>
        <Wrapper className="flex gap-x-[15px] mt-5 max-sm:mt-4">
            <a href="https://www.facebook.com/profile.php?id=61558694012933" target="_blank">
              <div className="border border-solid border-white rounded-3xl hover:bg-[white]  hover:text-[green]  hover:scale-125 hover:delay-150 transition-all duration-300 2xl:p-[13px] p-[11px] text-[white] ">
                <FaFacebookF />
              </div>
            </a>
            <a href="https://www.instagram.com/ruvo_usa/" target="_blank">
              <div className="border border-solid border-white rounded-3xl hover:bg-[white]  hover:text-[green]  hover:scale-125 hover:delay-150 transition-all duration-300     2xl:p-[13px] p-[11px] text-[white] ">
                <PiInstagramLogo />
              </div>
            </a>
 
            <a href="/" target="_blank">
              <div className="border border-solid border-white rounded-3xl hover:bg-[white]  hover:text-[green]  hover:scale-125 hover:delay-150 transition-all duration-300   2xl:p-[13px] p-[11px] text-[white] ">
                <AiFillYoutube />
              </div>
            </a>
            <a href="https://www.linkedin.com/company/ruvo-com/" target="_blank">
              <div className="border border-solid border-white rounded-3xl  hover:bg-[white]  hover:text-[green]  hover:scale-125 hover:delay-150 ttransition-all duration-300   2xl:p-[13px] p-[11px] text-[white] ">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://twitter.com/Ruvo_X" target="_blank">
              <div className="border border-solid border-white rounded-3xl hover:bg-[white]  hover:text-[green]  hover:scale-125 hover:delay-150 transition-all duration-300 2xl:p-[13px] p-[11px] text-[white] ">
                <FaXTwitter />
              </div>
            </a>
          </Wrapper>
      </Wrapper>
      <Wrapper className="flex flex-wrap justify-between xl:justify-start xl:gap-x-[99px] gap-[32px] max-sm:flex-col">
        <Wrapper >
          <Heading
            headingStyle="empty"
            className="font-bold max-md:mb-[10px] mb-[15px] 2xl:text-[24px] text-[18px] text-white"
            text="Discover Ruvo"
          ></Heading>
          <Navigation linkList={footerMenu1} />
        </Wrapper>
        <Wrapper >
          <Heading
            headingStyle="empty"
            className="font-bold max-md:mb-[10px] mb-[15px] 2xl:text-[24px] text-[18px] text-white"
            text="Legal & Corporate"
          ></Heading>
          <Navigation linkList={footerMenu2} />
        </Wrapper>
        <Wrapper >
          <Heading
            headingStyle="empty"
            className="font-bold max-md:mb-[10px] mb-[15px] font-mulish 2xl:text-[24px] text-[18px] text-white"
            text="Contact us"
          ></Heading>
          <Navigation linkList={footerMenu3} />
          <NavButton
            link="mailto:email@ruvo.com"
            type="nav"
            additionalCss="flex items-center font-mulish gap-[10px] text-white font-poppins"
          >
            <Icon size="24px" type="email" colorClass="fill-white" />
            info@myruvo.com
          </NavButton>
        </Wrapper>
      </Wrapper>
      </Wrapper>
      </Container>
      <Wrapper className='border-t border-c-green-100 py-2 border-opacity-50'>
      <Text className='text-center text-white text-[14px]'>
      © 2024 RUVO
      </Text>
      </Wrapper>
    </Element>
  );
};
 
export default Footer;