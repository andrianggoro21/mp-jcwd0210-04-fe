// src/components/LoginForm.tsx
import React from "react";
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

interface FormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  onLogin: (values: FormValues) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      onLogin(values);
    },
  });

  return (
    <Box width="300px" marginRight="100px" pos border="3px solid black">
      <Box w="full" p={8}>
        <Heading p={100}>SIGN IN</Heading>
        <form onSubmit={formik.handleSubmit}>
          <FormLabel
            width="100%"
            padding="10px"
            margin-bottom="10px"
            border="1px solid #ccc">
            Email:{" "}
          </FormLabel>
          <FormControl
            isInvalid={formik.touched.email && !!formik.errors.email}
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
            isInvalid={formik.touched.password && !!formik.errors.password}
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
    </Box>
  );
};

export default LoginForm;
