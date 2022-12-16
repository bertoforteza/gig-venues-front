import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import RegisterForm from "./RegisterForm";

const mockRegisterAction = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    registerUser: mockRegisterAction,
  });
});

describe("Given a RegisterForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show a form with inputs Username, Email and Password", () => {
      renderWithProviders(<RegisterForm />);

      const usernameInput = screen.queryByRole("textbox", { name: "USERNAME" });
      const emailInput = screen.queryByRole("textbox", { name: "EMAIL" });
      const passwordInput = screen.queryByLabelText("PASSWORD");

      expect(usernameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });
  });

  describe("when it's filled in and its button 'Register' is clicked", () => {
    test("Then the form should be submitted", async () => {
      renderWithProviders(<RegisterForm />);

      const usernameInput = screen.queryByRole("textbox", {
        name: "USERNAME",
      })!;
      await userEvent.type(usernameInput, "admin");
      const emailInput = screen.queryByRole("textbox", { name: "EMAIL" })!;
      await userEvent.type(emailInput, "admin@admin.com");
      const passwordInput = screen.queryByLabelText("PASSWORD")!;
      await userEvent.type(passwordInput, "adminadmin");
      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(mockRegisterAction).toHaveBeenCalled();
    });
  });
});
