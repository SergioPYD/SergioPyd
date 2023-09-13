import Atropos from "atropos/react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { useLanguage } from "../context/LanguageContext";
import finapayPic from "../assets/finapay.png";
import finapayLogo from "../assets/finapayLogoSinFondo.png";
import FinapayIco from "../components/SVG/FinapayIco";
import { useNavigate } from "react-router-dom";

export default function Proyects() {
 const navigate = useNavigate()
  const { language } = useLanguage();

  return (
    <div id="app">
      <div className="flex justify-around flex-wrap mt-20 gap-6">
        <Atropos className="my-atropos" activeOffset={40} shadowScale={1.05}>
          <Card isPressable onPress={() => navigate("/proyects/finapay")}>
            <CardHeader className=" flex-col justify-center ">
              <Image
                alt="Card background"
                className="w-48"
                src={finapayLogo}
              />
              
            </CardHeader>

            <Image
              alt="Card background"
              className="z-0 w-96  object-cover"
              src={finapayPic}
            />
            <CardFooter className="flex justify-center">
              <div className="flex gap-2">
               <FinapayIco /> 
              </div>
              
              
            </CardFooter>
          </Card>
        </Atropos>
        <Atropos className="my-atropos" activeOffset={40} shadowScale={1.05}>
        <Card isPressable onPress={() => navigate("/proyects/finapay")}>
            <CardHeader className=" flex-col justify-center ">
              <Image
                alt="Card background"
                className="w-48"
                src={finapayLogo}
              />
              
            </CardHeader>

            <Image
              alt="Card background"
              className="z-0 w-96  object-cover"
              src={finapayPic}
            />
            <CardFooter className="flex justify-center">
              <div className="flex gap-2">
               <FinapayIco /> 
              </div>
              
              
            </CardFooter>
          </Card>
        </Atropos>
        <Atropos className="my-atropos" activeOffset={40} shadowScale={1.05}>
        <Card isPressable onPress={() => navigate("/proyects/finapay")}>
            <CardHeader className=" flex-col justify-center ">
              <Image
                alt="Card background"
                className="w-48"
                src={finapayLogo}
              />
              
            </CardHeader>

            <Image
              alt="Card background"
              className="z-0 w-96  object-cover"
              src={finapayPic}
            />
            <CardFooter className="flex justify-center">
              <div className="flex gap-2">
               <FinapayIco /> 
              </div>
              
              
            </CardFooter>
          </Card>
        </Atropos>
      </div>
      <div className="flex justify-around flex-wrap mt-20">
        <Atropos className="my-atropos" activeOffset={40} shadowScale={1.05}>
        <Card isPressable onPress={() => navigate("/proyects/finapay")}>
            <CardHeader className=" flex-col justify-center ">
              <Image
                alt="Card background"
                className="w-48"
                src={finapayLogo}
              />
              
            </CardHeader>

            <Image
              alt="Card background"
              className="z-0 w-96  object-cover"
              src={finapayPic}
            />
            <CardFooter className="flex justify-center">
              <div className="flex gap-2">
               <FinapayIco /> 
              </div>
              
              
            </CardFooter>
          </Card>
        </Atropos>
        <Atropos className="my-atropos" activeOffset={40} shadowScale={1.05}>
        <Card isPressable onPress={() => navigate("/proyects/finapay")}>
            <CardHeader className=" flex-col justify-center ">
              <Image
                alt="Card background"
                className="w-48"
                src={finapayLogo}
              />
              
            </CardHeader>

            <Image
              alt="Card background"
              className="z-0 w-96  object-cover"
              src={finapayPic}
            />
            <CardFooter className="flex justify-center">
              <div className="flex gap-2">
               <FinapayIco /> 
              </div>
              
              
            </CardFooter>
          </Card>
        </Atropos>
        <Atropos className="my-atropos" activeOffset={40} shadowScale={1.05}>
        <Card isPressable onPress={() => navigate("/proyects/finapay")}>
            <CardHeader className=" flex-col justify-center ">
              <Image
                alt="Card background"
                className="w-48"
                src={finapayLogo}
              />
              
            </CardHeader>

            <Image
              alt="Card background"
              className="z-0 w-96  object-cover"
              src={finapayPic}
            />
            <CardFooter className="flex justify-center">
              <div className="flex gap-2">
               <FinapayIco /> 
              </div>
              
              
            </CardFooter>
          </Card>
        </Atropos>
      </div>
    </div>
  );
}
