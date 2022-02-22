import styled from "styled-components";

export const Nav = styled.nav`

  display: flex;
  justify-content: space-between;

  background-color: #8B4726;
  
  margin: 1%;
`

export const Brand = styled.div`

  display: flex;

  margin-left: 1%;
  padding: 0%;

`

export const NameCompany = styled.h2`

  font-size: 28px;
  margin-top: 18%;
  padding: 10PX;
  color: ${props => props.color || '#90ee08'};

  &:hover{
    text-shadow: 4px 4px #ffffff;
    font-size: 38px;
    
  }
`

export const Logo = styled.img`

  background-color: #000000;
  margin: 2%;
  margin-left: 0%;
`

export const NavItem = styled.div`

  display: flex;

  margin: 2%;
  margin-top: 3%;

`

export const Link = styled.a`

  padding: 10px;
  font-size: 28px;

`