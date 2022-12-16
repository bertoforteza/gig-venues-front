import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import LoginForm from "./LoginForm";

const mockLoginAction = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    loginUser: mockLoginAction,
  });
});

describe("Given a LoginForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show a form with inputs 'Username' and 'Password'", () => {
      renderWithProviders(<LoginForm />);

      const usernameInput = screen.queryByLabelText("USERNAME");
      const passwordInput = screen.queryByLabelText("PASSWORD");

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });
  });

  describe("when it's filled in and its button 'Login' is clicked", () => {
    test("Then the form should be submited", async () => {
      renderWithProviders(<LoginForm />);

      const usernameInput = screen.queryByLabelText("USERNAME")!;
      const passwordInput = screen.queryByLabelText("PASSWORD")!;
      await userEvent.type(usernameInput, "adnim");
      await userEvent.type(passwordInput, "adminadmin");
      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(mockLoginAction).toHaveBeenCalled();
    });
  });
});
