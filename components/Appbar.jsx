import React from "react";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  NavbarMenuToggle,
  NavbarMenu
} from "@nextui-org/react";
//import {Logo} from "./AcmeLogo.js";

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
    <Navbar className="bg-background/40" >

      {/*navbar responsive XS */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center" >
        <NavbarBrand>
          {/*<AcmeLogo />*/}

          <Link href="/">
            <p className="font-bold text-white">Portafolio</p>
          </Link>
          <p className="font-bold text-secondary">CSV</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu>
        {links.map((link) => (
          <NavbarItem >
            <Link className="text-white" href={link.href}>
              {link.nombre}
            </Link>
          </NavbarItem>
        ))}
      </NavbarMenu>

      {/*navbar responsive XL */}
      <NavbarContent className="hidden sm:flex gap-4" justify="start" >
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-secondary">Portafolio</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((link, i) => (
          <NavbarItem key={i}>
            <Link className="text-white" href={link.href}>
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



