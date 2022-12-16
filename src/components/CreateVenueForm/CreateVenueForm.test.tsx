import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import CreateVenueForm from "./CreateVenueForm";

const mockCreateAction = jest.fn();

jest.mock("../../hooks/useVenues/useVenues", () => {
  return () => ({
    createNewVenue: mockCreateAction,
  });
});

describe("Given a CreateVenueForm component", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading level 1 with text 'CREATE NEW VENUE'", () => {
      const headingText = "CREATE NEW VENUE";
      renderWithProviders(<CreateVenueForm />);

      const heading = screen.queryByRole("heading", {
        level: 1,
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a form with inputs Name, City, Address, Total capacity, Indoor/Outdoor, Phone number, Email, Picture and Description", () => {
      renderWithProviders(<CreateVenueForm />);

      const nameInput = screen.queryByLabelText("NAME");
      const cityInput = screen.queryByLabelText("CITY");
      const addressInput = screen.queryByLabelText("ADDRESS");
      const capacityInput = screen.queryByLabelText("TOTAL CAPACITY");
      const indoorInput = screen.queryByLabelText("INDOOR/OUTDOOR");
      const phoneNumberInput = screen.queryByLabelText("PHONE NUMBER");
      const emailInput = screen.queryByLabelText("EMAIL");
      const pictureInput = screen.queryByLabelText("PICTURE");
      const descriptionInput = screen.queryByLabelText("DESCRIPTION");

      expect(nameInput).toBeInTheDocument();
      expect(cityInput).toBeInTheDocument();
      expect(addressInput).toBeInTheDocument();
      expect(capacityInput).toBeInTheDocument();
      expect(indoorInput).toBeInTheDocument();
      expect(phoneNumberInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(pictureInput).toBeInTheDocument();
      expect(descriptionInput).toBeInTheDocument();
    });
  });

  describe("When it's filled and its button 'CREATE' is clicked", () => {
    test("Then the form should be submitted", async () => {
      const picture = new File(["venue"], "venue.jpg", {
        type: "image/jpg",
      });
      renderWithProviders(<CreateVenueForm />);

      const nameInput = screen.queryByLabelText("NAME")!;
      await userEvent.type(nameInput, "Test Venue");
      const cityInput = screen.queryByLabelText("CITY")!;
      await userEvent.type(cityInput, "Barcelona");
      const addressInput = screen.queryByLabelText("ADDRESS")!;
      await userEvent.type(addressInput, "Marina, 58");
      const capacityInput = screen.queryByLabelText("TOTAL CAPACITY")!;
      await userEvent.type(capacityInput, "1000");
      const phoneNumberInput = screen.queryByLabelText("PHONE NUMBER")!;
      await userEvent.type(phoneNumberInput, "931234567");
      const emailInput = screen.queryByLabelText("EMAIL")!;
      await userEvent.type(emailInput, "test@venue.com");
      const pictureInput = screen.queryByLabelText("PICTURE")!;
      await userEvent.upload(pictureInput, picture);
      const descriptionInput = screen.queryByLabelText("DESCRIPTION")!;
      await userEvent.type(descriptionInput, "Awesome venue description");
      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(mockCreateAction).toHaveBeenCalled();
    });
  });
});
