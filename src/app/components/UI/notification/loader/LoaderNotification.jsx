"use client";
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text/Text';
function LoaderNotification({children,message, className, active}) {
    const [activeNoti,setActiveNoti] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setActiveNoti(active);
        },500)
    },[active])
    
  return (
   <div className={className + 'fixed top-20 right-4  max-w-96 w-full sm:p-3 transition-all flex justify-between items-center duration-500 bg-red-600 rounded-lg shadow dark:border md:mt-0 l:p-0 dark:bg-blue-700 dark:border-gray-700 opacity-0 translate-y-7' + `${activeNoti === true ? ' !opacity-100 !translate-y-0' : ' cursor-not-allowed pointer-events-none '}` }>
    <Text className="flex-1 text-white">
        {children}
        {message}
    </Text>
   </div>
  );
}
LoaderNotification.propTypes = {
    children: PropTypes.string,
    message: PropTypes.string,
    className: PropTypes.string
};

export default LoaderNotification;
