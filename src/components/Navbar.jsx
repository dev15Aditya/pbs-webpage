import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Popover,
  PopoverTrigger,
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import ContactDetails from './ContactDetails';

export default function App() {
  const navbarToggleRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(
    window.location.href.split(`${window.location.origin}`)
  );

  const menuItems = [
    'About Us',
    'Services',
    'Products',
    'Our People',
    // 'Careers',
    'Sign Up',
  ];

  const HandleSideMenu = (link) => {
    setActiveMenu(link);
    isMenuOpen && navbarToggleRef.current.click();
  };

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="bg-transparent w-[100vw]"
      >
        <NavbarContent className="">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
            ref={navbarToggleRef}
            onChange={(isSelected) => setIsMenuOpen(isSelected)}
          />
          <NavbarBrand>
            <Link to="/" onClick={() => HandleSideMenu('/')}>
              <div className="flex items-center">
                <img className="h-16 md:h-20 w-auto" src="./NLogo.png" alt="" />
                <img className="h-5 md:h-8 w-auto " src="./NLogo2.png" alt="" />
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-7 " justify="center">
          <NavbarItem>
            <Link className="text-[#A6A6A6] hover:text-white" to="/about-us">
              About Us
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link to="/services" className="text-[#A6A6A6] hover:text-white">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-[#A6A6A6] hover:text-white" to="/products">
              Products
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-[#A6A6A6] hover:text-white" to="/our-people">
              Our People
            </Link>
          </NavbarItem>
          {/* <NavbarItem>
          <Link className="text-[#A6A6A6] hover:text-white" to="/carriers">
            Careers
          </Link>
        </NavbarItem> */}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Popover showArrow offset={10} placement="bottom" backdrop>
              <PopoverTrigger>
                <Button
                  className="text-[#A6A6A6] border-[2px] border-[#272B36] bg-[#050507]  hover:font-semibold hover:text-white"
                  color="primary"
                  to="/"
                  variant="flat"
                >
                  Contact us
                </Button>
              </PopoverTrigger>
              <ContactDetails />
            </Popover>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-transparent">
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              isActive={item.replace(' ', '-').toLowerCase() === activeMenu}
            >
              {index === 4 ? (
                ''
              ) : (
                <Link
                  color={
                    index === 2
                      ? 'primary'
                      : index === menuItems.length - 1
                      ? 'danger'
                      : '#A6A6A6'
                  }
                  className="w-full text-[#ffffff]  hover:font-semibold hover:text-white"
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  size="lg"
{/*                   onClick={() =>
                    HandleSideMenu(item.replace(' ', '-').toLowerCase())
                  } */}
  onClick={() => {
                    HandleSideMenu(item.path);
                    setIsMenuOpen(false); // Close the dropdown explicitly
                  }}
                >
                  {item}
                </Link>
              )}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
