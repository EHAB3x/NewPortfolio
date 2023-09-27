import './css/Header.css'
import React, { useEffect } from 'react';
import logo from '../Images/hexagon-svgrepo-com.svg'
import {  Navbar,NavbarItem ,   NavbarBrand,   NavbarContent,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem, Button} from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import resume from '../Resources/resume.pdf'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);  
    const menuItems = [
        "About",
        "Skills",
        "Projects",
        "Contact",
    ];
  return (
    <Navbar className='head' onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
      <NavbarContent>
        <NavbarBrand>
            <div className="logo">
                <img src={logo} alt="logo"/>
                <span>E</span>
            </div>
        </NavbarBrand>

        <NavbarContent className="sm:flex gap-4 links" justify="center">
            {menuItems.map((item , index)=>(
                <NavbarItem key={index}>
                <Link color="foreground" href={`#${item}`}>
                    <span>{`0${index + 1}.`}</span>{item}
                </Link>
                </NavbarItem>
            ))}
            <a href={resume} target='_blank' className='resume' rel="noreferrer">
                Resume
            </a>
      </NavbarContent>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden menubtn"
        />
      </NavbarContent>  
      <NavbarMenu className='menu'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={`#${item}`}
              size="lg"
            >
              <span>{`0${index + 1}.`}</span>{item}
            </Link>
          </NavbarMenuItem>
        ))}
        <a href={resume} target='_blank' className='resume mt-4' rel="noreferrer">
                Resume
        </a>
      </NavbarMenu>
    </Navbar>
  )
}

export default Header