import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "../redux/features/uiSlice/uiSlice";
import { userReducer } from "../redux/features/userSlice/userSlice";
import { venuesReducer } from "../redux/features/venuesSlice/venuesSlice";
import { store } from "../redux/store";
import mockInitialUiState from "./uiMocks/mockInitialUiState";
import userStateMock from "./userMocks/userStateMock";
import mockVenuesInitialState from "./venuesMocks/mockVenuesInitialState";

const mockInitialStore: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    venues: venuesReducer,
  },
  preloadedState: {
    ui: mockInitialUiState,
    user: userStateMock,
    venues: mockVenuesInitialState,
  },
});

export default mockInitialStore;
