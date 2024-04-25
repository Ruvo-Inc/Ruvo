'use client'
import Wrapper from "@/app/components/UI/Wrapper/Wrapper";
import GroupImage from "../../assets/images/Group.png";
import Heading from '../../components/UI/Heading/Heading';
import Hero from '../../components/UI/Hero/Hero';
import ImageText from "@/app/components/UI/reusable-components/ImageText";
import ImageCar from '@/app/assets/images/Inverstor/car.png'
import ImageStock from '@/app/assets/images/Inverstor/imageStock.png'
import ImageIstock from '@/app/assets/images/Inverstor/imageIstock.png'
import Text from "@/app/components/UI/Text/Text";
import ContactForm from "@/app/components/Form/ContactForm/ContactForm";
import NavButton from "@/app/components/UI/NavButton/NavButton";
import Icon from "@/app/components/UI/Icons/Icon";
export default function InvestorInformation() {
  return (
    <>

      <Hero img={GroupImage}>

        <Heading headingStyle='h1' className='text-center text-white'> Investor Information</Heading>

      </Hero>
      <Wrapper className='overflow-hidden relative'>
        <Heading headingStyle='span' className='bg-[#FBF7F6]' />
        <ImageText image={ImageCar} imagePostion='left' heading='The Opportunity with Ruvo'>
          <Heading headingStyle='span' className='max-w-[636px] block'>
            Embrace the Future of Sustainable Urban Mobility
            <br />
            <br />
            finding the ride-hailing landscape with an eco-conscious business model poised for global impact. By integrating state-of-the-art technology with an all-electric fleet, we cater to a growing demographic that values environmental responsibility as much as convenience. Our mission is to facilitate clean, efficient, and affordable urban transportation that promotes sustainability and urban innovation.
          </Heading>
        </ImageText>
      </Wrapper>

      <Wrapper className='overflow-hidden relative'>
        <Heading headingStyle='span' className='bg-[#FBF7F6]' />
        <ImageText image={ImageStock} imagePostion='right' heading='The Opportunity with Ruvo'>
          <Heading headingStyle='span' className='max-w-[636px] block'>
            Embrace the Future of Sustainable Urban Mobility
            <br />
            <br />
            finding the ride-hailing landscape with an eco-conscious business model poised for global impact. By integrating state-of-the-art technology with an all-electric fleet, we cater to a growing demographic that values environmental responsibility as much as convenience. Our mission is to facilitate clean, efficient, and affordable urban transportation that promotes sustainability and urban innovation.
          </Heading>
        </ImageText>
      </Wrapper>

      <Wrapper className='overflow-hidden relative'>
        <Heading headingStyle='span' className='bg-[#FBF7F6]' />
        <ImageText image={ImageIstock} imagePostion='left' heading='Growth Plans'>
          <Heading headingStyle='span' className='max-w-[636px] block'>


            Ruvo's expansion blueprint is strategically phased to maximize market penetration and operational scalability.
            <br />
            <br />
            We aim to:
            <ul className="pl-5 list-disc">
              <li>Launch in key metropolitan areas with high environmental index scores.</li><li>
                Scale our platform through strategic partnerships with EV manufacturers and urban developers.</li>
              <li>
                Expand internationally, adapting our model to local regulations and cultural landscapes.</li>
            </ul>
          </Heading>
        </ImageText>
      </Wrapper>


      <Wrapper className='flex items-center py-[151px] bg-c-salmon-100 justify-center'>
        <Wrapper className='flex-1  py-[27px] relative'>
        <Wrapper className='flex-1 max-w-[585px] mx-auto'>
          <Heading headingStyle='h2Class' className='text-center mb-[10px] '>
          Business Model Viability
          </Heading>
          <Text className='text-center'>
          Our dual revenue stream – combining subscription services with on-demand ride fees – ensures a steady cash flow, while our no-commission stance presents an unbeatable proposition for drivers. Ruvo's model is built for resilience, with diversification strategies to weather market shifts and fuel sustainable growth.
          </Text>
        </Wrapper>
        <Wrapper className='absolute top-0 h-full bg-c-gray-400 w-[1px] right-0'></Wrapper>
        </Wrapper>

        <Wrapper className='flex-1  py-[27px]'>
        <Wrapper className='flex-1 max-w-[585px] mx-auto'>
          <Heading headingStyle='h2Class' className='text-center mb-[10px]'>
          Join the Journey
          </Heading>
          <Text className='text-center'>
          Your investment can drive the next phase of Ruvo's journey. As an investor in Ruvo, you will fuel innovation in a company that prioritizes the planet and its people. Together, we can steer towards a cleaner, greener future.
          </Text>     </Wrapper>
        </Wrapper>
      </Wrapper>


      <Wrapper data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="px-[30px]  pb-[72px] max-sm:px-[20px] max-smlg:my-[50px] bg-c-salmon-100 ">
        <Wrapper className="flex border border-c-gray-400 rounded-[15px] relative max-smlg:flex-col bg-white">
          <Wrapper className="flex-1 flex justify-center lg:p-0  p-[21px] items-center">
            <Wrapper>

              <Heading headingStyle='h2Class'>Connect with Us</Heading>
              <Text className="max-w-[617px] mt-[10px]"> Please reach out through the contact form below or direct your inquiries to investor.relations@myruvo.com.</Text>
              <Wrapper className='pt-[90px]'>
              <Heading headingStyle='h2Class'>Investor Relations Contact</Heading>
              <Text className="max-w-[617px] mt-[10px]">
                <NavButton type='nav' link="mailto:investor.relations@myruvo.com" additionalCss='flex items-center gap-[6px]'><Icon type='email' size='24px' />investor.relations@myruvo.com</NavButton></Text>
              <Text className="max-w-[617px] mt-[10px]">Connect with us on LinkedIn for the latest updates and insights.</Text>
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Wrapper className="flex-1 flex items-center justify-center">
            <Wrapper className="xl:px-[56px] xl:py-[57px] p-[30px] w-full max-sm:p-[20px]">              
              <ContactForm />
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>


  )

}
