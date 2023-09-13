import { Card, Button, CardHeader, Image, CardFooter } from "@nextui-org/react";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";


import topGamePic from "../assets/Topgamesports.png";
import topGameLogo from "../assets/TopLogo.png";
import Topgame from "../components/SVG/Topgame";


export default function TopgameCard() {

    const navigate = useNavigate();
  const { language } = useLanguage();
  return (
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
                className="p-1"
              >
                {language === "es" ? "Ver más" : "See more..."}
              </Button>
            </CardFooter>
          </Card>
  )
}
