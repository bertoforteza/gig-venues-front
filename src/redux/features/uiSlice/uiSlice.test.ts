import mockInitialUiState from "../../../mocks/uiMocks/mockInitialUiState";
import mockIsLoading from "../../../mocks/uiMocks/mockIsLoading";
import { OpenModalActionPayload, Pagination, UiState } from "../types";
import {
  addFilterActionCreator,
  advancePageActionCreator,
  closeModalActionCreator,
  hideLoadingActionCreator,
  loadPagesActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given the function uiSlice", () => {
  describe("When it receives an empty initial state and a openModal action with text 'Something went wrong' and isError true", () => {
    test("Then it should return a new state with the received text and isError true", () => {
      const currentState: UiState = mockInitialUiState;

      const actionPayload: OpenModalActionPayload = {
        isError: true,
        modalText: "Something went wrong",
      };
      const openModalAction = openModalActionCreator(actionPayload);
      const newUiState = uiReducer(currentState, openModalAction);
      const expectedUiState: UiState = {
        isLoading: false,
        modal: {
          isError: true,
          isOpen: true,
          modalText: "Something went wrong",
        },
        pages: {
          currentPage: 0,
          totalPages: 2,
          isNextPage: true,
        },
      };

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives a current state with isOpen true and a closeModal action", () => {
    test("Then it should return a new state with isOpen false", () => {
      const currentUiState: UiState = {
        isLoading: false,
        modal: {
          isError: true,
          isOpen: true,
          modalText: "Something went wrong",
        },
        pages: {
          currentPage: 0,
          totalPages: 2,
          isNextPage: true,
        },
      };
      const expectedUiState: UiState = mockInitialUiState;
      const closeModalAction = closeModalActionCreator();
      const newUiState = uiReducer(currentUiState, closeModalAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an initial state with isLoading false and a showLoading action", () => {
    test("Then it should return a new state with isLoading true", () => {
      const currentUiState: UiState = mockInitialUiState;
      const expectedUiState: UiState = {
        ...mockInitialUiState,
        isLoading: true,
      };
      const showLoadingAction = showLoadingActionCreator();

      const newUiState = uiReducer(currentUiState, showLoadingAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an initial state with isLoading true and a hideLoading action", () => {
    test("Then it should return a new state with isLoading false", () => {
      const currentUiState: UiState = mockIsLoading;
      const expectedUiState: UiState = {
        ...mockIsLoading,
        isLoading: false,
      };
      const hideLoadingAction = hideLoadingActionCreator();

      const newUiState = uiReducer(currentUiState, hideLoadingAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an initial state and a loadPages action with current page 0 and total pages 2", () => {
    test("Then it should return a new state with the received pages information", () => {
      const currentUiState: UiState = mockInitialUiState;
      const pagesPayload: Pagination = {
        currentPage: 0,
        totalPages: 2,
        isNextPage: true,
      };
      const expectedUiState: UiState = {
        ...mockInitialUiState,
        pages: pagesPayload,
      };
      const loadPagesAction = loadPagesActionCreator(pagesPayload);

      const newUiState = uiReducer(currentUiState, loadPagesAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an initial state with current page 0, total pages 2, and a advancePage action", () => {
    test("Then it should return a new state with current page 1", () => {
      const currentUiState: UiState = mockInitialUiState;
      const expectedUiState: UiState = {
        ...mockInitialUiState,
        pages: { ...mockInitialUiState.pages, currentPage: 1 },
      };

      const newUiState = uiReducer(currentUiState, advancePageActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an initial state and an addFilter action with minCapacity 0 and maxCapacity 500", () => {
    test("Then it should return a new state with current page 0 and the receives filter options", () => {
      const currentUiState: UiState = mockInitialUiState;
      const expectedUiState: UiState = {
        ...mockInitialUiState,
        pages: { ...mockInitialUiState.pages, currentPage: 0 },
        filter: { minCapacity: 0, maxCapacity: 500 },
      };
      const addFilterAction = addFilterActionCreator({
        minCapacity: 0,
        maxCapacity: 500,
      });

      const newUiState = uiReducer(currentUiState, addFilterAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
