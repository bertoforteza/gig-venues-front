import { screen } from "@testing-library/react";
import mockErrorRegister from "../../mocks/uiMocks/mockErrorRegister";
import mockSuccessRegister from "../../mocks/uiMocks/mockSuccessRegister";
import userStateMock from "../../mocks/userMocks/userStateMock";
import mockVenuesInitialState from "../../mocks/venuesMocks/mockVenuesInitialState";
import { closeModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Modal from "./Modal";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.useFakeTimers();

describe("Given a Modal component", () => {
  describe("When it's rendered with text 'Welcome to gig venues!'", () => {
    const modalText = "Welcome to gig venues!";

    renderWithProviders(<Modal modalText={modalText} isError={false} />, {
      preloadedState: {
        ui: mockSuccessRegister,
        user: userStateMock,
        venues: mockVenuesInitialState,
      },
    });

    test("Then it should show the received text", () => {
      const modal = screen.queryByText(modalText);
      expect(modal).toBeInTheDocument();
    });

    test("After 3 seconds, Then it should invoke clodeModalActionCreator", () => {
      const closeModalTime = 3000;
      jest.advanceTimersByTime(closeModalTime);

      expect(mockDispatch).toHaveBeenCalledWith(closeModalActionCreator());
    });
  });

  describe("When it's rendered with text 'Error on registration' and isError true", () => {
    test("Then it should show the received text", () => {
      const {
        modal: { isError, modalText },
      } = mockErrorRegister;
      const expectedModalText = "Error on registration";

      renderWithProviders(<Modal isError={isError} modalText={modalText} />, {
        preloadedState: {
          ui: mockErrorRegister,
          user: userStateMock,
          venues: mockVenuesInitialState,
        },
      });

      const modal = screen.queryByText(expectedModalText);
      expect(modal).toBeInTheDocument();
    });
  });
});
