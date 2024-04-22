import React from 'react';
import LightLogo from '../../../assets/images/site-logo.png'
import darkLogo from '../../../assets/images/site-logo-dark.png'
import Link from 'next/link'
import Image from 'next/image';
const Logo = ({mode}) => {
  return (
    <>
    <Link href={'/'}>
    {mode === 'light' && (<Image src={LightLogo.src} alt='site-logo'  width={LightLogo.width} height={LightLogo.height} />)}
    {mode === 'dark' && (<Image src={darkLogo.src} alt='site-logo'  width={darkLogo.width} height={darkLogo.height} />)}
    </Link>
    </>
 
  );
}

export default Logo;
