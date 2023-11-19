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
  Checkbox,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import loginBackground from "../../assets/auth/loginBg.png";
import logo from "../../assets/auth/logo.png";
import "./auth.css";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const data = {
    loginBackground: loginBackground,
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
            src={data.loginBackground}
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
                color={data.baseColor}
                fontSize={"4xl"}
                textAlign={"center"}>
                SIGN IN
              </Heading>
            </Stack>
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
            <Stack spacing={6} mt={"20px"} mb={"10px"}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}>
                <Checkbox>Remember Me?</Checkbox>
                <Text color={data.baseColor}>Forgot password?</Text>
              </Stack>
              <Button
                backgroundColor={data.baseColor}
                variant={"solid"}
                color={"white"}
                borderColor={data.baseColor}>
                SIGN IN
              </Button>
            </Stack>
            {/* <Text align={"center"}>
              Don't Have An Account?&nbsp;
              <Link to={""} className="regisHere">
                Registration Here
              </Link>
            </Text> */}
          </Stack>
        </Flex>
      </Stack>
    </>
  );
};

export default Login;
