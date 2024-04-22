import PropTypes from 'prop-types';
import Link from 'next/link'
 const  Navigation = ({linkList,customClasses,style,mode}) => {
  let custom = customClasses;
  let classes = 'flex max-tab:flex-col max-tab:gap-0';
  
  if(style === "hoz"){
        classes += ' flex-row justify-center gap-[30px] max-xl:gap-[15px]';
        customClasses += ` max-xl:text-[14px] max-tab:text-c-gray-600 max-tab:p-3 max-tab:block ${mode === 'dark' ? ' text-c-gray-600' : ' text-white'}` ;
  }
  else{
    classes += ' max-tab:text-c-gray-600  max-tab:block  flex-col gap-[30px] max-sm:gap-[10px]';
    customClasses += ' max-xl:text-[14px] text-white';
  }
 
    return (

          <ul className={classes}>
          {Object.entries(linkList).map(([key,link]) => (
       <li key={key} className={ style === 'hoz' ? 'max-tab:border-b max-tab:border-c-gray-400' : ''}>
        <Link className={customClasses  + "  text-[16px] font-mulish font-medium  leading-5 tracking-[0.5px]"} href={link?.link}>{link?.label}</Link>    </li>      
        ))}
           </ul>
  
    ); 
  }
  Navigation.propTypes = {
    customClasses:PropTypes.string
};
Navigation.defaultProps = {
  customClasses: " ",
};
export default Navigation;