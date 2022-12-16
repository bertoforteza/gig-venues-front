import { UiState } from "../../redux/features/types";

const mockInitialUiState: UiState = {
  isLoading: false,
  modal: {
    isError: false,
    isOpen: false,
    modalText: "",
  },
  pages: {
    currentPage: 0,
    totalPages: 2,
    isNextPage: true,
  },
};

export default mockInitialUiState;
