'use client'
import PropTypes from 'prop-types';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
 const  Navigation = ({close,linkList,customClasses,style,mode}) => {
  let custom = customClasses  || '';
  let classes = 'flex max-tab:flex-col max-tab:gap-0';
  const router = usePathname();
  const closing = ()=>{
    close(false)
  }
  if(style === "hoz"){
        classes += ' flex-row justify-center gap-[30px] max-xl:gap-[15px]';
        customClasses += ` py-[40px]  text-[20px] max-xl:text-[14px] max-tab:text-c-gray-600 max-tab:p-3 max-tab:block ${mode === 'dark' ? ' text-c-gray-600' : ' text-white'}` ;
  }
  else{
    classes += ' max-tab:text-c-gray-600  max-tab:block  flex-col gap-[15px] max-sm:gap-[10px]';
    customClasses += 'text-[16px] max-xl:text-[14px] text-white';
  }
 
    return (

          <ul className={classes}>
          {Object.entries(linkList).map(([key,link]) => (
       <li key={key} className={ style === 'hoz' ? 'max-tab:border-b max-tab:border-c-gray-400' : ''}>
        {style === 'hoz' && (<Link onClick={closing} className={customClasses  + "  block  font-mulish font-medium  leading-5 tracking-[0.5px]" + ` ${style === 'hoz' ?  link?.link === router ?  ' border-b-2 border-c-green-600 max-lg:border-0'  :  ''    :  ''} `} href={link?.link}>{link?.label}</Link> )}
        {style !== 'hoz' && (<Link className={customClasses  + "   font-mulish font-medium  leading-5 tracking-[0.5px]" + ` ${style === 'hoz' ?  link?.link === router ?  ' border-b border-white'  :  ''    :  ''} `} href={link?.link}>{link?.label}</Link> )}       
        
           </li>      
        ))}
           </ul>
  
    ); 
  }
  Navigation.propTypes = {
    customClasses:PropTypes.string
};

export default Navigation;