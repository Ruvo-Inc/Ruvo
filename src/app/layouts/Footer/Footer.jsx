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
 
const Footer = () => {
  return (
    <Element
      tag="footer"
      className="bg-[#155C27] pt-[39px] pl-[26px] pr-[29px] pb-12 max-sm:py-[40px] max-sm:px-[20px] flex justify-between max-smlg:flex-col max-smlg:gap-4"
    >
      <Wrapper className="max-w-[162.16px] max-xl:max-w-[130.16px]">
        <Logo mode="light" />
      </Wrapper>
      <Wrapper className="flex flex-wrap justify-between xl:justify-start 2xl:mt-0 mt-[20px] xl:gap-x-[99px] gap-[32px] max-sm:flex-col">
        <Wrapper >
          <Heading
            headingStyle="empty"
            className="font-bold max-md:mb-[10px] mb-[15px] 2xl:text-[24px] text-[18px] text-white"
            text="DISCOVER RUVO"
          ></Heading>
          <Navigation linkList={footerMenu1} />
        </Wrapper>
        <Wrapper >
          <Heading
            headingStyle="empty"
            className="font-bold max-md:mb-[10px] mb-[15px] 2xl:text-[24px] text-[18px] text-white"
            text="Investor Information"
          ></Heading>
          <Navigation linkList={footerMenu2} />
        </Wrapper>
        <Wrapper >
          <Heading
            headingStyle="empty"
            className="font-bold max-md:mb-[10px] mb-[15px] font-Mulish 2xl:text-[24px] text-[18px] text-white"
            text="CONTACT US"
          ></Heading>
          <Navigation linkList={footerMenu3} />
          <NavButton
            link="mailto:email@ruvo.com"
            type="nav"
            additionalCss="flex items-center font-Mulish gap-[10px] text-white font-poppins"
          >
            <Icon size="24px" type="email" colorClass="fill-white" />
            info@myruvo.com
          </NavButton>
        </Wrapper>
        <Wrapper>
          <Heading
            headingStyle="empty"
            className="font-bold  font-Mulish 2xl:text-[24px] max-md:mb-[10px] mb-[15px] text-[18px] text-white"
            text="  BE THE FIRST TO KNOW"
          ></Heading>
 
          <Wrapper className="flex gap-x-[15px]">
            <a href="/" target="_blank">
              <div className="border border-solid border-white rounded-3xl hover:bg-[white]  hover:text-[green]  hover:scale-125 hover:delay-150 transition-all duration-300 2xl:p-[12px] p-[5px] text-[white] ">
                <FaFacebookF />
              </div>
            </a>
            <a href="/" target="_blank">
              <div className="border border-solid border-white rounded-3xl hover:bg-[white]  hover:text-[green]  hover:scale-125 hover:delay-150 transition-all duration-300     2xl:p-[12px] p-[5px] text-[white] ">
                <PiInstagramLogo />
              </div>
            </a>
 
            <a href="/" target="_blank">
              <div className="border border-solid border-white rounded-3xl hover:bg-[white]  hover:text-[green]  hover:scale-125 hover:delay-150 transition-all duration-300   2xl:p-[12px] p-[5px] text-[white] ">
                <AiFillYoutube />
              </div>
            </a>
            <a href="/" target="_blank">
              <div className="border border-solid border-white rounded-3xl  hover:bg-[white]  hover:text-[green]  hover:scale-125 hover:delay-150 ttransition-all duration-300   2xl:p-[12px] p-[5px] text-[white] ">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="/" target="_blank">
              <div className="border border-solid border-white rounded-3xl hover:bg-[white]  hover:text-[green]  hover:scale-125 hover:delay-150 transition-all duration-300 2xl:p-[12px] p-[5px] text-[white] ">
                <FaXTwitter />
              </div>
            </a>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Element>
  );
};
 
export default Footer;