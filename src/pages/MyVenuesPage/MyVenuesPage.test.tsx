import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getRandomVenuesList } from "../../factories/venuesFactory";
import mockVenuesList from "../../mocks/mockVenuesList";
import mockInitialUiState from "../../mocks/uiMocks/mockInitialUiState";
import userStateMock from "../../mocks/userMocks/userStateMock";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import MyVenuesPage from "./MyVenuesPage";

const mockGetUserVenues = jest.fn();

jest.mock("../../hooks/useVenues/useVenues", () => {
  return () => ({
    getUserVenues: mockGetUserVenues,
  });
});

describe("Given a MyVenuesPage", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading level 1 with text 'MY VENUES'", () => {
      const headingText = "MY VENUES";

      renderWithProviders(<MyVenuesPage />);

      const heading = screen.queryByRole("heading", { level: 1 });

      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(headingText);
    });

    test("Then it should show a list of useVenues", () => {
      renderWithProviders(<MyVenuesPage />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: userStateMock,
          venues: { venues: [], userVenues: mockVenuesList },
        },
      });

      const userVenuesList = screen.queryByRole("list");

      expect(userVenuesList).toBeInTheDocument();
    });

    test("Then getUserVenues should be called", () => {
      renderWithProviders(<MyVenuesPage />);

      expect(mockGetUserVenues).toHaveBeenCalled();
    });
  });

  describe("When is rendered with a list of venues", () => {
    test("Then it should show a 'LOAD MORE' button", () => {
      renderWithProviders(<MyVenuesPage />);

      const loadMoreButton = screen.getByRole("button");

      expect(loadMoreButton).toBeInTheDocument();
    });
  });

  describe("When is rendered and it's 'LOAD MORE' button is clicked", () => {
    test("Then getUserVenues should be invoked", async () => {
      const venuesList = getRandomVenuesList(10);
      renderWithProviders(<MyVenuesPage />, {
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

      expect(mockGetUserVenues).toHaveBeenCalled();
    });
  });
});
