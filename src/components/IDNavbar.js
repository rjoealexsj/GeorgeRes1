import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavabarToggler, NavItem, NavLink, DropdownItem, Nav, Collapse, NavbarText, DropdownToggle, DropdownMenu, NavbarToggler, UncontrolledDropdown, } from 'reactstrap'

export default class IDNavbar extends Component {
    render() {
        return (
            <div>
               <div>
  <Navbar
    color="dark"
    dark
    expand="md"
    fixed=""
    full
  >
    <NavbarBrand href="/">
      VJ
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Staff
          </NavLink>
        </NavItem>
       
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Student
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              First Years
            </DropdownItem>
            <DropdownItem>
              Second Years
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Third Years
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            Portfolios
          </NavLink>
        </NavItem>

      </Nav>
      <NavbarText>
        MENU
      </NavbarText>
    </Collapse>
  </Navbar>
</div> 
            </div>
        )
    }
}
