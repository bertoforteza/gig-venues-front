import { screen } from "@testing-library/react";
import { getRandomVenue } from "../../factories/venuesFactory";
import mockStoreWithVenues from "../../mocks/mockStoreWithVenues";
import mockVenuesList from "../../mocks/mockVenuesList";
import mockInitialUiState from "../../mocks/uiMocks/mockInitialUiState";
import userStateMock from "../../mocks/userMocks/userStateMock";
import { venuesInitialState } from "../../redux/features/venuesSlice/venuesSlice";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import VenueDetailedPage from "./VenueDetailedPage";

const mockGetVenueById = jest.fn();
jest.mock("../../hooks/useVenues/useVenues", () => {
  return () => ({
    getVenueById: mockGetVenueById,
  });
});

describe("Given a VenueDetailedPage component", () => {
  describe("When is rendered with a venue info", () => {
    test("Then it should show a heading level 1 with the received venue name and a picture of the venue", () => {
      const venueTest = mockVenuesList[0];

      renderWithProviders(<VenueDetailedPage />, {
        store: mockStoreWithVenues,
      });

      const heading = screen.getByRole("heading", {
        level: 1,
        name: venueTest.name,
      });
      const venuePicture: HTMLImageElement = screen.queryByRole("img")!;

      expect(heading).toBeInTheDocument();
      expect(venuePicture).toBeInTheDocument();
      expect(venuePicture.src).toBe(venueTest.backupPicture);
    });

    test("Then it should show a heading level 2 with text 'DESCRIPTION' and a paragraph with the received venue description", () => {
      const venueTest = mockVenuesList[0];
      const headingText = "DESCRIPTION";

      renderWithProviders(<VenueDetailedPage />, {
        store: mockStoreWithVenues,
      });

      const heading = screen.queryByRole("heading", {
        level: 2,
        name: headingText,
      });
      const description = screen.getByText(venueTest.description);

      expect(heading).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });

  describe("When is render with a venue with indoor property 'false'", () => {
    test("Then it it should show a span with text 'Outdoor'", () => {
      const venueTest = getRandomVenue();
      renderWithProviders(<VenueDetailedPage />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: userStateMock,
          venues: {
            userVenues: [{ ...venueTest, indoor: false }],
            venues: [{ ...venueTest, indoor: false }],
          },
        },
      });

      const indoorProperty = screen.getByText("Outdoor");

      expect(indoorProperty).toBeInTheDocument();
    });

    test("Then getVenueById should be invoked", () => {
      renderWithProviders(<VenueDetailedPage />, {
        store: mockStoreWithVenues,
      });

      expect(mockGetVenueById).toHaveBeenCalled();
    });
  });

  describe("When is rendered with a venue with indoor property 'true'", () => {
    test("Then it it should show a span with text 'Indoor'", () => {
      const venueTest = getRandomVenue();
      renderWithProviders(<VenueDetailedPage />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: userStateMock,
          venues: {
            userVenues: [{ ...venueTest, indoor: true }],
            venues: [{ ...venueTest, indoor: true }],
          },
        },
      });

      const indoorProperty = screen.getByText("Indoor");

      expect(indoorProperty).toBeInTheDocument();
    });
  });

  describe("When is rendered with venuesInitialState", () => {
    test("Then it should show an empty heading level 1", () => {
      const headingText = "";
      renderWithProviders(<VenueDetailedPage />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: userStateMock,
          venues: venuesInitialState,
        },
      });

      const heading = screen.getByRole("heading", {
        level: 1,
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
