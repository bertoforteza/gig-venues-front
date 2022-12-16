import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import CreateVenuePage from "./CreateVenuePage";

describe("Given a CreateVenuePage", () => {
  describe("When is rendered", () => {
    test("Then it should show a form component", () => {
      renderWithProviders(<CreateVenuePage />);

      const createVenueForm = screen.getByTestId("create-form");

      expect(createVenueForm).toBeInTheDocument();
    });
  });
});
