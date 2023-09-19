import { useLanguage } from "../context/LanguageContext";
import { Button, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Atropos from "atropos/react";
import FinapayIco from "../components/SVG/FinapayIco"
import profilePic from "../assets/ProfilePic.jpg";


export default function Home() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <div className="flex flex-col justify-center ">
      <h1 className="text-2xl pb-10 animate-fade-down  animate-once animate-duration-1000 animate-ease-linear">
        {language === "es" ? "¡BIENVENID@ A MI WEB!" : " WELCOME TO MY WEB"}
      </h1>
      
      <div className="flex flex-wrap justify-around gap-4 ">
      <Atropos className="my-atropos animate-fade-right animate-once animate-duration-1000 animate-delay-300 animate-ease-linear"  activeOffset={40}
        shadowScale={1.05}>
        <Image
          isBlurred
          
          width={600}
          src={profilePic}
          alt="ProfilePic"
        />
        </Atropos>
        <div  className="max-w-lg flex flex-col content-between gap-10">
          <p className="flex items-start pl-10 pt-6 sm: pl-2 pt-3 animate-fade-left animate-once animate-duration-1000 animate-delay-500 animate-ease-linear">
            {language === "es"
              ? "Me llamo Sergio. Soy graduado en Economía por la Universidad de Zaragoza y trabajé durante cinco años en una empresa en España, donde ascendí a gerente, supervisando múltiples locales en todo el país. Además, diseñé páginas web con WordPress para comercios locales. Mi pasión por la tecnología me llevó a cambiar mi carrera hacia el desarrollo web, tanto en la parte de Frontend como en el Backend, mostrando mi adaptabilidad y deseo de aprender. Mi perfil combina habilidades de liderazgo, gestión empresarial y desarrollo web."
              : "My name is Sergio. I hold a degree in Economics from the University of Zaragoza and worked for five years in a Spanish company, where I rose to the position of manager, overseeing multiple locations nationwide. Additionally, I designed websites using WordPress for local businesses. My passion for technology led me to make a career change into web development, both on the Frontend and Backend, demonstrating my adaptability and eagerness to learn. My profile combines leadership skills, business management, and web development expertise."}{" "}
          </p>
          <div className="flex flex-col justify-around gap-6">
            <div>
              <Button
                color="primary"
                variant="ghost"
                endContent={""}
                size="lg"
                onClick={() => navigate("/about")}
                className="w-96	animate-flip-down animate-once animate-delay-700 animate-ease-linear"
              >
                {language === "es" ? "Más Sobre Mí" : "More About Me"}
              </Button>
            </div>
            <div>
              <Button
                color="primary"
                variant="ghost"
                endContent={""}
                size="lg"
                onClick={() => navigate("/proyects")}
                className="w-96 animate-flip-up animate-once animate-delay-700 animate-ease-linear"
              >
                {language === "es"
                  ? "Descubre Mis Proyectos"
                  : " Discover All My Proyects"}
              </Button>
            </div>
            <div className="flex gap-6 pt-5 justify-center animate-fade-up animate-once animate-delay-[800ms] animate-ease-linear">
              <FinapayIco />
            </div>
          </div>
        </div>
      </div>
 
      
      
     
    </div>
  );
}
