import Atropos from "atropos/react";
import { Card, Button, CardHeader, Image, CardFooter } from "@nextui-org/react";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";

import finapayPic from "../assets/finapay.png";
import finapayLogo from "../assets/finapayLogoSinFondo.png";
import FinapayIco from "../components/SVG/FinapayIco";
import topGamePic from "../assets/Topgamesports.png";
import topGameLogo from "../assets/TopLogo.png";
import Topgame from "../components/SVG/Topgame";
import la33Pic from "../assets/La 33.png";
import la33Logo from "../assets/la33Logo.png";
import La33 from "../components/SVG/La33";
import Swipper from "../components/Swipper";
import WordpressIco from "../components/SVG/WordpressIco";

export default function Proyects() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <div id="app" className="flex flex-col gap-6">
      <div className="flex justify-around flex-wrap mt-20 gap-6">
        {/* FINAPAY */}
        <Atropos className="my-atropos" activeOffset={40} shadowScale={1.05}>
          <Card>
            <CardHeader className=" flex-col justify-center ">
              <Image alt="Card background" className="w-48" src={finapayLogo} />
            </CardHeader>

            <Image
              alt="Card background"
              className="z-0 w-96 h-64  object-cover"
              src={finapayPic}
            />
            <CardFooter className="flex justify-around">
              <div className="flex gap-2">
                <FinapayIco />
              </div>
              <Button
                color="primary"
                variant="ghost"
                onPress={() => navigate("/proyects/finapay")}
              >
                {language === "es" ? "Ver más" : "See more..."}
              </Button>
            </CardFooter>
          </Card>
        </Atropos>
        {/* TOPGAMESPORTS */}
        <Atropos className="my-atropos" activeOffset={40} shadowScale={1.05}>
          <Card>
            <CardHeader className=" flex-col justify-center mt-1 mb-1 ">
              <Image alt="Card background" className="w-80" src={topGameLogo} />
            </CardHeader>

            <Image
              alt="Card background"
              className="z-0 w-96 h-64  object-cover"
              src={topGamePic}
            />
            <CardFooter className="flex justify-around">
              <div className="flex gap-2">
                <Topgame />
              </div>
              <Button
                color="primary"
                variant="ghost"
                onPress={() => navigate("/proyects/topgamesports")}
              >
                {language === "es" ? "Ver más" : "See more..."}
              </Button>
            </CardFooter>
          </Card>
        </Atropos>
        {/* LA 33 */}
        <Atropos className="my-atropos" activeOffset={40} shadowScale={1.05}>
          <Card>
            <CardHeader className=" flex-col justify-center ">
              <Image
                alt="Card background"
                className="w-80 h-14"
                src={la33Logo}
              />
            </CardHeader>

            <Image
              alt="Card background"
              className="z-0 w-96 h-64  object-cover"
              src={la33Pic}
            />
            <CardFooter className="flex justify-around">
              <div className="flex gap-2">
                <La33 />
              </div>
              <Button
                color="primary"
                variant="ghost"
                onPress={() => navigate("/proyects/la33")}
              >
                {language === "es" ? "Ver más" : "See more..."}
              </Button>
            </CardFooter>
          </Card>
        </Atropos>
      </div>
      {/* WORDPRESS */}
      <div className="flex justify-center flex-wrap h-max">
      <Atropos className="my-atropos" activeOffset={40} shadowScale={1.05}>
        <Card className="max-w-xl	">
          <Swipper />
          <CardFooter className="flex justify-around">
            <div className="flex gap-2">
              <WordpressIco />
            </div>
            <Button
              color="primary"
              variant="ghost"
              onPress={() => navigate("/proyects/wordpress")}
            >
              {language === "es" ? "Ver más" : "See more..."}
            </Button>
          </CardFooter>
        </Card>
        </Atropos>
      </div>
    </div>
  );
}
