export interface ModalState {
  modalText: string;
  isError: boolean;
  isOpen: boolean;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  isNextPage: boolean;
}

export interface Filter {
  minCapacity: number;
  maxCapacity: number;
}

export interface UiState {
  modal: ModalState;
  isLoading: boolean;
  pages: Pagination;
  filter?: Filter;
}

export interface OpenModalActionPayload {
  modalText: string;
  isError: boolean;
}

export interface UserLoginData {
  username: string;
  id: string;
  token: string;
}

export interface UserState extends UserLoginData {
  isLogged: boolean;
}

export interface Venue {
  id: string;
  name: string;
  city: string;
  address: string;
  capacity: number;
  indoor: boolean;
  phoneNumber: string;
  email: string;
  picture: string;
  description: string;
  backupPicture: string;
}

export interface VenuesState {
  venues: Venue[];
  userVenues: Venue[];
}
