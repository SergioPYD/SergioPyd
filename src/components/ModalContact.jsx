import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import React from "react";

export default function ModalContact() {
  const { language } = useLanguage();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <NavLink to="#" onClick={onOpen} id="link">
        {language === "es" ? "CONTACTO" : "CONTACT"}
      </NavLink>
      <Modal
        backdrop="opaque"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {language === "es"
                  ? "Información de contacto"
                  : "Contact Information"}
              </ModalHeader>
              <ModalBody>
                <div className="flex justify-center ">
                  {language === "es" ? (
                    <div>
                      <p>
                        Si deseas contactarme, puedes hacerlo de las siguientes
                        maneras:
                      </p>
                      <br />

                      <div className="text-center	">
                        <strong>Correo Electrónico:</strong>
                        <p>puyod10@gmail.com</p>
                        <br />
                      </div>

                      <div className="text-center	">
                        <strong>LinkedIn:</strong>
                        <p>
                          Puedes encontrarme en LinkedIn{" "}
                          <a
                            href="https://www.linkedin.com/in/sergio-puyod/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link"
                          >
                            aquí
                          </a>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p>
                        If you wish to get in touch with me, you can do so in
                        the following ways:
                      </p>

                      <div className="text-center	">
                        <strong>Email:</strong>
                        <p>puyod10@gmail.com</p>
                      </div>

                      <div className="text-center	">
                        <strong>LinkedIn:</strong>
                        <p>
                          You can find me on LinkedIn{" "}
                          <a
                            href="https://www.linkedin.com/in/sergio-puyod/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link"
                          >
                            here
                          </a>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button color="danger" variant="ghost" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
