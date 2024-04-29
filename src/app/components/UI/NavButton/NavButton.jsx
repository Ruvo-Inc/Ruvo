import PropTypes from 'prop-types';
import './NavButton.css';
import Link from 'next/link'
const NavButton = ({ children, type, link, label , color, additionalCss }) => {
    let classes = `${additionalCss}  border font-mulish text-[16px] max-sm:text-[14px] leading-none font-bold  transition-all duration-300 py-[18px] px-[30px] max-sm:px-[15px] max-xs:!px-[5px]  w-full block text-center uppercase rounded-[10px]`;
    if (type === "solid" && color === 'green') {
        classes += `  text-white bg-c-green-600 border-white hover:bg-white hover:text-c-gray-600 hover:border-c-gray-600`;
    }
    if (type === "outlined" && color === 'green') {
        classes += ` text-c-green-600 border-c-green-600 hover:bg-c-green-600 hover:text-white hover:border-c-green-600`;
    } 
    if (type === "solid" && color === 'salmon') {
        classes += `  text-white bg-c-salmon-500 border-c-salmon-500 hover:bg-white hover:text-c-gray-600 hover:border-c-gray-600`;
    }
    if (type === "outlined" && color === 'salmon') {
        classes += ` text-c-salmon-500 border-c-salmon-500 bg-white hover:bg-c-salmon-500 hover:text-white hover:border-c-salmon-500`;
    }   
    if (type === "outlined" && color === 'white') {
        classes += ` text-white border-white hover:bg-white hover:text-c-gray-600 hover:border-c-gray-600`;
    }   
    if (type === "nav") {
        classes = additionalCss + ' text-[16px] leading-none font-medium ';
    }   

    return (
        <>
            <Link href={link} className={classes} >
                {children} {label}
            </Link>
        </>
    )
}
NavButton.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    link: PropTypes.string.isRequired,
    label: PropTypes.string
};
export default NavButton;