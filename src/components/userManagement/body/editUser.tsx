import React, { useState, useEffect } from "react";
import {
  ModalBody,
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  Stack,
  InputRightElement,
  Heading,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { register } from "../../Action/auth";

const EditUserModal: React.FC = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const data = {
    baseColor: "#ff7940",
  };

  return (
    <>
      <ModalBody p={0} className="bg-regis">
        <Stack className="content-regis">
          <Flex p={8} align={"center"} justify={"center"}>
            <Stack spacing={4} w={"full"} maxW={"md"}>
              <Stack align={"center"}>
                <Heading
                  mb={"30px"}
                  mt={"20px"}
                  color={data.baseColor}
                  fontSize={"3xl"}
                  textAlign={"center"}>
                  REGISTRATION
                </Heading>
              </Stack>
              {/* <form onSubmit={formik.handleSubmit}> */}
              <input
                type="text"
                id="roleId"
                name="roleId"
                //   value={formik.values.roleId}
                hidden={true}
              />
              <FormControl
                //   isInvalid={formik.touched.username && formik.errors.username}
                mb={5}>
                <InputGroup>
                  <Input
                    size="lg"
                    type="text"
                    name="username"
                    placeholder="Your Username..."
                    id="username"
                    //   value={formik.values.username}
                    //   onChange={formik.handleChange}
                  />
                </InputGroup>
                {/* {formik.touched.username && formik.errors.username && (
                    <FormErrorMessage>
                      {formik.errors.username}
                    </FormErrorMessage>
                  )} */}
              </FormControl>
              <FormControl
                //   isInvalid={formik.touched.email && formik.errors.email}
                mb={5}>
                <InputGroup>
                  <Input
                    size="lg"
                    type="email"
                    name="email"
                    placeholder="Your Email..."
                    //   value={formik.values.email}
                    //   onChange={formik.handleChange}
                  />
                </InputGroup>
                {/* {formik.touched.email && formik.errors.email && (
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  )} */}
              </FormControl>
              <FormControl
                //   isInvalid={formik.touched.password && formik.errors.password}
                mb={5}>
                <InputGroup>
                  <Input
                    size="lg"
                    type="password"
                    name="password"
                    placeholder="Your Password..."
                    //   value={formik.values.password}
                    //   onChange={formik.handleChange}
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
                {/* {formik.touched.password && formik.errors.password && (
                    <FormErrorMessage>
                      {formik.errors.password}
                    </FormErrorMessage>
                  )} */}
              </FormControl>
              <FormControl
                //   isInvalid={
                //     formik.touched.retypePassword &&
                //     formik.errors.retypePassword
                //   }
                mb={5}>
                <InputGroup>
                  <Input
                    size="lg"
                    type="password"
                    name="retypePassword"
                    placeholder="Re-Type Your Password..."
                    //   value={formik.values.retypePassword}
                    //   onChange={formik.handleChange}
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
                {/* {formik.touched.retypePassword &&
                    formik.errors.retypePassword && (
                      <FormErrorMessage>
                        {formik.errors.retypePassword}
                      </FormErrorMessage>
                    )} */}
              </FormControl>
              <FormControl mb={5}>
                <InputGroup>
                  <Input
                    size="lg"
                    type="text"
                    name="phoneNumber"
                    placeholder="Your Phone Number..."
                    //   value={formik.values.phoneNumber}
                    //   onChange={formik.handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl mb={5}>
                <InputGroup>
                  <Input
                    size="lg"
                    type="text"
                    name="address"
                    placeholder="Your Address..."
                    //   value={formik.values.address}
                    //   onChange={formik.handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl
                //   isInvalid={formik.touched.avatar && formik.errors.avatar}
                mb={5}>
                <InputGroup>
                  <Input
                    size="lg"
                    type="file"
                    name="avatar"
                    placeholder="Your Avatar"
                    //   value={formik.values.avatar}
                    //   onChange={formik.handleChange}
                  />
                </InputGroup>
                {/* {formik.touched.avatar && formik.errors.avatar && (
                    <FormErrorMessage>{formik.errors.avatar}</FormErrorMessage>
                  )} */}
              </FormControl>
              <Stack spacing={6} mt={"10px"}>
                <Button
                  type="submit"
                  backgroundColor={data.baseColor}
                  variant={"solid"}
                  //   disabled={isSubmitting}
                  color={"white"}
                  borderColor={data.baseColor}>
                  REGISTRATION
                </Button>
              </Stack>
              {/* </form> */}
            </Stack>
          </Flex>
        </Stack>
      </ModalBody>
    </>
  );
};

export default EditUserModal;
