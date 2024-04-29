import React from 'react';
import './Heading.css';

const Heading = ({ children, headingStyle, text, className })=> {
     className = className || '';
return(
    <>
    {headingStyle === 'h1' && ( 
    <h1 className={ className  + " max-md:text-[48px] text-[48px] font-black leading-[1.26895833] uppercase font-mulish max-sm:text-[40px]"}>{children}{text}</h1>
    )}
    {headingStyle === 'h2' && (
    <h2 className={ className  + " text-[36px] max-xl:text-[30px] max-2xl:text-[56px] max-sm:text-[28px] max-xs:text-[24px] font-black leading-[1.25500] uppercase font-mulish"}>{children}{text}</h2>
    )}
     {headingStyle === 'h3' && (
    <h3 className={ className  + " text-[30px] max-xl:text-[24px] max-2xl:text-[28px]  max-sm:text-[24px]  max-xs:text-[18px] font-black leading-[1.26895833] uppercase font-mulish"}>{children}{text}</h3>
    )}
     {headingStyle === 'h4' && (
    <h4 className={ className  + " text-[36px] max-xl:text-[30px] max-2xl:text-[32px] max-sm:text-[24px]  max-xs:text-[18px] font-bold leading-[1.25500] font-mulish"}>{children}{text}</h4>
    )}
     {headingStyle === 'h5' && (
    <h5 className={ className  + " text-md transition duration-300 font-semibold leading-tight tracking-tight text-gray-900 md:text-lg dark:text-white"}>{children}{text}</h5>
    )}
     {headingStyle === 'h6' && (
    <h6 className={ className  + " font-mulish text-sm transition duration-300 font-semibold leading-tight tracking-tight text-gray-900 md:text-md dark:text-white"}>{children}{text}</h6>
    )}
     {headingStyle === 'span' && (
    <span className={ className  + " "}>{children}{text}</span>
    )}
    {headingStyle === 'h1Class' && ( 
    <div className={ className  + " text-[120px] font-black leading-[1.26895833] uppercase font-mulish max-sm:text-[40px]"}>{children}{text}</div>
    )}
     {headingStyle === 'h2Class' && (
    <div className={ className   + " text-[48px]  max-xl:text-[30px] max-2xl:text-[48px] max-sm:text-[28px] max-xs:text-[24px] font-black leading-[1.25500] uppercase font-mulish"}>{children}{text}</div>
    )}
         {headingStyle === 'h3Class' && ( 
    <div className={ className  + " text-[30px] max-xl:text-[24px] max-2xl:text-[28px]  max-sm:text-[24px]  max-xs:text-[18px] font-black leading-[1.26895833] uppercase font-mulish"}>{children}{text}</div>
    )}
         {headingStyle === 'h4Class' && ( 
    <div className={ className  + " text-[24px] max-xl:text-[20px] max-2xl:text-[22px] max-sm:text-[18px]  max-xs:text-[18px] font-bold leading-[1.25500] font-mulish"}>{children}{text}</div>
    )}
         {headingStyle === 'h6Class' && (
    <h6 className={ className  + " font-mulish text-[44px] transition duration-300 font-medium leading-tight tracking-tight text-gray-900 md:text-md dark:text-white"}>{children}{text}</h6>
    )}
             {headingStyle === 'empty' && ( 
    <div className={ className  + "  leading-[1.26895833] font-mulish"}>{children}{text}</div>
    )}
    </>
)
}

export default Heading;