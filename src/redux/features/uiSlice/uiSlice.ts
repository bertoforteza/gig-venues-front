import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filter, OpenModalActionPayload, Pagination, UiState } from "../types";

const initialUiState: UiState = {
  isLoading: false,
  modal: {
    isError: false,
    isOpen: false,
    modalText: "",
  },
  pages: {
    currentPage: 0,
    totalPages: 0,
    isNextPage: true,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    openModal: (
      currentUiState,
      action: PayloadAction<OpenModalActionPayload>
    ) => ({
      ...currentUiState,
      modal: {
        isOpen: true,
        isError: action.payload.isError,
        modalText: action.payload.modalText,
      },
    }),

    closeModal: (currentUiState) => ({
      ...currentUiState,
      modal: {
        isOpen: false,
        isError: false,
        modalText: "",
      },
    }),

    showLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: true,
    }),

    hideLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: false,
    }),

    loadPages: (currentUiState, action: PayloadAction<Pagination>) => ({
      ...currentUiState,
      pages: {
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
        isNextPage: action.payload.isNextPage,
      },
    }),

    advancePage: (currentUiState) => ({
      ...currentUiState,
      pages: {
        ...currentUiState.pages,
        currentPage: currentUiState.pages.currentPage + 1,
      },
    }),

    addFilter: (currentUiState, action: PayloadAction<Filter>) => ({
      ...currentUiState,
      filter: { ...action.payload },
      pages: { ...currentUiState.pages, currentPage: 0 },
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  loadPages: loadPagesActionCreator,
  advancePage: advancePageActionCreator,
  addFilter: addFilterActionCreator,
} = uiSlice.actions;
