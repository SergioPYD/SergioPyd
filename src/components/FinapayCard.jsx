import { Card, Button, CardHeader, Image, CardFooter } from "@nextui-org/react";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";

import finapayPic from "../assets/finapay.png";
import finapayLogo from "../assets/finapayLogoSinFondo.png";
import FinapayIco from "../components/SVG/FinapayIco";

export default function FinapayCard() {

    const navigate = useNavigate();
  const { language } = useLanguage();
  return (
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
              <div className="flex gap-1">
                <FinapayIco />
              </div>
              <Button
                color="primary"
                variant="ghost"
                onPress={() => navigate("/proyects/finapay")}
                className="p-1"
              >
                {language === "es" ? "Ver más" : "See more..."}
              </Button>
            </CardFooter>
          </Card>
  )
}
