import React from 'react';
import Placeholder from '../../../assets/images/placeholder.jpg'
import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import Wrapper from '../Wrapper/Wrapper';
import PropTypes from 'prop-types';
import Image from 'next/image';

function ImageWithText({ image, heading, children, imagePostion, imageClassName, index, anchor }) {
    return (
        <div id={anchor}  className={`flex max-w-[1536px] mx-auto flex-col gap-[159px] max-smlg:gap-[20px] ${imagePostion === 'right' ? 'md:flex-row-reverse max-smlg:flex-col' : 'md:flex-row max-smlg:flex-col'} `}>
            <div className={imageClassName + " max-smlg:w-full md:w-1/2"} data-aos="fade-up" data-aos-anchor={`#` + anchor} >

                {image && (<Image src={image.src} alt="Indexd" className={imageClassName + " h-full object-cover w-full rounded-[15px]"} width={image.width} height={image.height}/>)}
                {!image && (<Image src={Placeholder.src} alt="Index" className={imageClassName + " h-full object-cover w-full rounded-[15px]"} width={Placeholder.width} height={Placeholder.height} />)}
            </div>
            <div className='max-smlg:w-full md:w-1/2 flex items-center justify-center '>
                <Wrapper className='max-smlg:w-full'>
                    <div className='max-smlg:max-w-full md:max-w-[678px] mx-auto'>
                       {index !== '' && (<div data-aos="fade-up" data-aos-anchor={`#` + anchor}  >
                            <Heading className='opacity-10 mb-[-58px]' headingStyle='h1Class' text={index ? index : ''} />
                        </div>)}
                        <div data-aos="fade-up" data-aos-delay="100" data-aos-anchor={`#` + anchor}    className='max-w-[567px]'>
                            <Heading className='mb-[10px]' headingStyle='h3Class' text={heading ? heading : 'Heading'} />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200" data-aos-anchor={`#` + anchor}  >
                            <Text>
                                {children}
                            </Text>
                        </div>

                    </div>
                </Wrapper>
            </div>
        </div>
    );
}
ImageWithText.propTypes = {
    imageClassName: PropTypes.string,
    imagePostion: PropTypes.string
};
ImageWithText.defaultProps = {
    imageClassName: " ",
    imagePostion: 'left',
    index:''
};
export default ImageWithText;
