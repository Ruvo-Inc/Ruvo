import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const Input = ({ type, placeholder, required, label, setData, value, name }) => {
    let classes = 'flex flex-col-reverse flex-1';    
    return (
        <>
            <div className={classes}>
                <input
                    name={name}
                    type={type}
                    autoComplete={type}
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    onChange={(e) => { setData(e) }}
                    className="placeholder:text-c-gray-400 text-sm border border-c-gray-400 rounded-[10px] font-mulish font-medium text-c-gray-600 p-[20px] max-sm:p-[12px]"
                />
                <label className="block font-medium text-c-gray-600 font-mulish text-sm mb-2">
                    {label}
                </label>
            </div>
        </>
    )
}
Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    setData:PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};
Input.defaultProps = {
    placeholder: "blue",
    type: "text",
    required: false,
    label: "Email"
};
export default Input;