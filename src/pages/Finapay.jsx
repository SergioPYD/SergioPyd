import { Image, Link } from "@nextui-org/react";
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
import finapayMov1 from "../assets/finapay-movil.png";
import finapayMov2 from "../assets/finapay-movil1.png";
import finapayVisual from "../assets/finapay-visual.png";

export default function Finapay() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto">
      <div className="my-10">
        <Link href="https://finapay.netlify.app/" isExternal >
        <Image isBlurred src={finapayLogo} width={300} />
        </Link>
      </div>
      <div className="">
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
      <div className="mt-10 flex gap-4">
        <FinapayIco />
      </div>
      <div className="flex flex-col my-10 gap-8">
        <p>
          
          {language === "es"
            ? "Gestor de pagos, transferencias y gastos. También con posibilidades de inversión. Proyecto realizado con mi compañero de Ironhack"
            : "Pay, transfers and expenses manager. Also with an investment option. Proyect made with my Ironhack's partner"}
        <a href="https://www.linkedin.com/in/angelariasdom/" className="link" target="_blank"> Ángel Arias</a></p>
        
        <p>
          {language === "es"
            ? "Este proyecto sirvió como la culminación de mi experiencia en el Bootcamp de Desarrollo Web de Ironhack. Fue construido utilizando una variedad de tecnologías, incluyendo HTML, CSS, TailwindCss, Next Ui, Javascript, Vite, React, React Context, React device detect, Nodemailer, axios, chart.js, framer-motion, moment. Siguiendo la orientación de nuestro instructor, aseguré que la aplicación fuera completamente receptiva, garantizando su compatibilidad en diferentes tamaños de pantalla y dispositivos, incluyendo un Samsung Galaxy S20 Ultra como ejemplo."
            : "This project served as the culmination of my journey through Ironhack's Web Developer Bootcamp. It was constructed using a diverse technology stack, including HTML, CSS, TailwindCss, Next Ui, Javascript, Vite, React, React Context, React device detect, Nodemailer, axios, chart.js, framer-motion, moment.. Following the guidance of our instructor, I made sure the app was fully responsive, ensuring compatibility across different screen sizes and devices, including an Samsung Galaxy S20 Ultra as an example."}{" "}
        </p>
       
        <div className="flex justify-center gap-4">
          <Image src={finapayMov2} width={150} />
          <Image src={finapayMov1} width={150} />
        </div>
        <p>
          {language === "es"
            ? "El proyecto se divide en dos repositorios, uno para el lado del cliente y otro para el servidor. Representa el desafío más grande que he enfrentado en mi trayecto de programación, y me enorgullezco de haber reunido esta variedad de tecnologías para crear algo completamente desde cero. Tengo planes de seguir desarrollando este proyecto, ya que hay características adicionales que me gustaría incorporar en el futuro."
            : "The project is organized into two repositories, one for the client-side and another for the server. It stands as the most challenging endeavor I've undertaken in my coding journey, and I take great pride in assembling this array of technologies to create something entirely from scratch. I have plans to continue developing this project, as there are additional features I would like to incorporate in the future."}
        </p>
        <Image is isZoomed src={finapayVisual} />
        
        <p>
          {language === "es"
            ? "Finapay obtuvo la distinción de ser seleccionado como uno de los finalistas entre todos los proyectos presentados en el Bootcamp de Desarrollo Web. Tuve el privilegio de mostrar la aplicación durante el Hackshow, un evento prestigioso en Ironhack que celebra los logros de los finalistas de cada curso"
            : "Finapay earned the distinction of being selected as one of the finalists among all the projects presented in Web Development Bootcamps. I had the privilege of showcasing the app during the Hackshow, a prestigious event at Ironhack that celebrates the accomplishments of finalists from each course "}
        </p>
       
        <div className="flex justify-center gap-4">
          <Link
            isBlock
            showAnchorIcon
            anchorIcon={
              <svg
                className="m-1"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#22c55e"
                  d="M3.773 16.16c-.82-1.06-1.063-1.406-1.25-1.745l-.039-.073a10.42 10.42 0 0 1-.122-.226a3.352 3.352 0 0 1-.14-.3c-.174-.432-.207-.813.07-1.165c.485-.62 1.273-.445 1.937.123c.428.365 1.066 1.02 1.455 1.486c.255.305.72.621 1.06.734a.83.83 0 0 0 .1.027l.178-.56a7.352 7.352 0 0 1-1.869-.965c-1.3-.936-2.43-2.773-2.333-4.174c.06-.885.36-1.753.89-2.596a12.72 12.72 0 0 1-.073-1.238c0-.489.16-1.02.467-1.603a.661.661 0 0 1 .566-.352a5.853 5.853 0 0 1 1.598.17c.455.115.936.317 1.445.605c.762-.158 1.5-.238 2.216-.238c.717 0 1.463.08 2.239.239c.662-.371 1.244-.623 1.752-.755c.66-.171 1.254-.12 1.743.182a.659.659 0 0 1 .175.158c.3.388.466.903.52 1.538c.042.484.027.965-.045 1.442c.433.651.715 1.483.854 2.49c.226 1.644-.525 3.337-1.718 4.312c-.556.454-1.32.81-2.294 1.08c.062.216.106.431.132.646c.044.354.075 1.304.096 2.89c1.102-.574 1.957-1.14 2.565-1.695c1.035-.943 1.815-2.281 2.323-3.835c.425-1.3.507-2.397.297-3.606c-.257-1.47-.627-2.669-1.184-3.631c-.652-1.126-1.692-2.19-2.936-2.968c-1.19-.746-3.12-1.245-4.64-1.245c-1.596 0-3.382.517-4.737 1.473c-1.318.93-2.41 2.33-3.043 3.703c-.501 1.088-.707 2.247-.707 3.958c0 1.386.504 3.07 1.098 4.124c.469.832 1.135 1.62 2.114 2.476c.493.432 1.19.863 2.09 1.289v-.423c-1.205-.28-2.163-.864-2.85-1.752Zm-.357-2.922a.197.197 0 0 0 0-.005v.005Zm1.405 2.122c.57.739 1.411 1.192 2.56 1.36a.658.658 0 0 1 .563.65v1.973a.66.66 0 0 1-.913.606c-1.475-.606-2.597-1.24-3.371-1.917c-1.086-.95-1.847-1.852-2.394-2.82C.568 13.971 0 12.072 0 10.445C0 8.56.238 7.22.827 5.942c.724-1.572 1.959-3.154 3.48-4.227C5.894.595 7.947 0 9.806 0c1.76 0 3.933.562 5.345 1.446c1.424.892 2.616 2.111 3.376 3.424c.649 1.119 1.061 2.453 1.341 4.062c.248 1.421.15 2.734-.341 4.235c-.574 1.753-1.467 3.285-2.686 4.397c-.882.804-2.156 1.591-3.827 2.373a.66.66 0 0 1-.942-.588c-.02-2.149-.053-3.434-.097-3.788a3.274 3.274 0 0 0-.297-.989a.655.655 0 0 1 .46-.919c1.144-.243 1.968-.58 2.47-.99c.855-.699 1.41-1.95 1.249-3.12c-.128-.926-.387-1.626-.764-2.108a.653.653 0 0 1-.127-.53c.09-.45.115-.903.075-1.362c-.028-.326-.092-.572-.183-.742c-.145-.048-.341-.046-.606.023c-.43.111-.98.36-1.64.745a.664.664 0 0 1-.482.075a10.036 10.036 0 0 0-2.202-.261c-.693 0-1.42.086-2.179.26a.664.664 0 0 1-.492-.079c-.49-.296-.93-.492-1.314-.588c-.27-.068-.55-.11-.837-.126c-.101.251-.15.464-.15.638c0 .342.03.786.09 1.328a.653.653 0 0 1-.108.437c-.488.724-.752 1.441-.801 2.159c-.062.885.826 2.327 1.79 3.021c.595.429 1.292.75 2.093.962a.656.656 0 0 1 .46.831l-.503 1.587a.658.658 0 0 1-.394.416c-.401.152-.83.152-1.26.01c-.572-.19-1.244-.647-1.657-1.141a10.733 10.733 0 0 0-.354-.4c.136.18.302.396.508.662Z"
                />
              </svg>
            }
            href="https://github.com/aaridoms/finapay-server"
            isExternal
            color="success"
          >
            SERVER CODE
          </Link>
          <Link
            isBlock
            showAnchorIcon
            anchorIcon={
              <svg
                className="m-1"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#3b82f6"
                  d="M3.773 16.16c-.82-1.06-1.063-1.406-1.25-1.745l-.039-.073a10.42 10.42 0 0 1-.122-.226a3.352 3.352 0 0 1-.14-.3c-.174-.432-.207-.813.07-1.165c.485-.62 1.273-.445 1.937.123c.428.365 1.066 1.02 1.455 1.486c.255.305.72.621 1.06.734a.83.83 0 0 0 .1.027l.178-.56a7.352 7.352 0 0 1-1.869-.965c-1.3-.936-2.43-2.773-2.333-4.174c.06-.885.36-1.753.89-2.596a12.72 12.72 0 0 1-.073-1.238c0-.489.16-1.02.467-1.603a.661.661 0 0 1 .566-.352a5.853 5.853 0 0 1 1.598.17c.455.115.936.317 1.445.605c.762-.158 1.5-.238 2.216-.238c.717 0 1.463.08 2.239.239c.662-.371 1.244-.623 1.752-.755c.66-.171 1.254-.12 1.743.182a.659.659 0 0 1 .175.158c.3.388.466.903.52 1.538c.042.484.027.965-.045 1.442c.433.651.715 1.483.854 2.49c.226 1.644-.525 3.337-1.718 4.312c-.556.454-1.32.81-2.294 1.08c.062.216.106.431.132.646c.044.354.075 1.304.096 2.89c1.102-.574 1.957-1.14 2.565-1.695c1.035-.943 1.815-2.281 2.323-3.835c.425-1.3.507-2.397.297-3.606c-.257-1.47-.627-2.669-1.184-3.631c-.652-1.126-1.692-2.19-2.936-2.968c-1.19-.746-3.12-1.245-4.64-1.245c-1.596 0-3.382.517-4.737 1.473c-1.318.93-2.41 2.33-3.043 3.703c-.501 1.088-.707 2.247-.707 3.958c0 1.386.504 3.07 1.098 4.124c.469.832 1.135 1.62 2.114 2.476c.493.432 1.19.863 2.09 1.289v-.423c-1.205-.28-2.163-.864-2.85-1.752Zm-.357-2.922a.197.197 0 0 0 0-.005v.005Zm1.405 2.122c.57.739 1.411 1.192 2.56 1.36a.658.658 0 0 1 .563.65v1.973a.66.66 0 0 1-.913.606c-1.475-.606-2.597-1.24-3.371-1.917c-1.086-.95-1.847-1.852-2.394-2.82C.568 13.971 0 12.072 0 10.445C0 8.56.238 7.22.827 5.942c.724-1.572 1.959-3.154 3.48-4.227C5.894.595 7.947 0 9.806 0c1.76 0 3.933.562 5.345 1.446c1.424.892 2.616 2.111 3.376 3.424c.649 1.119 1.061 2.453 1.341 4.062c.248 1.421.15 2.734-.341 4.235c-.574 1.753-1.467 3.285-2.686 4.397c-.882.804-2.156 1.591-3.827 2.373a.66.66 0 0 1-.942-.588c-.02-2.149-.053-3.434-.097-3.788a3.274 3.274 0 0 0-.297-.989a.655.655 0 0 1 .46-.919c1.144-.243 1.968-.58 2.47-.99c.855-.699 1.41-1.95 1.249-3.12c-.128-.926-.387-1.626-.764-2.108a.653.653 0 0 1-.127-.53c.09-.45.115-.903.075-1.362c-.028-.326-.092-.572-.183-.742c-.145-.048-.341-.046-.606.023c-.43.111-.98.36-1.64.745a.664.664 0 0 1-.482.075a10.036 10.036 0 0 0-2.202-.261c-.693 0-1.42.086-2.179.26a.664.664 0 0 1-.492-.079c-.49-.296-.93-.492-1.314-.588c-.27-.068-.55-.11-.837-.126c-.101.251-.15.464-.15.638c0 .342.03.786.09 1.328a.653.653 0 0 1-.108.437c-.488.724-.752 1.441-.801 2.159c-.062.885.826 2.327 1.79 3.021c.595.429 1.292.75 2.093.962a.656.656 0 0 1 .46.831l-.503 1.587a.658.658 0 0 1-.394.416c-.401.152-.83.152-1.26.01c-.572-.19-1.244-.647-1.657-1.141a10.733 10.733 0 0 0-.354-.4c.136.18.302.396.508.662Z"
                />
              </svg>
            }
            href="https://github.com/aaridoms/finapay-client"
            isExternal
            color="primary"
          >
            CLIENT CODE
          </Link>
          <Link
            isBlock
            showAnchorIcon
            anchorIcon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#a855f7"
                  d="M5.453 4.167a.726.726 0 0 0-1.027-.01A8.225 8.225 0 0 0 2 10a8.228 8.228 0 0 0 2.604 6.015a.725.725 0 0 0 1.01-.025c.316-.316.277-.819-.027-1.11A6.73 6.73 0 0 1 3.5 10c0-1.846.741-3.52 1.943-4.738c.29-.295.32-.785.01-1.095ZM7.214 5.93a.714.714 0 0 0-1.008-.016A5.733 5.733 0 0 0 4.5 10a5.73 5.73 0 0 0 1.893 4.264a.713.713 0 0 0 .983-.037c.328-.328.267-.844-.041-1.134A4.237 4.237 0 0 1 6 10c0-1.15.457-2.194 1.2-2.96c.286-.294.333-.793.014-1.111Zm5.572 0a.714.714 0 0 1 1.008-.016A5.733 5.733 0 0 1 15.5 10a5.73 5.73 0 0 1-1.893 4.264a.713.713 0 0 1-.983-.037c-.328-.328-.267-.844.041-1.134A4.237 4.237 0 0 0 14 10c0-1.15-.457-2.194-1.2-2.96c-.286-.294-.333-.793-.014-1.111Zm1.761-1.762a.726.726 0 0 1 1.027-.01A8.225 8.225 0 0 1 18 10a8.228 8.228 0 0 1-2.604 6.015a.725.725 0 0 1-1.01-.025c-.316-.316-.277-.819.028-1.11A6.73 6.73 0 0 0 16.5 10c0-1.846-.741-3.52-1.943-4.738c-.29-.295-.32-.785-.01-1.095ZM10 8.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z"
                />
              </svg>
            }
            href="https://finapay.netlify.app/"
            isExternal
            color="secondary"
          >
            SEE IT LIVE
          </Link>
        </div>
      </div>
    </div>
  );
}
