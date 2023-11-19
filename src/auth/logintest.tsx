import {
  Box,
  Button,
  Input,
  InputGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import { useFormik } from "formik";
// import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Actions/auth";

interface FormValues {
  email: string;
  password: string;
}

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values: FormValues) => {
      console.log("values");
      console.log(values);
      dispatch(login(values.email, values.password))
        .then(() => {
          console.log("berhasil");
          navigate("/");
          window.location.reload();
        })
        .catch((err) => {
          console.log("error");
          console.log(err);
        });
    },
  });

  return (
    <Box w="full" p={8}>
      <Heading>Login</Heading>
      <form onSubmit={formik.handleSubmit}>
        <FormLabel>Email: </FormLabel>
        <FormControl
          isInvalid={!!(formik.touched.email && formik.errors.email)}
          mb={5}>
          <InputGroup>
            <Input
              size="lg"
              type="text"
              name="email"
              placeholder="Your email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </InputGroup>
          {formik.touched.email && formik.errors.email && (
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          )}
        </FormControl>
        <FormLabel>Password: </FormLabel>
        <FormControl
          isInvalid={!!(formik.touched.password && formik.errors.password)}
          mb={5}>
          <InputGroup>
            <Input
              size="lg"
              type="password"
              name="password"
              placeholder="Your password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </InputGroup>
          {formik.touched.password && formik.errors.password && (
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          )}
        </FormControl>
        <Button type="submit">Login</Button>
      </form>
    </Box>
  );
}

export default Login;
