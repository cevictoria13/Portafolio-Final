import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, } from "@nextui-org/react";
//import {AcmeLogo} from "./AcmeLogo.js";

const Appbar = () => {

  const links = [
    {
      nombre: "About",
      href: "/about"
    },
    {
      nombre: "Projects",
      href: "/projects"
    },
    {
      nombre: "Contact",
      href: "/contact"
    },
  ];

  return (
    <Navbar>
      <NavbarBrand>
        {/*<AcmeLogo />*/}
        <p className="font-bold text-inherit">CSV</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((link, i) => (
          <NavbarItem>
            <Link color="foreground" href={link.href}>
              {link.nombre}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default Appbar;

{/*} </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      */}



