import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import LogoImg from "../assets/Logo.png";
import { NavLink } from "react-router-dom";

export default function NavbarOne() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="flex justify-center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex justify-center">
          <NavLink to={"/"}>
            {" "}
            <img src={LogoImg} alt="page-logo" width={200} />
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <NavLink to={"/"} aria-current="page">
            HOME
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to={"/proyects"} >
            Proyectos
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to={"/about"} >
            Sobre Mí
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to={"/contact"}>
            Contacta
          </NavLink>
        </NavbarItem>{" "}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex"></NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem  className="flex flex-col gap-8 pt-8 ">
        <NavLink to={"/"} aria-current="page">
            HOME
          </NavLink>
          <NavLink color="foreground" to={"/proyects"} >
            Proyectos
          </NavLink>
          <NavLink color="foreground" to={"/about"} >
            Sobre Mí
          </NavLink>
          <NavLink color="foreground" to={"/contact"}>
            Contacta
          </NavLink>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
