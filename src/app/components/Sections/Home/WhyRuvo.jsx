import React from 'react';
import Wrapper from '../../UI/Wrapper/Wrapper';
import Heading from '../../UI/Heading/Heading';
import Empowering from '@/app/assets/images/Home/Empowering Transportation Marketplace.png'
import Uncompromised from '@/app/assets/images/Home/Uncompromised Trust and Safety.png'
import Affordability from  '@/app/assets/images/Home/Affordability Meets Reliability.png'
import Commitment from '@/app/assets/images/Home/Commitment to Zero Carbon Emissions.png'
import Text from '../../UI/Text/Text';
import Image from 'next/image';
import Container from '../../UI/Container/Container';
const WhyRuvo = () => {
  return (
    <div  id='WhyRuvo'   data-aos="fade-in" data-aos-anchor-placement="top-center">
      <Wrapper  className=' max-smlg:px-[20px] bg-c-green-100 py-12 max-lg:py-12 max-lg:px-5 px-[50px]'>
        <div  data-aos="fade-in"  data-aos-anchor='#WhyRuvo'>
          <Heading headingStyle='h2Class' className='text-center mb-[40px]' >
          Why Ruvo stands apart
        </Heading>
        </div>
        <Container>
        <Wrapper className='flex justify-between gap-[32px] max-smlg:gap-[30px] max-smlg:flex-col max-smlg:max-w-lg max-smlg:mx-auto max-lg:flex-wrap'>
          <Wrapper className='max-lg:w-[calc(50%-22.5px)] max-lg:flex-none w-[28%] max-md:flex-1 max-md:w-full items-center flex flex-col gap-[10px]' anchor={'#WhyRuvo'} animation={'fade-up'} delay={100}>
            
            <Image src={Empowering.src} alt='Empowering Transportation Marketplace' className='w-[210px] h-[210px] rounded-full mx-auto block'  width={Empowering.width} height={Empowering.height} />
            <Heading headingStyle='h4Class' className='text-center'>
              Empowering Transportation Marketplace
            </Heading>
            <Text className='text-center'>
              At Ruvo, you as Partners set your own prices.
              <br />
              <br />
              Freedom of choice extends to our guests too—select your driver based on verified partner profiles for a tailored travel experience that meets your expectations every time.
            </Text>
          </Wrapper>
          <Wrapper className='max-lg:w-[calc(50%-22.5px)] max-lg:flex-none flex-1 items-center max-md:w-full flex flex-col gap-[10px]' anchor={'#WhyRuvo'} animation={'fade-up'} delay={200}>
            <Image src={Uncompromised.src} alt='Uncompromised Trust and Safety' className='w-[210px] h-[210px] rounded-full mx-auto block' width={Uncompromised.width} height={Uncompromised.height}/>
            <Heading headingStyle='h4Class' className='text-center'>
            Uncompromised Trust and Safety
            </Heading>
            <Text className='text-center'>
            Every partner and guest is thoroughly verified, ensuring a community of trust and respect.

              <br />
              <br />

              Feel secure every mile of the journey with real-time monitoring and easy-to-activate emergency protocols. 
            </Text>
          </Wrapper>
          <Wrapper className='max-lg:w-[calc(50%-22.5px)] max-lg:flex-none flex-1 items-center max-md:w-full flex flex-col gap-[10px]' anchor={'#WhyRuvo'} animation={'fade-up'} delay={300}>
            <Image src={Affordability.src} alt='Affordability Meets Reliability' className='w-[210px] h-[210px] rounded-full mx-auto block' width={Affordability.width} height={Affordability.height}/>
            <Heading headingStyle='h4Class' className='text-center'>
            Affordability Meets Reliability
            </Heading>
            <Text className='text-center'>
            We promise to be the most affordable option available.

              <br />
              <br />
              Schedule your trips in advance without worrying about price hikes. With Ruvo, what you see is what you pay.
            </Text>
          </Wrapper>
          <Wrapper className='max-lg:w-[calc(50%-22.5px)] max-lg:flex-none flex-1 items-center max-md:w-full flex flex-col gap-[10px]' anchor={'#WhyRuvo'} animation={'fade-up'} delay={400}>
            <Image src={Commitment.src} alt='Commitment to Zero Carbon Emissions' className='w-[210px] h-[210px] rounded-full mx-auto block' width={Commitment.width} height={Commitment.height}/>
            <Heading headingStyle='h4Class' className='text-center'>
            Commitment to Zero Carbon Emissions
            </Heading>
            <Text className='text-center'>
            Our all-electric fleet ensures your travel is not just eco-friendly but actively contributes to reducing urban pollution and carbon emissions.
            </Text>
          </Wrapper>
        </Wrapper>
        </Container>
      </Wrapper>
    </div>
  );
}

export default WhyRuvo;
