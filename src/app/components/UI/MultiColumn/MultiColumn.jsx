import React from 'react';
import './style.css'
import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import Image from 'next/image';
const MultiColumn = ({items}) => {
  return (
    <>
                {Object.entries(items).map(([key,item],index) => (
       <div key={key} className='flex flex-col text-center gap-y-[10px] flex-1'  data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay={`${index + 1}00`}>
        <Image src={item.image.src} alt={item.image.alt} className='max-w-[100px] block mx-auto' width={item.image.width} height={item.image.height} />
        <Heading headingStyle='h4Class' text={item.heading}/>
        <Text>
            {item.description}
        </Text>
        </div>      
        ))}
    </>
  );
}

export default MultiColumn;
