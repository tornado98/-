import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconContainer, LogoContainer, Nav, NavLink, NavLinkContainer } from './NavElements';
import LogoImage from '../../../public/assets/images/logo.png';
import {BsInfoLg} from 'react-icons/bs';
import {BsScrewdriver} from 'react-icons/bs';
import {BsSignpostFill} from 'react-icons/bs';
import {BsPencilSquare} from 'react-icons/bs';
import { useRouter } from 'next/router';




const Navbar = () => {
    const router = useRouter();
    const currentRoute = router.pathname

  return (
    <Nav>
        <LogoContainer>
            <Link href="/" className={currentRoute === '/' ? 'active' : ''}>
            <Image
                src={LogoImage}
                alt="logo"
                width={310}
                height={100}
            />
            </Link>
        </LogoContainer>
        <NavLinkContainer>
            <NavLink  href="/About">
                店舗概要
                <IconContainer>
                    <BsInfoLg size={18}/>
                </IconContainer>
            </NavLink>
            <NavLink  href="/Services">
                サービス
                <IconContainer>
                    <BsScrewdriver size={18}/>
                </IconContainer>
            </NavLink>
            <NavLink  href="/Access">
                アクセス
                <IconContainer>
                    <BsSignpostFill size={18}/>
                </IconContainer>
            </NavLink>
            <NavLink  href="/Contact">
                お問い合わせ
                <IconContainer>
                    <BsPencilSquare size={18}/>
                </IconContainer>
                
            </NavLink>

        </NavLinkContainer>

    </Nav>
  )
}

export default Navbar