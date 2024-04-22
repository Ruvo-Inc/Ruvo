import React from 'react';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';

const HeadingText = ({className, heading, text}) => {
  return (
    <div className={className + ' p-5 rounded-[10px] flex flex-col items-center gap-[5px]'}>
<Heading headingStyle='h3Class' className='text-white text-center max-4xl:text-[1.5vw]'>
{heading}
</Heading>
<Text className='text-center text-white'>
{text}
</Text>
    </div>
    
  );
}

export default HeadingText;
