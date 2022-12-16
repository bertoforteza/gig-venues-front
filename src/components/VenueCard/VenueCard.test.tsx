import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getRandomVenue } from "../../factories/venuesFactory";
import mockInitialUiState from "../../mocks/uiMocks/mockInitialUiState";
import mockLoggedUser from "../../mocks/userMocks/mockLoggedUser";
import mockVenuesInitialState from "../../mocks/venuesMocks/mockVenuesInitialState";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import VenueCard from "./VenueCard";

const mockDeleteVenue = jest.fn();
jest.mock("../../hooks/useVenues/useVenues", () => {
  return () => ({
    deleteVenue: mockDeleteVenue,
  });
});

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a VenueCard component", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading level 2 with the name of the received venue and a picture of the venue", () => {
      const venue = getRandomVenue();
      const { name, capacity, city, picture, id } = venue;

      renderWithProviders(
        <VenueCard
          capacity={capacity}
          city={city}
          name={name}
          backupPicture={picture}
          id={id}
        />
      );

      const heading = screen.queryByRole("heading", {
        level: 2,
        name: venue.name,
      });
      const venuePicture: HTMLImageElement = screen.queryByRole("img")!;

      expect(heading).toBeInTheDocument();
      expect(venuePicture).toBeInTheDocument();
      expect(venuePicture.src).toBe(picture);
    });
  });

  describe("When is rendered, the user is logged, and it's 'delete' icon is clicked", () => {
    test("Then dispatch should be called with deleteVenue action", async () => {
      const venue = getRandomVenue();
      const { name, capacity, city, picture, id } = venue;

      renderWithProviders(
        <VenueCard
          capacity={capacity}
          city={city}
          name={name}
          backupPicture={picture}
          id={id}
        />,
        {
          preloadedState: {
            ui: mockInitialUiState,
            user: mockLoggedUser,
            venues: mockVenuesInitialState,
          },
          initialEntries: ["/my-venues"],
        }
      );

      const deleteIcon = screen.getByTestId("Delete button")!;
      await userEvent.click(deleteIcon);

      expect(mockDeleteVenue).toHaveBeenCalled();
    });
  });

  describe("When it's detailed icon is clicked", () => {
    test("Then useNavigate should be called", async () => {
      const venue = getRandomVenue();
      const { name, capacity, city, picture, id } = venue;

      renderWithProviders(
        <VenueCard
          capacity={capacity}
          city={city}
          name={name}
          backupPicture={picture}
          id={id}
        />
      );

      const detailIcon = screen.getByTestId("Detail menu button")!;
      await userEvent.click(detailIcon);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
