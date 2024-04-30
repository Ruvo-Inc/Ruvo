import React from 'react';
import './style.css'
import Heading from '../../components/UI/Heading/Heading';
import Wrapper from '../../components/UI/Wrapper/Wrapper';
import Text from '@/app/components/UI/Text/Text';
import Container from '@/app/components/UI/Container/Container';
import NavButton from '@/app/components/UI/NavButton/NavButton';
import Image from 'next/image';
import  Instant from '../../assets/images/Why Ride/INSTANT ACCESS AT YOUR FINGERTIPS.webp';
import  SEAMLESS from '../../assets/images/Why Ride/SEAMLESS CHOICES INSTANT BOOKING.webp';
import  ADVANCED from '../../assets/images/Why Ride/ADVANCED TECHNOLOGY FOR SMART TRAVEL.webp';
import  TRUSTED from '../../assets/images/Why Ride/CHOOSE YOUR TRUSTED DRIVER.webp';
import  GREEN from '../../assets/images/Why Ride/DRIVE GREEN, LIVE GREEN.webp';
import  SAFETY from '../../assets/images/Why Ride/SAFETY AS A STANDARD.webp';
import  TRANSPARENT from '../../assets/images/Why Ride/TRANSPARENT PRICING, NO SURPRISES.webp';
import  Join from '../../assets/images/Why Ride/iStock-167532092.webp';

const WhyRuvo = () => {
  return (
    <>
    <>
    <Wrapper className='bg-c-green-100 py-12'>
      <Container>
        <Wrapper className='flex items-center justify-between gap-x-12  gap-y-7 max-smlg:flex-col'>
            <Wrapper className='flex-[30%]'>
            <Heading headingStyle='h1' className='text-left max-2xl:text-[40px] max-sm:text-[30px] mb-2'> Why Ride with Ruvo?</Heading>
        <Text className="text-left">
        Welcome to the future of urban travel. At Ruvo, we're not just taking you places—we're pioneering a movement towards a smarter, cleaner, and more sustainable way to move around your city. Join us on a journey where every ride promises more than just a destination; it offers unparalleled freedom and efficiency, reshaping your travel experience with instant, personalized choices.
        </Text>
            </Wrapper>
            <Wrapper className='flex-[70%] flex gap-7 max-sm:flex-col'>
              
  <MultiColumnCard
    heading="Instant Access at Your Fingertips"
    image={Instant}
    text="With the Ruvo app, a comfortable, reliable ride is just a tap away. Our advanced AI-driven platform ensures you can book a ride when you need it, without the wait. Experience seamless urban mobility that fits your schedule, whether you're commuting to work, heading out for the evening, or exploring the city."
  />
  <MultiColumnCard
    heading="SEAMLESS CHOICES, INSTANT BOOKING"
    image={SEAMLESS}
    text="Ruvo revolutionizes ride-hailing with a unique marketplace model that combines the power of choice with the convenience you love. While you have the option to select your driver and fare, our advanced algorithms make this process as quick as a traditional ride booking. There’s no haggling or delay—just a few simple taps to tailor your ride preferences and costs before confirming your trip. Experience the freedom to choose without sacrificing speed or convenience."
  />
              </Wrapper>
        </Wrapper>
      </Container>
    </Wrapper>

    <Wrapper className=' py-12'>
      <Container>

            <Wrapper className='grid grid-cols-3 gap-7 flex-wrap  max-md:grid-cols-2 max-sm:grid-cols-1'>
  <MultiColumnCard
    heading="Transparent Pricing, No Surprises"
    image={TRANSPARENT}
    text="Say goodbye to surge pricing and hidden fees. Ruvo offers competitive rates and transparent pricing that keep your budget in check. Our fair pricing model means you know exactly what you’re paying for, ensuring affordability without sacrificing quality or comfort."
  />
  <MultiColumnCard
    heading="Drive Green, Live Green"
    image={GREEN}
    text="Every ride with Ruvo is a step towards a greener planet. Our all-electric fleet reduces urban pollution and lowers carbon emissions, helping you contribute to environmental sustainability with every trip. Choose Ruvo, and take pride in knowing that your choice supports eco-friendly initiatives."
  />
    <MultiColumnCard
    heading="Safety as a Standard"
    image={SAFETY}
    text="Your safety is our top priority. Ruvo’s vehicles are regularly maintained to the highest standards, and our drivers are thoroughly vetted through rigorous background checks. With cutting-edge safety features in our app, you can enjoy peace of mind knowing that we’re committed to your well-being on every journey."
  />
    <MultiColumnCard
    heading="Choose Your Trusted Driver"
    image={TRUSTED}
    text="With Ruvo’s unique marketplace model, not only do we ensure all drivers meet stringent safety standards, but we also give you the option to choose drivers based on community ratings and your personal preferences. Feel safe knowing you have the power to select who drives you to your destination."
  />
  <MultiColumnCard
    heading="Advanced Technology for Smart Travel"
    image={ADVANCED}
    text="At Ruvo, our cutting-edge technology is the backbone of our marketplace. We use sophisticated algorithms to quickly match your travel preferences with available drivers, ensuring that you can enjoy customized rides without any extra waiting time. Our platform is designed for efficiency, so you spend less time planning and more time moving."
  />
    <MultiColumnCard
    heading="Join a Community of Forward-Thinker"
    image={Join}
    text="When you ride with Ruvo, you join a community of like-minded individuals who believe in better, more sustainable urban living. Together, we’re not just passengers and drivers—we’re pioneers shaping the future of transportation."
  />
              </Wrapper>
      </Container>
    </Wrapper>
    
        </>
            <Wrapper className="bg-primary py-[30px] max-sm:px-[20px]">
        <Heading
          headingStyle="h3Class"
          className="text-center text-white "
        >
        Ready to ride the change?
        </Heading>
         <Text className='text-center mt-2  mb-4 text-white'>
         Sign up now and take your first step towards a smarter, cleaner commute.
         </Text>
        <Wrapper className="max-w-[220px] mx-auto flex gap-x-[25px]">
          <NavButton link="/?form=1" color="green" type="solid">
           Sign up to Ride
          </NavButton>
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default WhyRuvo;


export const MultiColumnCard = ({image,heading,text})=>{
return(
  <>
  <Wrapper className='overflow-hidden rounded-xl border border-c-teal-500 bg-white relative flex-1 items-end group'>
<Wrapper className='relative pb-[65%]'>
<Wrapper className='absolute top-0 left-0 h-full w-full'>
<Image src={image?.src} alt='Image' width={image?.width} height={image?.height} className='h-full w-full object-cover' />
</Wrapper>
</Wrapper>
    <Wrapper className='p-4 relative z-[1]'>
      <Heading headingStyle='h4Class' text={heading} className='mb-3 uppercase '/>      
      <Text className=' '>
          {text}
      </Text>
    </Wrapper>
  </Wrapper>
  </>
)
}