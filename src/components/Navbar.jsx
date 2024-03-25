import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from '@nextui-org/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['About Us', 'Services', 'Products', 'Carriers', 'Sign Up'];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="/">
            <p className="font-bold text-inherit">PBS</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-7" justify="center">
        <NavbarItem>
          <Link className="text-[#A6A6A6]" to="/about-us">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/services" className="text-[#A6A6A6]">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-[#A6A6A6]" to="/products">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-[#A6A6A6]" to="/carriers">
            Carriers
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="text-[#A6A6A6] font-semibold"
            color="primary"
            to="/"
            variant="flat"
          >
            Contact us
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
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
                className="w-full text-[#ffffff]"
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                size="lg"
              >
                {item}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
