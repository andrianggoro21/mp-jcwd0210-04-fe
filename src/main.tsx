// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
// import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import theme from "./themes/index.ts";
import { UserProvider } from "./pages/roles/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    {/* <Provider > */}
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </BrowserRouter>
    </ChakraProvider>
    {/* </Provider> */}
  </>
);
