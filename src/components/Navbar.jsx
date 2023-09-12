import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Switch,
} from "@nextui-org/react";
import { useState } from "react";
import LogoImg from "../assets/Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Spanish } from "./Spanish";
import { English } from "./English";
import { useLanguage } from "../context/LanguageContext";
import ModalContact from "./ModalContact";

export default function NavbarOne() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  const checkActive = (info) => {
    if (info.isActive) {
      return "linkActive";
    } else {
      return "Navbar";
    }
  };

  return (
    <nav>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="mb-4"
      >
        <NavbarContent justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden flex pr-8"
            style={{ color: "blue" }}
          />
          <NavbarBrand justify="center">
            <NavLink to={"/"}>
              {" "}
              <img
                style={{ display: "flex", textAlign: "center" }}
                src={LogoImg}
                alt="page-logo"
                width={200}
              />
            </NavLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          justify="end"
          className="hidden sm:flex gap-4 justify-center"
        >
          <NavbarItem isActive className="flex gap-7">
            <NavLink to={"/"} className={checkActive}>
              HOME
            </NavLink>

            <NavLink to={"/proyects"} className={checkActive} end={true}>
              {language === "es" ? "PROYECTOS" : "PROYECTS"}
            </NavLink>

            <NavLink to={"/about"} className={checkActive} end={true}>
              {language === "es" ? "SOBRE MÍ" : "ABOUT"}
            </NavLink>

            <ModalContact/>
            {/* <NavLink to={"/contact"} className={checkActive} end={true}>
              {language === "es" ? "CONTACTA" : "CONTACT"}
            </NavLink> */}
          </NavbarItem>{" "}
          <NavbarItem style={{ height: "40px", display: "flex", alignItems: "center" }}>
            
            <Switch
              defaultSelected={language === "es"}
              size="lg"
              color="primary"
              thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                  <Spanish className={className} />
                ) : (
                  <English className={className} />
                )
              }
              onChange={handleLanguageToggle}
              className="pl-10"
             />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem style={{ height: "40px", display: "flex", alignItems: "center" }}> 
          <Switch
              defaultSelected={language === "es"}
              size="md"
              color="primary"
              thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                  <Spanish className={className} />
                ) : (
                  <English className={className} />
                )
              }
              onChange={handleLanguageToggle}
              className="pt-16"
             />
          </NavbarMenuItem>
          <NavbarMenuItem className="flex flex-col gap-8 pt-10 ">
            <NavLink
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                navigate("/");
              }}
            >
              Home
            </NavLink>
            <NavLink
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                navigate("/proyects");
              }}
            >
              {language === "es" ? "Proyectos" : "Proyects"}
            </NavLink>
            <NavLink
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                navigate("/about");
              }}
            >
              {language === "es" ? "Sobre Mi" : "About"}
            </NavLink>
            <ModalContact/>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
      <hr className="divider mb-10" />
    </nav>
  );
}
