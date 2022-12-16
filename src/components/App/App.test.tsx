import TestRenderer from "react-test-renderer";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import App from "./App";
import mockIsLoading from "../../mocks/uiMocks/mockIsLoading";
import userStateMock from "../../mocks/userMocks/userStateMock";
import mockSuccessRegister from "../../mocks/uiMocks/mockSuccessRegister";
import { screen } from "@testing-library/react";
import mockVenuesInitialState from "../../mocks/venuesMocks/mockVenuesInitialState";
import mockInitialStore from "../../mocks/mockInitialStore";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import { MemoryRouter } from "react-router-dom";

describe("Given an App component", () => {
  describe("When is rendered and isLoading is trure", () => {
    test("Then it should show a Loading component", () => {
      renderWithProviders(<App />, {
        preloadedState: {
          ui: mockIsLoading,
          user: userStateMock,
          venues: mockVenuesInitialState,
        },
      });

      const loading = screen.queryByLabelText("The page is loading");

      expect(loading).toBeInTheDocument();
    });
  });

  describe("When is rendered and isOpen is true", () => {
    test("Then it should show a Modal component", () => {
      const modalText = "Welcome to gig venues!";

      renderWithProviders(<App />, {
        preloadedState: {
          ui: mockSuccessRegister,
          user: userStateMock,
          venues: mockVenuesInitialState,
        },
      });

      const modal = screen.queryByText(modalText);
      expect(modal).toBeInTheDocument();
    });
  });

  describe("When is rendered with path '/'", () => {
    test("Then it should show a RegisterPage", () => {
      const expectedApp = TestRenderer.create(
        <Provider store={mockInitialStore}>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <MemoryRouter initialEntries={["/"]}>
              <App />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );

      expect(expectedApp).toMatchSnapshot();
    });
  });
});
