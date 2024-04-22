'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Aos = () => {
    useEffect(()=>{
        AOS.init();
    },[])
  return (
<>
</>
  );
}

export default Aos;
