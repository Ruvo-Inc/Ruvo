import React from 'react';

const Container = ({children, className}) => {
  return (
    <div className={  className + '  w-full max-3xl:max-w-[85%]  max-tab:max-w-full max-w-[1408px] px-[64px] mx-auto max-md:px-4 max-3xlsm:px-10' }>
      {children}
    </div>
  );
}

export default Container;
