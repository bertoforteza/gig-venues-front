import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When is rendered", () => {
    test("Then it should show a header with aria label text 'gig venues'", () => {
      renderWithProviders(<Header />);

      const header = screen.queryByLabelText("gig venues");

      expect(header).toBeInTheDocument();
    });
  });
});
