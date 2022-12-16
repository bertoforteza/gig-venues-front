import React from "react";
import "@fontsource/oswald";
import "@fontsource/poppins";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "../src/styles/mainTheme";
import GlobalStyle from "../src/styles/GlobalStyle";
import { store } from "../src/redux/store";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  ),
];
