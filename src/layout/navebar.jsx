import React, { useContext } from "react";
import { Icon, NavBarContainer, IconText } from "./styles";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  Collapse,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { AuthContext } from "../contexts/auth";

export default function Navebar() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <NavBarContainer>
      <Navbar color="dark" expand="md" fixed="top" full dark>
        <NavbarBrand styles={{ paddingleft: 15 }} href="/">
          <Icon />
          <IconText>
            Crypto<span style={{ color: "#00dcc9" }}>CALC</span>
          </IconText>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="https://gitlab.com/kassioborges">GitLab</NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Carteiras recomendadas
              </DropdownToggle>
              <DropdownMenu right dark>
                <DropdownItem href="https://www.exodus.com/">
                  Exodus Wallet
                </DropdownItem>
                <DropdownItem href="https://yoroi-wallet.com/#/">
                  Yoroi Wallet
                </DropdownItem>
                <DropdownItem href="https://metamask.io/">
                  MetaMask
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <UncontrolledDropdown>
            <DropdownToggle caret>Bem vindo {user && user.nome}</DropdownToggle>
            <DropdownMenu right dark>
              <DropdownItem onClick={signOut}>Sair</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </NavBarContainer>
  );
}
