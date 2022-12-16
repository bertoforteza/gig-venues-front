import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { store } from "../../redux/store";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When its rendered with the text 'Register'", () => {
    test("Then it should show 'Register' on it", () => {
      const expectedText = "Register";

      renderWithProviders(<Button action={() => {}} text="Register" />, {
        store: store,
      });

      const button = screen.queryByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(expectedText);
    });
  });

  describe("When it receives an ction", () => {
    test("Then it should call an action on click", async () => {
      const buttonAction = jest.fn();

      renderWithProviders(<Button action={buttonAction} text="" />, {
        store: store,
      });

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(buttonAction).toHaveBeenCalled();
    });
  });
});
