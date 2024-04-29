"use client"
import './style.css'
import Element from '@/app/components/UI/Element/Element';
import Wrapper from '@/app/components/UI/Wrapper/Wrapper';
import Logo from '@/app/components/UI/SiteLogo/Logo';
import Button from '@/app/components/Form/Button/Button';
import Navigation from '@/app/components/UI/Navigation/Navigation';
import { useEffect, useState } from 'react';
import Icon from '@/app/components/UI/Icons/Icon';
import { headerNav } from '@/app/data/Menu';
import { usePathname } from 'next/navigation';
import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from '@/app/components/UI/Container/Container';
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [mode,setMode] = useState('dark')
    const pathname = usePathname();
    const [open,setOpen] = useState(false); 
    const menuOpen = ()=>{
        setOpen(true);
    }
    const menuClose = ()=>{
        setOpen(false);
    }
useEffect(()=>{
    const panels = gsap.utils.toArray(".site-header");
    panels.forEach((panel, index) => {
        const op3 = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "20px top",
            end: "100% center",
            scrub: 1,
            markers: false,
            onEnter: ({ progress, direction, isActive }) => {
              panel.classList.add("bg-primary");
              setMode('light');
            },
            onLeaveBack: ({ progress, direction, isActive }) => {
              panel.classList.remove("bg-primary");
              setMode('dark');
            }
          }
        });
      });
},[])
const close = ()=>{
  setOpen(false)
}
    return (
    <Element tag="header" className={`site-header max-lg:py-[20px] sticky top-0 left-0 w-full z-[999] transition-all  duration-500`}>
      <Container className='flex items-center justify-between '>
            <Wrapper className="max-w-[162.16px] max-xl:max-w-[130.16px]">
            <Logo mode={mode}/>
            </Wrapper>
            <Wrapper className={`mobile-drawer z-10 max-tab:z-[99]   max-tab:fixed max-tab:w-[80%] max-tab:h-full max-tab:bg-white max-tab:top-0 max-tab:transition-all max-tab:duration-300 ${open ? 'left-0' : 'left-[-100%]'}`}>
            <Wrapper className='hidden max-lg:flex justify-end border-b border-c-gray-400'>
            <Button event={menuClose} color='white' btnType='nav' type='button' >
                    <Icon size="24px" type="close" colorClass='fill-c-gray-600' />
                </Button>
                </Wrapper>
            <Navigation linkList={headerNav} style='hoz' mode={mode} close={close}>

            </Navigation>
            </Wrapper>
            <Button color='white' btnType='nav' additionalCss={`fixed w-full h-full top-0 left-0 bg-black bg-opacity-50 !border-0 ${open ? 'block' : 'hidden'}`} event={menuClose}></Button>
            <Wrapper className='max-lg:block hidden'>
                <Button event={menuOpen} color='gray' btnType='nav' type='button' additionalCss='!p-2' >
                    <Icon size="24px" type="menu" colorClass={`${mode === 'dark' ? ' fill-c-gray-600' : ' fill-white'}`} />
                </Button>
            </Wrapper>
            </Container>
    </Element>
    );
}

export default Header;
