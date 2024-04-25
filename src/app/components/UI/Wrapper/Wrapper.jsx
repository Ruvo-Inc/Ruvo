import React from 'react';
import './style.css';
const Wrapper = ({className,children, animation, delay, anchor}) => {
    return (
        <div  className={className} data-aos={animation} data-aos-delay={delay} data-aos-anchor={anchor}>
        
            {children}
        </div>
    );
};

export default Wrapper;
