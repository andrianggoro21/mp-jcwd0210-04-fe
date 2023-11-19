import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Heading,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import regisBackround from "../../assets/auth/registrationBg.png";
import logo from "../../assets/auth/logo.png";

const RegistrationModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);

  const data = {
    regisBackround: regisBackround,
    logo: logo,
    baseColor: "#ff7940",
  };

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={0} className="bg-regis">
            <Stack className="content-regis">
              <Flex p={8} align={"center"} justify={"center"}>
                <Stack spacing={4} w={"full"} maxW={"md"}>
                  <Stack align={"center"}>
                    <Image
                      alt={"Login Image"}
                      objectFit={"contain"}
                      src={data.logo}
                      w={"100px"}
                    />
                    <Heading
                      mb={"30px"}
                      mt={"20px"}
                      color={data.baseColor}
                      fontSize={"3xl"}
                      textAlign={"center"}>
                      REGISTRATION
                    </Heading>
                  </Stack>
                  <FormControl id="username" isRequired>
                    <Input type="username" placeholder="Your Username..." />
                  </FormControl>
                  <FormControl id="email" isRequired>
                    <Input type="email" placeholder="Your Email..." />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <InputGroup>
                      <Input
                        placeholder="Your Password..."
                        type={showPassword ? "text" : "password"}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }>
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <FormControl id="retypePassword" isRequired>
                    <InputGroup>
                      <Input
                        placeholder="Retype Your Password..."
                        type={showPassword ? "text" : "password"}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }>
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Stack spacing={6} mt={"10px"}>
                    <Button
                      backgroundColor={data.baseColor}
                      variant={"solid"}
                      color={"white"}
                      borderColor={data.baseColor}>
                      REGISTRATION
                    </Button>
                  </Stack>
                </Stack>
              </Flex>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegistrationModal;
