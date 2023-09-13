import { Image } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useLanguage } from "../context/LanguageContext";

import finapayPic from "../assets/finapay.png";
import finapayPic1 from "../assets/finapay-1.png";
import finapayPic2 from "../assets/finapay-2.png";
import finapayLogo from "../assets/finapayLogoSinFondo.png";
import FinapayIco from "../components/SVG/FinapayIco";
import finapayMov1 from "../assets/finapay-movil.png"
import finapayMov2 from "../assets/finapay-movil1.png"

export default function Finapay() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center mb-10">
        <Image isBlurred src={finapayLogo} width={300} />
      </div>
      <div className="flex justify-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoHeight={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="max-w-2xl	"
        >
          <SwiperSlide>
            <Image src={finapayPic} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={finapayPic1} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={finapayPic2} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center m-10">
        <FinapayIco />
      </div>
      <div >
        
        <p >
          {" "}
          {language === "es"
            ? "Gestor de pagos, transferencias y gastos. También con posibilidades de inversión"
            : "Pay and expenses manager. Also with an investment option"}
        </p>
        <br />
        <p>
          {language === "es"
            ? "Este proyecto sirvió como la culminación de mi experiencia en el Bootcamp de Desarrollo Web de Ironhack. Fue construido utilizando una variedad de tecnologías, incluyendo HTML, CSS, TailwindCss, Next Ui, Javascript, Vite, React, React Context, React device detect, Nodemailer, axios, chart.js, framer-motion, moment. Siguiendo la orientación de nuestro instructor, aseguré que la aplicación fuera completamente receptiva, garantizando su compatibilidad en diferentes tamaños de pantalla y dispositivos, incluyendo un Samsung g20 como ejemplo."
            : "This project served as the culmination of my journey through Ironhack's Web Developer Bootcamp. It was constructed using a diverse technology stack, including HTML, CSS, TailwindCss, Next Ui, Javascript, Vite, React, React Context, React device detect, Nodemailer, axios, chart.js, framer-motion, moment.. Following the guidance of our instructor, I made sure the app was fully responsive, ensuring compatibility across different screen sizes and devices, including an Samsung g20 as an example."}{" "}
        </p>
        <br />
          <div className="flex justify-center gap-4">
            <Image src={finapayMov2} width={150}/>
            <Image src={finapayMov1} width={150}/>
          </div>
        <p>
          {language === "es"
            ? "El proyecto se divide en dos repositorios, uno para el lado del cliente y otro para el servidor. Representa el desafío más grande que he enfrentado en mi trayecto de programación, y me enorgullezco de haber reunido esta variedad de tecnologías para crear algo completamente desde cero. Tengo planes de seguir desarrollando este proyecto, ya que hay características adicionales que me gustaría incorporar en el futuro."
            : "The project is organized into two repositories, one for the client-side and another for the server. It stands as the most challenging endeavor I've undertaken in my coding journey, and I take great pride in assembling this array of technologies to create something entirely from scratch. I have plans to continue developing this project, as there are additional features I would like to incorporate in the future."}
        </p>
        <br />
        <p>
          {language === "es"
            ? "Finapay obtuvo la distinción de ser seleccionado como uno de los finalistas entre todos los proyectos presentados en el Bootcamp de Desarrollo Web. Tuve el privilegio de mostrar la aplicación durante el Hackshow, un evento prestigioso en Ironhack que celebra los logros de los finalistas de cada curso"
            : "Finapay earned the distinction of being selected as one of the finalists among all the projects presented in Web Development Bootcamps. I had the privilege of showcasing the app during the Hackshow, a prestigious event at Ironhack that celebrates the accomplishments of finalists from each course "}
        </p>
      </div>
    </div>
  );
}
