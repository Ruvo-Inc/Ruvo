"use client"
import Element from '@/app/components/UI/Element/Element';
import Wrapper from '@/app/components/UI/Wrapper/Wrapper';
import Logo from '@/app/components/UI/SiteLogo/Logo';
import Button from '@/app/components/Form/Button/Button';
import Navigation from '@/app/components/UI/Navigation/Navigation';
import { useState } from 'react';
import Icon from '@/app/components/UI/Icons/Icon';
import { headerNav } from '@/app/data/Menu';
import './style.css'
import { usePathname } from 'next/navigation';


const Header = () => {
    const pathname = usePathname();
    let mode = 'light';    
   if (pathname === '/pages/homepage-2'){
    mode = 'dark';
    }
    const [open,setOpen] = useState(false); 
    const menuOpen = ()=>{
        setOpen(true);
    }
    const menuClose = ()=>{
        setOpen(false);
    }
    return (
    <Element tag="header" className={`flex items-center justify-between p-[30px] max-sm:p-[20px] absolute top-0 left-0 w-full z-[9]`}>
            <Wrapper className="max-w-[162.16px] max-xl:max-w-[130.16px]">
            <Logo mode={mode}/>
            </Wrapper>
            <Wrapper className={`mobile-drawer z-10 max-tab:z-[99]   max-tab:fixed max-tab:w-[80%] max-tab:h-full max-tab:bg-white max-tab:top-0 max-tab:transition-all max-tab:duration-300 ${open ? 'left-0' : 'left-[-100%]'}`}>
            <Wrapper className='hidden max-lg:flex justify-end border-b border-c-gray-400'>
            <Button event={menuClose} color='white' btnType='nav' type='button' >
                    <Icon size="24px" type="close" colorClass='fill-c-gray-600' />
                </Button>
                </Wrapper>
            <Navigation linkList={headerNav} style='hoz' mode={mode}>

            </Navigation>
            </Wrapper>
            <Button color='white' btnType='nav' additionalCss={`fixed w-full h-full top-0 left-0 bg-black bg-opacity-50 !border-0 ${open ? 'block' : 'hidden'}`} event={menuClose}></Button>
            <Wrapper className='max-lg:block hidden'>
                <Button event={menuOpen} color='white' btnType='nav' type='button' >
                    <Icon size="24px" type="menu" colorClass='fill-white' />
                </Button>
            </Wrapper>
            
    </Element>
    );
}

export default Header;
