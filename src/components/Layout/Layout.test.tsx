import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockVenuesList from "../../mocks/mockVenuesList";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When its rendered and receives the route '/'", () => {
    test("Then it should show a RegisterForm component", () => {
      renderWithProviders(<Layout />, { initialEntries: ["/"] });

      const usernameInput = screen.queryByRole("textbox", { name: "USERNAME" });

      expect(usernameInput).toBeInTheDocument();
    });
  });

  describe("When it receives an unknown path '/unknown'", () => {
    test("Then it should show a NotFoundPage with a 'HOME' button", () => {
      const buttonText = "HOME";

      renderWithProviders(<Layout />, { initialEntries: ["/unknown"] });

      const button = screen.queryByRole("button", { name: "HOME" })!;

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(buttonText);
    });
  });

  describe("When it shows a NotFoundPage, and it's 'HOME' button is clicked", () => {
    test("Then it should show a HomePage", async () => {
      renderWithProviders(<Layout />, { initialEntries: ["/unknown"] });

      const button = screen.queryByRole("button", { name: "HOME" })!;
      await userEvent.click(button);

      const heading = screen.queryByRole("heading", { level: 1 });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it receives a path '/my-venues'", () => {
    test("Then it should show a heading level 1 with text 'MY VENUES' and a list of userVenues", async () => {
      const headingText = "MY VENUES";

      renderWithProviders(<Layout />, { initialEntries: ["/my-venues"] });

      await waitFor(() => {
        const heading = screen.queryByRole("heading", {
          level: 1,
          name: headingText,
        });

        expect(heading).toBeInTheDocument();
      });

      await waitFor(() => {
        const userVenuesList = screen.queryByRole("list");
        expect(userVenuesList).toBeInTheDocument();
      });
    });
  });

  describe("When it receives a path '/new-venue'", () => {
    test("Then it should show a heading level 1 with text 'CREATE NEW VENUE' and a form component", async () => {
      const headingText = "CREATE NEW VENUE";
      renderWithProviders(<Layout />, { initialEntries: ["/new-venue"] });

      await waitFor(() => {
        const heading = screen.queryByRole("heading", {
          level: 1,
          name: headingText,
        });

        expect(heading).toBeInTheDocument();
      });

      await waitFor(() => {
        const createVenueForm = screen.getByTestId("create-form");

        expect(createVenueForm).toBeInTheDocument();
      });
    });
  });

  describe("When it receives a path '/home'", () => {
    test("Then it should show a heading level 1 with text 'HOME' and a list of venues", async () => {
      const headingText = "HOME";
      renderWithProviders(<Layout />, { initialEntries: ["/home"] });

      await waitFor(() => {
        const heading = screen.queryByRole("heading", {
          level: 1,
          name: headingText,
        });

        expect(heading).toBeInTheDocument();
      });
      await waitFor(() => {
        const venuesList = screen.queryByRole("list");
        expect(venuesList).toBeInTheDocument();
      });
    });
  });

  describe("When it receives a path '/login'", () => {
    test("Then it should show a LoginForm component", async () => {
      renderWithProviders(<Layout />, { initialEntries: ["/login"] });

      await waitFor(() => {
        const usernameInput = screen.queryByLabelText("USERNAME");

        expect(usernameInput).toBeInTheDocument();
      });
    });
  });

  describe("When it receives a path '/venues/:venueId'", () => {
    test("Then it should show a VenueDetailedPage", async () => {
      const venueTest = mockVenuesList[0];
      renderWithProviders(<Layout />, {
        initialEntries: [`/venues/${venueTest.id}`],
      });

      await waitFor(() => {
        const heading = screen.queryByRole("heading", {
          level: 1,
          name: venueTest.name,
        });

        expect(heading).toBeInTheDocument();
      });
    });
  });
});
