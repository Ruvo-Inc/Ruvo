import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, type, btnType, label, loading, color , loadingText, event, additionalCss}) => {
    let classes = `${additionalCss}  border font-mulish text-[16px] leading-none font-bold  transition-all duration-300 py-[18px] px-[30px] w-full block text-center uppercase rounded-[10px]`;
    if (btnType === "solid" && color === 'green') {
        classes += `  text-white bg-c-green-600 border-white`;
    }
    if (btnType === "outlined" && color === 'green') {
        classes += ` text-c-green-600 border-c-green-600`;
    }   
    if (btnType === "outlined" && color === 'white') {
        classes += ` text-white border-white`;
    } 
    if (btnType === "nav" && color === 'white') {
        classes = `${additionalCss} border border-white p-2 rounded-md cursor-pointer`;
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
Button.defaultProps = {
    color: "blue",
    type: "button",
    btnType:"solid",
    loading:false,
    additionalCss: ' ',
    loadingText:'Sending...'
};
export default Button;