import { Card, Button, CardHeader, Image, CardFooter } from "@nextui-org/react";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";

import la33Pic from "../assets/La 33.png";
import la33Logo from "../assets/la33Logo.png";
import La33 from "../components/SVG/La33";

export default function GameCard() {

    const navigate = useNavigate();
  const { language } = useLanguage();
  return (
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
              <div className="flex gap-4">
                <La33 />
              </div>
              <Button
                color="primary"
                variant="ghost"
                onPress={() => navigate("/proyects/la33")}
                className="p-1"
              >
                {language === "es" ? "Ver más" : "See more..."}
              </Button>
            </CardFooter>
          </Card>
  )
}
