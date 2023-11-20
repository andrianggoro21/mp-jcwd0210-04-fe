import React, { useState } from "react";
import {
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  FormErrorMessage,
  Button,
  Heading,
  Checkbox,
  Text,
  Image,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import loginBackground from "../../assets/auth/loginBg.png";
import logo from "../../assets/auth/logo.png";
import "./auth.css";

import { login } from "../../Action/auth";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = {
    loginBackground: loginBackground,
    logo: logo,
    baseColor: "#ff7940",
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      dispatch(login(values.email, values.password))
        .then(() => {
          toast.success("Register Successful", {
            autoClose: 3000,
          });
          navigate("/user-management");
        })
        .catch((error) => {
          toast.warning(error.response.data, {
            autoClose: 5000,
          });
        });
    },
  });

  const isLoggedIn = useSelector((state) => {
    return state?.mainReducer?.auth.isLoggedIn;
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/user-management");
    } else {
      navigate("/");
    }
  }, []);

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
            <form onSubmit={formik.handleSubmit}>
              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
                mb={5}>
                <InputGroup>
                  <Input
                    size="lg"
                    type="text"
                    name="email"
                    placeholder="Your Email..."
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
                {formik.touched.email && formik.errors.email && (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={formik.touched.password && formik.errors.password}
                mb={5}>
                <InputGroup>
                  <Input
                    size="lg"
                    type="password"
                    name="password"
                    placeholder="Your Password..."
                    value={formik.values.password}
                    onChange={formik.handleChange}
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
                {formik.touched.password && formik.errors.password && (
                  <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                )}
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
                  type="submit"
                  backgroundColor={data.baseColor}
                  variant={"solid"}
                  color={"white"}
                  borderColor={data.baseColor}>
                  SIGN IN
                </Button>
              </Stack>
            </form>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
};

export default Login;
