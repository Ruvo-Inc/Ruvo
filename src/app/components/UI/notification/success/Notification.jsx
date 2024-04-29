"use client";
import { useEffect, useState } from 'react';
import Button from '../../../form/button/Button'
import Text from '../../text/Text';
import Wrapper from '../../wrapper/Wrapper';
import PropTypes from 'prop-types';
const  Notification = ({children,message, className, active})=> {
    const [activeNoti,setActiveNoti] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
        setActiveNoti(active);
    },500)
    },[active])
  return (
   <Wrapper className={className + ' z-[9999] fixed top-20 left-1/2 translate-x-[-50%] max-w-96 w-full sm:p-3 flex items-center justify-between duration-500 bg-green-500 rounded-lg shadow dark:border md:mt-0 l:p-0 dark:bg-green-500 dark:border-gray-700  transition-all ' + `${activeNoti === true ? ' opacity-1 translate-y-0' : ' cursor-not-allowed pointer-events-none opacity-0 translate-y-7'}`}>
    <Text className="flex-1 text-white">
        {children}
        {message}
    </Text>
   </Wrapper>
  );
}
Notification.propTypes = {
    children: PropTypes.string,
    message: PropTypes.string,
    className: PropTypes.string
};
Notification.defaultProps = {    
    className: ''
};
export default Notification;
