import React from 'react';
import PropTypes from 'prop-types';
function Text({children , className}) {
   className = className || '';
  return (
    <>
    {className === "" && (<p  className={'text-[16px] font-medium font-mulish text-c-gray-600 max-xl:text-[14px]'}>
        {children}
     </p>     )}
     {className !== "" && (<p className={className + ' text-[16px] font-medium font-mulish max-xl:text-[14px]'}>
        {children}
     </p>     )}
     </>
  );
}

Text.propTypes={
    className: PropTypes.string
}
export default Text;
