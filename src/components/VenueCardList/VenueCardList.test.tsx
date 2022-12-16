import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import VenueCardList from "./VenueCardList";
import mockVenuesList from "../../mocks/mockVenuesList";
import { screen } from "@testing-library/react";

describe("Given a VenueCardList component", () => {
  describe("When is rendered with a list of 2 venues", () => {
    test("Then it should show a list with 2 venues", () => {
      const expectedVenues = 2;

      renderWithProviders(<VenueCardList venues={mockVenuesList} />);

      const venuesCards = screen.queryAllByRole("listitem");

      expect(venuesCards).toHaveLength(expectedVenues);
    });

    test("Then it should show 2 headings leves 2 with the received venues names", () => {
      const firstVenueName = mockVenuesList[0].name;
      const secondVenueName = mockVenuesList[1].name;

      renderWithProviders(<VenueCardList venues={mockVenuesList} />);

      const firstHeading = screen.queryByRole("heading", {
        level: 2,
        name: firstVenueName,
      });
      const secondHeading = screen.queryByRole("heading", {
        level: 2,
        name: secondVenueName,
      });

      expect(firstHeading).toBeInTheDocument();
      expect(secondHeading).toBeInTheDocument();
    });
  });
});
