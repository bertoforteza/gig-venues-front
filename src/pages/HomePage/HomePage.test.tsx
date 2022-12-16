import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getRandomVenuesList } from "../../factories/venuesFactory";
import mockVenuesList from "../../mocks/mockVenuesList";
import mockInitialUiState from "../../mocks/uiMocks/mockInitialUiState";
import userStateMock from "../../mocks/userMocks/userStateMock";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import HomePage from "./HomePage";

const mockGetVenues = jest.fn();

jest.mock("../../hooks/useVenues/useVenues", () => {
  return () => ({
    getVenues: mockGetVenues,
  });
});

describe("Given a HomePage", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading level 1 with text 'HOME'", () => {
      const headingText = "HOME";

      renderWithProviders(<HomePage />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: userStateMock,
          venues: { venues: mockVenuesList, userVenues: [] },
        },
      });

      const heading = screen.queryByRole("heading", { level: 1 });

      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(headingText);
    });

    test("Then it should show a list of venues", () => {
      renderWithProviders(<HomePage />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: userStateMock,
          venues: { venues: mockVenuesList, userVenues: [] },
        },
      });

      const venuesList = screen.queryByRole("list");

      expect(venuesList).toBeInTheDocument();
    });

    test("Then getVenues should be invoked", () => {
      renderWithProviders(<HomePage />);

      expect(mockGetVenues).toHaveBeenCalled();
    });
  });

  describe("When is rendered with a list of venues", () => {
    test("Then it should show a 'LOAD MORE' button", () => {
      renderWithProviders(<HomePage />);

      const loadMoreButton = screen.getByRole("button");

      expect(loadMoreButton).toBeInTheDocument();
    });
  });

  describe("When is rendered and it's 'LOAD MORE' button is clicked", () => {
    test("Then getVenues should be invoked", async () => {
      const venuesList = getRandomVenuesList(10);
      renderWithProviders(<HomePage />, {
        preloadedState: {
          ui: {
            ...mockInitialUiState,
            pages: { currentPage: 0, isNextPage: true, totalPages: 2 },
          },
          user: userStateMock,
          venues: { venues: venuesList, userVenues: [] },
        },
      });

      const loadMoreButton = screen.getByRole("button");
      await userEvent.click(loadMoreButton);

      expect(mockGetVenues).toHaveBeenCalled();
    });
  });
});
