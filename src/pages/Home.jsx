import { useLanguage } from "../context/LanguageContext";
import { Button, Image } from "@nextui-org/react";
import profilePic from "../assets/ProfilePic.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-2xl pb-10">
        {language === "es" ? "¡BIENVENID@ A MI WEB!" : " WELCOME TO MY WEB"}
      </h1>
      <div className="flex flex-wrap justify-center ">
        <Image
          isBlurred
          isZoomed
          width={600}
          src={profilePic}
          alt="ProfilePic"
        />
        <div style={{ width: "500px" }}>
          <p className="flex items-start pl-10 pt-6 sm: pl-2 pt-3">
            {language === "es"
              ? "Me llamo Sergio. Soy graduado en Economía por la Universidad de Zaragoza y trabajé durante cinco años en una empresa en España, donde ascendí a gerente, supervisando múltiples locales en todo el país. Además, diseñé páginas web con WordPress para comercios locales. Mi pasión por la tecnología me llevó a cambiar mi carrera hacia el desarrollo web, tanto en la parte de Frontend como en el Backend, mostrando mi adaptabilidad y deseo de aprender. Mi perfil combina habilidades de liderazgo, gestión empresarial y desarrollo web."
              : "My name is Sergio. I hold a degree in Economics from the University of Zaragoza and worked for five years in a Spanish company, where I rose to the position of manager, overseeing multiple locations nationwide. Additionally, I designed websites using WordPress for local businesses. My passion for technology led me to make a career change into web development, both on the Frontend and Backend, demonstrating my adaptability and eagerness to learn. My profile combines leadership skills, business management, and web development expertise."}{" "}
          </p>
          <div>
            <div className="pt-10">
              <Button
                color="primary"
                variant="ghost"
                endContent={""}
                size="lg"
                onClick={() => navigate("/about")}
                className="w-96	"
              >
                {language === "es" ? "Más Sobre Mí" : "More About Me"}
              </Button>
            </div>
            <div className="flex justify-around pt-5">
              <Button
                color="primary"
                variant="ghost"
                endContent={""}
                size="lg"
                onClick={() => navigate("/proyects")}
                className="w-96"
              >
                {language === "es"
                  ? "Descubre Mis Proyectos"
                  : " Discover All My Proyects"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
