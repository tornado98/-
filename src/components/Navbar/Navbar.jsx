import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LogoContainer, Nav, NavLink, NavLinkContainer } from './NavElements';
import LogoImage from '../../../public/assets/images/logo.png';




const Navbar = () => {
  return (
    <Nav>
        <LogoContainer>
            <Link href="/">
            <Image
                src={LogoImage}
                alt="logo"
                width={300}
                height={100}
            />
            </Link>
        </LogoContainer>
        <NavLinkContainer>
            <NavLink  href="/About">
                店舗概要
            </NavLink>
            <NavLink  href="/Services">
                サービス
            </NavLink>
            <NavLink  href="/Access">
                アクセス
            </NavLink>
            <NavLink  href="/Contact">
                お問い合わせ
            </NavLink>

        </NavLinkContainer>

    </Nav>
  )
}

export default Navbar