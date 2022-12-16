import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When is rendered", () => {
    test("Then it should show a loading animation with aria label text 'The page is loading'", () => {
      renderWithProviders(<Loading />);

      const loading = screen.queryByLabelText("The page is loading");

      expect(loading).toBeInTheDocument();
    });
  });
});
