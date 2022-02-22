import { Nav, Brand, NameCompany, Logo, NavItem, Link } from "./style";

import logo from "../../image/logo192.png"

function NavBarH() {

  return(
    <>
      <Nav>
        <Brand>
          <Logo src={logo} />
          <NameCompany>
            Name Company
          </NameCompany>
        </Brand>
        <NavItem>
          <Link>Link</Link>
          <Link>Link</Link>
        </NavItem>
      </Nav>
    </>
  )
  
}

export default NavBarH;