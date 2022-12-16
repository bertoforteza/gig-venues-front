import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockInitialStore from "../../mocks/mockInitialStore";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Filter from "./Filter";

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

describe("Given a Filter component", () => {
  describe("When is rendered", () => {
    test("Then it should show a select element with label 'FILTER BY CAPACITY'", () => {
      renderWithProviders(<Filter />);

      const selectInput = screen.queryByLabelText("FILTER BY CAPACITY");

      expect(selectInput).toBeInTheDocument();
    });
  });

  describe("When is rendered and one of it's options is selected", () => {
    test("Then dispatch should be invoked", async () => {
      const filterOption = "0 - 50";

      renderWithProviders(<Filter />, { store: mockInitialStore });

      const selectInput = screen.getByRole("combobox", {
        name: "FILTER BY CAPACITY",
      })!;
      const selection = screen.getByRole("option", { name: filterOption })!;
      await userEvent.selectOptions(selectInput, selection);

      expect(dispatchSpy).toHaveBeenCalled();
    });
  });
});
