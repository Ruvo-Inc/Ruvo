import React from 'react';
import Placeholder from '../../../assets/images/placeholder.jpg'
import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import Wrapper from '../Wrapper/Wrapper';
import PropTypes from 'prop-types';
import Image from 'next/image';

function ImageText({image, heading, children, imagePostion, imageClassName}) {
    return (
        <div className={`flex flex-col ${imagePostion === 'right' ? 'md:flex-row-reverse max-smlg:flex-col' : 'md:flex-row max-smlg:flex-col' } `}>
            <div className={ imageClassName + " max-smlg:w-full md:w-1/2"} data-aos="fade-up" data-aos-anchor-placement="top-center">
                
            {image && (<Image src={image} alt="Indexd" className={ imageClassName + " h-full object-cover w-full"} width={image.width} height={image.height} />)}
            {!image && (<Image src={Placeholder} alt="Index" className={ imageClassName + " h-full object-cover w-full"} width={Placeholder.width} height={Placeholder.height}  />)}                
            </div>
            <div className='max-smlg:w-full md:w-1/2 flex items-center justify-center '>
            <Wrapper className='p-[40px] max-smlg:py-[20px]  max-smlg:px-0 max-smlg:w-full'>
                <div className='max-smlg:max-w-full md:max-w-[666px] mx-auto'>
          
                    <Heading className='mb-[10px] max-xl:text-[36px]' headingStyle='h1Class' text={heading ? heading : 'Heading'} />            
              
                   
            
                     {children}
               
                           
                </div>
                </Wrapper>  
            </div>
        </div>
    );
}
ImageText.propTypes = {
    imageClassName:PropTypes.string,
    imagePostion:PropTypes.string
};
export default ImageText;
