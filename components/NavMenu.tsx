import React, { useState, useEffect, useRef } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function NavMenu() {
  const [currentPage, setCurrentpage] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCV, setIsOpenCV] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    if (window.location) {
      setCurrentpage(window.location.pathname);
    }
  }, [setCurrentpage, menuRef]);

  const toggle = () => {
    if (window && window.innerWidth < 768) setIsOpen(!isOpen);
  };

  const openCV = () => {
    setIsOpenCV(!isOpenCV);
    console.log(currentPage);
  };

  return (
    <Navbar id="navigation" color="light" light expand="md" fixed="top">
      <NavbarBrand href="/">Cours Web</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/cv">Mon CV</NavLink>
          </NavItem>
          <Collapse
            className="submenu"
            ref={menuRef}
            isOpen={currentPage == "/cv"}
          >
            <NavItem>
              <NavLink href="#professional" onClick={toggle}>
                Expérience professionnelle
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#scolar" onClick={toggle}>
                Parcours scolaire
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#hobbies" onClick={toggle}>
                Centres d'intérêt
              </NavLink>
            </NavItem>
          </Collapse>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
