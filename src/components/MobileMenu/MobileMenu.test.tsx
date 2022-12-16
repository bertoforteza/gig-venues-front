import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as router from "react-router";
import mockInitialUiState from "../../mocks/uiMocks/mockInitialUiState";
import mockLoggedUser from "../../mocks/userMocks/mockLoggedUser";
import userStateMock from "../../mocks/userMocks/userStateMock";
import mockVenuesInitialState from "../../mocks/venuesMocks/mockVenuesInitialState";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import MobileMenu from "./MobileMenu";

const mockNavigate = jest.fn();
beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
});

const mockLogoutUser = jest.fn();
jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    logoutUser: mockLogoutUser,
  });
});

describe("Given a MobileMenu component", () => {
  describe("When is rendered", () => {
    test("Then it should show a 'search' icon, a 'home' icon, and a 'user' icon", () => {
      renderWithProviders(<MobileMenu />);

      const searchIcon = screen.getByTestId("Search button");
      const homeIcon = screen.getByTestId("Home button");
      const userIcon = screen.getByTestId("User menu button");

      expect(searchIcon).toBeInTheDocument();
      expect(homeIcon).toBeInTheDocument();
      expect(userIcon).toBeInTheDocument();
    });
  });

  describe("When is rendered, and a non logged user clicks on the 'user' icon", () => {
    test("Then it should show a 'REGISTER' navigation link and a 'LOGIN' navigation link", async () => {
      const registerLinkLabel = /register/i;
      const loginLinkLabel = /login/i;

      renderWithProviders(<MobileMenu />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: userStateMock,
          venues: mockVenuesInitialState,
        },
      });

      const userIcon = screen.getByTestId("User menu button")!;
      await userEvent.click(userIcon);
      const registerLink = screen.queryByRole("link", {
        name: registerLinkLabel,
      });
      const loginLink = screen.queryByRole("link", { name: loginLinkLabel });

      expect(registerLink).toBeInTheDocument();
      expect(loginLink).toBeInTheDocument();
    });
  });

  describe("When is rendered, and a logged user clicks on the 'user' icon", () => {
    test("Then it should show a 'LOGOUT' navigation link and a 'MY VENUES' navigation link", async () => {
      const logoutLinkLabel = /logout/i;
      const myVenuesLinkLabel = /my venues/i;
      const newVenueLinkLabel = /new venue/i;

      renderWithProviders(<MobileMenu />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: mockLoggedUser,
          venues: mockVenuesInitialState,
        },
      });

      const userIcon = screen.getByTestId("User menu button")!;
      await userEvent.click(userIcon);
      const logoutLink = screen.queryByRole("link", { name: logoutLinkLabel });
      const myVenuesLink = screen.queryByRole("link", {
        name: myVenuesLinkLabel,
      });
      const newVenueLink = screen.queryByRole("link", {
        name: newVenueLinkLabel,
      });

      expect(logoutLink).toBeInTheDocument();
      expect(myVenuesLink).toBeInTheDocument();
      expect(newVenueLink).toBeInTheDocument();
    });
  });

  describe("When is rendered and it's 'home' icon is clicked", () => {
    test("Then useNavigate should be called", async () => {
      renderWithProviders(<MobileMenu />);

      const homeIcon = screen.getByTestId("Home button")!;
      await userEvent.click(homeIcon);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When is rendered and it's 'LOGOUT' link is clicked", () => {
    test("Then useNavigate should be called", async () => {
      const logoutLinkLabel = /logout/i;

      renderWithProviders(<MobileMenu />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: mockLoggedUser,
          venues: mockVenuesInitialState,
        },
      });

      const userIcon = screen.getByTestId("User menu button")!;
      await userEvent.click(userIcon);
      const logoutLink = screen.queryByRole("link", { name: logoutLinkLabel })!;
      await userEvent.click(logoutLink);

      expect(mockNavigate).toHaveBeenCalled();
      expect(mockLogoutUser).toHaveBeenCalled();
    });
  });
});
