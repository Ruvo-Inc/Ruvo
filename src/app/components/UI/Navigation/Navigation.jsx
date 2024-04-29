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
       <li key={key} className={`${style === 'hoz' ? 'relative max-tab:border-b max-tab:border-c-gray-400 group' : ''} ${link?.child ? ' !border-0' : ''}`}>
        {style === 'hoz' && (<Link onClick={closing} className={customClasses  + "  block  font-mulish font-medium  leading-5 tracking-[0.5px]" + ` ${style === 'hoz' ?  link?.link === router ?  ' border-b-2 border-c-green-600 max-lg:border-0'  :  ''    :  ''} ${link?.child ? ' max-tab:!hidden' : ''}`} href={link?.link}>{link?.label}</Link> )}
        {style !== 'hoz' && (<Link className={customClasses  + "   font-mulish font-medium  leading-5 tracking-[0.5px]" + ` ${style === 'hoz' ?  link?.link === router ?  ' border-b border-white'  :  ''    :  ''} `} href={link?.link}>{link?.label}</Link> )}       
        {link?.child && (<ul className={`absolute top-full left-0 bg-white opacity-0 transition-all translate-y-3 invisible  group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 ${mode === 'light' ? 'min-tab:!bg-c-green-600' : ''}  max-tab:static max-tab:visible max-tab:translate-y-0 max-tab:opacity-100 `}>
          {Object.entries(link?.child).map(([key,childlink]) => (
            <li key={key} className={ style === 'hoz' ? 'max-tab:border-b max-tab:border-c-gray-400' : ''}>
           {style === 'hoz' && (<Link className={customClasses  + " whitespace-nowrap  !py-3 px-4 block  font-mulish font-medium  leading-5 tracking-[0.5px]" + ` ${style === 'hoz' ?  childlink?.link === router ?  ' border-b border-white'  :  ''    :  ''} `} href={childlink?.link}>{childlink?.label}</Link> )}   
           </li>    
          ))}
        </ul>)}
        
           </li>      
        ))}
           </ul>
  
    ); 
  }
  Navigation.propTypes = {
    customClasses:PropTypes.string
};

export default Navigation;