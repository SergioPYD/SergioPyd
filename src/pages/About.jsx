import { useLanguage } from "../context/LanguageContext";
import { Image } from "@nextui-org/react";
import profilePic from "../assets/ProfilePic1.jpg";
import profilePic2 from "../assets/ProfilePic2.jpg";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <div className="flex flex-col ">
      <div className="flex flex-wrap justify-center items-center ">
        <div style={{ width: "500px" }}>
          <p className="flex justify-center content-center mb-10 md:pr-12">
            {language === "es"
              ? "Soy graduado en Economía por la Universidad de Zaragoza y cuento con una sólida experiencia laboral que abarca diversas áreas. Durante cinco años, trabajé en una empresa en España, donde ascendí al cargo de gerente y supervisé múltiples locales en todo el país. En esta posición, mi rol principal implicaba la gestión y liderazgo de un equipo de personas, demostrando mis habilidades de liderazgo y capacidad para tomar decisiones cruciales. Además de mi trabajo en la empresa, me aventuré en el mundo de la tecnología al diseñar páginas web utilizando la plataforma WordPress. Ofrecí mis servicios de diseño web a comercios locales, lo que muestra mi versatilidad y habilidades emprendedoras."
              : "My name is Sergio.I have a degree in Economics from the University of Zaragoza and I have a solid work experience that spans various domains. For five years, I worked for a company in Spain, where I climbed the ranks to become a manager, overseeing multiple locations across the country. In this role, my main responsibilities involved team management and leadership, showcasing my leadership skills and ability to make critical decisions. In addition to my work within the company, I ventured into the world of technology by designing websites using the WordPress platform. I offered my web design services to local businesses, demonstrating my versatility and entrepreneurial skills."}{" "}
          </p>
        </div>
              <Image
                isBlurred
                isZoomed
                width={400}
                src={profilePic}
                alt="ProfilePic"
              />
      </div>
      <hr className="mt-10 mb-10"/>
      <div className="flex flex-wrap justify-center items-center ">
        <Image
          isBlurred
          isZoomed
          width={400}
          src={profilePic2}
          alt="ProfilePic"
        />
        <div style={{ width: "500px" }}>
          <p className="flex items-start mt-10 md:pl-12">
            {language === "es"
              ? "En la actualidad, he dado un giro en mi vida profesional al enfocarme en el desarrollo web. Estoy interesado tanto en la parte de front-end como en la de back-end, lo que demuestra mi deseo de aprender y crecer en un campo tecnológico en constante evolución. Mi historia refleja una combinación única de habilidades en liderazgo, gestión empresarial y desarrollo web. Este cambio en mi carrera muestra mi adaptabilidad y disposición para enfrentar nuevos desafíos, lo que me coloca en una posición prometedora para mi futuro profesional en el campo de la tecnología y el desarrollo web."
              : "Currently, I have made a significant career shift by focusing on web development, encompassing both front-end and back-end aspects. This reflects my eagerness to learn and grow in a constantly evolving technological field. My story reflects a unique blend of leadership, business management, and web development skills. This career transition demonstrates my adaptability and willingness to take on new challenges, positioning me promisingly for my professional future in the technology and web development realm."}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
