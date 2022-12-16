import { UiState } from "../../redux/features/types";

const mockErrorRegister: UiState = {
  isLoading: false,
  modal: {
    isError: true,
    isOpen: true,
    modalText: "Error on registration",
  },
  pages: {
    currentPage: 0,
    totalPages: 0,
    isNextPage: true,
  },
};

export default mockErrorRegister;
