import Link from "next/link";
import styled from "styled-components";



export const Nav = styled.nav`
    height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
`


export const LogoContainer = styled.div`
padding-left: 10rem;
padding-top: 1rem;
text-align: center;

`

export const NavLinkContainer =styled.div`
padding-right: 3rem;

`

export const NavLink = styled(Link)`
padding: 1rem ;
margin: 1rem;

`