import Link from "next/link";
import styled from "styled-components";



export const Nav = styled.nav`
    height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.15);
    position: sticky;
    backdrop-filter: blur(20px);
    z-index: 100;
`


export const LogoContainer = styled.div`
    padding-left: 5rem;
    padding-top: 1rem;
    text-align: center;
    align-items: center;
    

`

export const NavLinkContainer =styled.div`
display: flex;
padding-top: 1rem;
padding-right: 5rem;
text-align: center;
align-items: center;

`

export const NavLink = styled(Link)`
    padding: 1rem ;
    margin: 1rem;

    &:hover {
        color: #a6a2a2;
    }

    &.active {
        color: #FFCF96; 
    }



`

export const IconContainer =styled.div`
`