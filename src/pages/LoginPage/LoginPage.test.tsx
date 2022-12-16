import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import LoginPage from "./LoginPage";

describe("Given a LoginPage", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading level 1 with text 'LOGIN'", () => {
      const headingText = "LOGIN";

      renderWithProviders(<LoginPage />);

      const heading = screen.queryByRole("heading", { level: 1 });

      expect(heading).toHaveTextContent(headingText);
    });
  });
});
