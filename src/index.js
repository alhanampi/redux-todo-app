import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import {Provider} from "react-redux";
import store from './redux/store'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>

  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
  </Provider>
);
