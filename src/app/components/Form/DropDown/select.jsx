'use client'
import { useState } from "react";
import PropTypes from 'prop-types';
import Wrapper from "../../UI/Wrapper/Wrapper";
const DropDown = ({ label, name, placeholder, items, required, setData, value }) => {
  return (
    <Wrapper className="flex flex-col-reverse flex-1">
      <select 
           value={value || placeholder}
           onChange={(e) => { setData(e) }}
      required={required} name={name} className="placeholder:text-c-gray-400 text-sm border border-c-gray-400 rounded-[60px]  font-medium text-c-gray-600 p-4 max-sm:p-2 dark:bg-transparent ">
        <option disabled data-index="0" value={placeholder}>
          {placeholder}
        </option>
        {items.map((item, index) => (
  <option value={item} key={index} data-index={index + 1}>
    {item}
  </option>
))}

      </select>
      <label className="block font-medium text-c-gray-600  text-sm mb-2">
        {label}
      </label>
    </Wrapper>
  );
};

DropDown.propTypes = {
  label:PropTypes.string, name:PropTypes.string, placeholder:PropTypes.string
};
export default DropDown;
