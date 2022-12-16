import { UiState } from "../../redux/features/types";

const mockIsLoading: UiState = {
  isLoading: true,
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

export default mockIsLoading;
