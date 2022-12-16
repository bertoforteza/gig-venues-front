import { UiState } from "../../redux/features/types";

const mockSuccessRegister: UiState = {
  isLoading: false,
  modal: {
    isError: false,
    isOpen: true,
    modalText: "Welcome to gig venues!",
  },
  pages: {
    currentPage: 0,
    totalPages: 0,
    isNextPage: true,
  },
};

export default mockSuccessRegister;
