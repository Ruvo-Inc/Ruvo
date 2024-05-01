import './style.css';
import BannerImage from '../../assets/images/Sustainability/Sustainability.webp'
import Heading from '../../components/UI/Heading/Heading';
import Wrapper from '@/app/components/UI/Wrapper/Wrapper';
import Text from '@/app/components/UI/Text/Text';
import { Sustainab } from '@/app/data/Menu';
import Container from '@/app/components/UI/Container/Container';
import { MultiColumnCard } from '../why-ride-with-ruvo/page';
import Image from 'next/image';


export const metadata = {
  title: "Sustainability",
  description: `From day one, Ruvo is pioneering the shift towards sustainable urban mobility with our all-electric vehicle (EV) fleet. Our commitment to environmental stewardship is at the core of our operations, ensuring every Ruvo ride contributes positively to our planet.`,
};

const Sustainability = () => {

  return (
    <>
      
      <Wrapper className='bg-c-green-100 py-8'>
      <Container>
        <Wrapper className='flex justify-between gap-x-12  gap-y-7 max-smlg:flex-col items-start'>
            <Wrapper className='flex-[30%] max-smxl:flex-1 max-smxl:w-full overflow-hidden rounded-xl  bg-white border border-c-teal-500 '>
            <Wrapper className={'  relative flex-1 items-end group'}>
{BannerImage && (<Wrapper className='relative pb-[65%]'>
<Wrapper className='absolute top-0 left-0 h-full w-full'>
<Image src={BannerImage?.src} alt='Image' width={BannerImage?.width} height={BannerImage?.height} className='h-full w-full object-cover' />
</Wrapper>
</Wrapper>)}

    <Wrapper className='p-4 relative z-[1]'>
    <Heading headingStyle='h1' className='hidden'>Sustainability </Heading>
    <Heading headingStyle='h4' > Ruvo's commitment to Sustainability Driving tomorrow's change</Heading>

    </Wrapper>
  </Wrapper>
        
            </Wrapper>
            <Wrapper className='flex-[70%] flex gap-6 flex-col'>

  <MultiColumnCard
    heading="Our vision for a greener future"
    text="Ruvo envisions a world where every journey contributes to a healthier planet. Our commitment extends beyond transportation to revolutionize urban mobility with zero emissions. We're not just part of the conversation on sustainability; we aim to lead it, setting new standards for how cities move and breathe."
  />
  
 

  <MultiColumnCard
  className='flex-none'
    heading="Starting with a fully electrified fleet"    
  >
   From day one, Ruvo is pioneering the shift towards sustainable urban mobility with our all-electric vehicle (EV) fleet. Our commitment to environmental stewardship is at the core of our operations, ensuring every Ruvo ride contributes positively to our planet.
              <br /><br />
              This foundational decision places Ruvo at the forefront of eco-friendly transportation, offering a cleaner, greener alternative from the get-go. Our partnership with leading EV manufacturers not only emphasizes our dedication to cutting-edge technology but also our resolve to significantly reduce urban CO2 emissions.
              <br /><br />
              Ruvo's initiative is set to redefine the standards for environmentally conscious travel, making every journey with us a step toward a more sustainable future.
  </MultiColumnCard>
  
 
              </Wrapper>
        </Wrapper>
      </Container>
    </Wrapper>
    <Wrapper className=' py-8'>
    <Container>
    <Wrapper className='flex flex-wrap gap-6  max-md:grid-cols-2 max-sm:grid-cols-1 justify-center'>
    {Object.entries(Sustainab).map(([key, item], index) => (
    <MultiColumnCard
    className="w-[calc(33%-16px)] !flex-none max-md:w-[calc(50%-12px)] max-sm:w-full"
    heading={item.heading}
    text={item.text}
  />
      ))}
      </Wrapper>
</Container>
</Wrapper>
    

    </>
  );
}

export default Sustainability;



export function LeftSide({ index, heading, text }) {
  return (
    <>
      <Wrapper className="makes-text-sub  relative ">

        <Wrapper className="flex py-[80px] gap-[109px]">
          <Wrapper className="flex-1 max-md:hidden">

          </Wrapper>
          <Wrapper className="flex-1 relative max-md:bg-c-salmon-100">
            <Heading headingStyle='empty' className='number max-md:mx-auto max-md:mb-2 min-md:absolute min-md:left-[-83px] min-md:top-[16px] text-[16px] font-medium font-mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[14px]'>
              {index}
            </Heading>
            <Wrapper className="max-w-[632px] max-md:mx-auto">
              <Heading headingStyle='h3' className='mb-[10px] max-md:text-center'>{heading}</Heading>
              <Text className="max-md:text-center">
                {text}
              </Text></Wrapper>
          </Wrapper>


        </Wrapper>
      </Wrapper>
    </>
  )
}

export function RightSide({ index, heading, text }) {
  return (

    <Wrapper className="makes-text-sub  relative">

      <Wrapper className="flex py-[80px] gap-[109px]">

        <Wrapper className="flex-1 relative max-md:bg-c-salmon-100">
          <Heading headingStyle='empty' className='max-md:mx-auto max-md:mb-2 number min-md:absolute min-md:right-[-83px] min-md:top-[16px] text-[16px] font-medium font-mulish  w-[57px] h-[57px] rounded-full flex items-center justify-center max-xl:text-[14px]'>
            {index}
          </Heading>
          <Wrapper className="max-w-[632px] text-right ml-auto max-md:mx-auto">
            <Heading headingStyle='h3' className='mb-[10px] max-md:text-center'>{heading}</Heading>
            <Text className=" ml-auto max-md:text-center">
              {text}
            </Text></Wrapper>
        </Wrapper>
        <Wrapper className="flex-1 max-md:hidden">

        </Wrapper>

      </Wrapper>
    </Wrapper>

  )
}

export const StickyHeading = ({ className, children, heading, mode, sticky }) => {
  return (
    <Wrapper className={className + " relative py-8 max-smlg:max-w-full"}>
      <Container className=' flex gap-x-[30px] justify-between max-smlg:flex-col gap-y-5 z-[1] relative'>  
        <Wrapper className="w-full">
        <Heading headingStyle="h2" className={`mb-4 ${sticky === true ? 'sticky top-[150px] ' : ''} !text-[24px]  ${mode === 'light' || mode === 'light-overlay' ? 'text-white' : ''}`}>
            {heading}
          </Heading>
          <Text className={`text-[16px] ${mode === 'light' || mode === 'light-overlay' ? 'text-white' : ''}`}>
            {children}
          </Text>
        </Wrapper>
      </Container>
      {mode === 'light-overlay' && (<Wrapper className="absolute w-full h-full bg-black opacity-55 top-0 left-0 "></Wrapper>) }
    </Wrapper>
  )
}