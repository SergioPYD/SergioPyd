import Atropos from "atropos/react";
import { Card, Button, CardFooter, Link } from "@nextui-org/react";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';



import Swipper from "../components/Swipper";
import WordpressIco from "../components/SVG/WordpressIco";
import FinapayCard from "../components/FinapayCard";
import TopgameCard from "../components/TopgameCard";
import GameCard from "../components/GameCard";

export default function Proyects() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const isMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });

  return (
    <div id="app" className="flex flex-col gap-6">
      <div className="flex justify-around flex-wrap mt-10 gap-6">
        {/* FINAPAY */}
        {isMobileDevice ? (
        <FinapayCard />
      ) : (
        <Atropos 
          className="my-atropos" 
          activeOffset={40} 
          shadowScale={1.05}
        >
          <FinapayCard />
        </Atropos>
      )}
        {/* TOPGAMESPORTS */}
        {isMobileDevice ? (
        <TopgameCard />
      ) : (
        <Atropos 
          className="my-atropos" 
          activeOffset={40} 
          shadowScale={1.05}
        >
          <TopgameCard />
        </Atropos>
      )}
        {/* LA 33 */}
        {isMobileDevice ? (
        <GameCard />
      ) : (
        <Atropos 
          className="my-atropos" 
          activeOffset={40} 
          shadowScale={1.05}
        >
          <GameCard />
        </Atropos>
      )}
      </div>
      {/* WORDPRESS */}
      <div className="flex justify-center flex-wrap h-max">
      <Atropos className="my-atropos" activeOffset={40} shadowScale={1.05}>
        <Card className="max-w-xl	">
          <Swipper />
          <CardFooter className="flex justify-around">
            <div className="flex gap-4">
              <WordpressIco />
            </div>
            <Button
              as={Link}
              color="primary"
              variant="ghost"
              href="https://elrincondesergio.netlify.app/"
              isExternal
              className="p-1"
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
