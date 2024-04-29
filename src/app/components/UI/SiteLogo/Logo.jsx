import React from 'react';
import LightLogo from '../../../assets/images/site-logo.png'
import darkLogo from '../../../assets/images/site-logo-dark.png'
import Link from 'next/link'
import Image from 'next/image';
const Logo = ({mode}) => {
  return (
    <>
    <Link href={'/'}>
    {mode === 'light' && (<Image src={LightLogo.src} alt='site-logo'  width={'162'} height={'52'} />)}
    {mode === 'dark' && (<Image src={darkLogo.src} alt='site-logo'  width={'162'} height={'52'} />)}
    </Link>
    </>
 
  );
}

export default Logo;
