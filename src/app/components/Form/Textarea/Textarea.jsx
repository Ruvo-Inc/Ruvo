import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Textarea = ({ placeholder, required, label, setData, value, name }) => {
    let classes = 'flex flex-col-reverse';    
    return (
        <>
            <div className={classes}>
                <textarea name={name}  placeholder={placeholder} value={value} onChange={(e) => { setData(e) }} required={required}
                className="placeholder:text-c-gray-400 text-sm border border-c-gray-400 rounded-[10px] font-mulish font-medium text-c-gray-600 p-[20px] min-h-[147px]"
                >                    
                </textarea>         
                <label className="block font-medium text-c-gray-600 font-mulish text-sm mb-2">
                    {label}
                </label>
            </div>
        </>
    )
}
Textarea.propTypes = {
    rows:PropTypes.number,    
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    setData:PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};
Textarea.defaultProps = {
    rows:5,
    placeholder: "blue",
    required: false,
    label: "Email"
};
export default Textarea;