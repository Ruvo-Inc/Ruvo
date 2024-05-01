import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, type, btnType, label, loading, color , loadingText, event, additionalCss}) => {
    let classes = `${additionalCss || ''}  border font-mulish text-[16px] leading-none font-bold  transition-all duration-300 py-[18px] px-[30px] w-full block text-center  rounded-[100px] ${loading ? ' opacity-50' : '' }`;
    if (btnType === "solid" && color === 'green') {
        classes += `  text-white bg-c-green-600 border-white hover:!bg-[#fff]  hover:border hover:border-c-green-600 hover:!text-c-green-600`;
    }
    if (btnType === "outlined" && color === 'green') {
        classes += ` text-c-green-600 border-c-green-600 hover:!bg-c-green-600  hover:border hover:border-c-green-600 hover:!text-[#fff]`;
    }   
    if (btnType === "outlined" && color === 'white') {
        classes += ` text-white border-white`;
    } 
    if (btnType === "nav" && color === 'white') {
        classes = `${additionalCss || ''} border border-white p-2 rounded-md cursor-pointer`;
    } 
    if (btnType === "outlined" && color === 'orange') {
    classes += `${additionalCss || ''} !bg-white !border-[#DA4615] !text-[#DA4615]  hover:!bg-[#DA4615]  hover:border hover:border-[#DA4615] hover:!text-[#fff]`
    }
    if (btnType === "solid" && color === 'orange') {
        classes += `${additionalCss || ''} text-white !bg-[#DA4615] hover:!bg-white hover:border hover:border-[#DA4615] hover:!text-[#DA4615]`
        }
    return (
        <>
        {event && (<button type={type} className={classes} onClick={event}>
               {children} {loading ? loadingText : label}
            </button>) }

            {!event && (<button type={type} className={classes} onClick={event}>
                {children} {loading ? loadingText : label}
            </button>) }
            
        </>
    )
}
Button.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    btnType: PropTypes.string.isRequired,
    label: PropTypes.string,
    loading: PropTypes.bool,
    loadingText:PropTypes.string
};
export default Button;