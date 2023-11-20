import React, { useState } from "react";
import {
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Image,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import resetPWBackground from "../../assets/auth/changePwBg.png";
import logo from "../../assets/auth/logo.png";

const ResetPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const data = {
    resetPWBackground: resetPWBackground,
    logo: logo,
    baseColor: "#ff7940",
  };

  return (
    <>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex flex={1}>
          <Image
            alt={"Login Background"}
            objectFit={"cover"}
            src={data.resetPWBackground}
          />
        </Flex>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
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
                CREATE NEW PASSWORD
              </Heading>
            </Stack>
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
            <Stack spacing={6} mt={"20px"}>
              <Button
                backgroundColor={data.baseColor}
                variant={"solid"}
                color={"white"}
                borderColor={data.baseColor}>
                CONFIRM
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
};

export default ResetPassword;
