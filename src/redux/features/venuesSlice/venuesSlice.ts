import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Venue, VenuesState } from "../types";

export const venuesInitialState: VenuesState = {
  venues: [],
  userVenues: [],
};

const venuesSlice = createSlice({
  name: "venues",
  initialState: venuesInitialState,
  reducers: {
    loadVenues: (currentVenuesState, action: PayloadAction<Venue[]>) => ({
      ...currentVenuesState,
      venues: [...action.payload],
    }),

    loadMoreVenues: (currentVenuesState, action: PayloadAction<Venue[]>) => ({
      ...currentVenuesState,
      venues: [...currentVenuesState.venues, ...action.payload],
    }),

    loadUserVenues: (currentVenuesState, action: PayloadAction<Venue[]>) => ({
      ...currentVenuesState,
      userVenues: [...action.payload],
    }),

    loadMoreUserVenues: (
      currentVenuesState,
      action: PayloadAction<Venue[]>
    ) => ({
      ...currentVenuesState,
      userVenues: [...currentVenuesState.userVenues, ...action.payload],
    }),

    deleteVenue: (currentVenuesState, action: PayloadAction<string>) => ({
      ...currentVenuesState,
      venues: currentVenuesState.venues.filter(
        (venue) => venue.id !== action.payload
      ),
      userVenues: currentVenuesState.userVenues.filter(
        (venue) => venue.id !== action.payload
      ),
    }),

    loadVenueById: (currentVenuesState, action: PayloadAction<Venue>) => ({
      ...currentVenuesState,
      venues: [action.payload],
      userVenues: [action.payload],
    }),
  },
});

export const venuesReducer = venuesSlice.reducer;

export const {
  loadVenues: loadVenuesActionCreator,
  loadMoreVenues: loadMoreVenuesActionCreator,
  loadUserVenues: loadUserVenuesActionCreator,
  loadMoreUserVenues: loadMoreUserVenuesActionCreator,
  deleteVenue: deleteVenueActionCreator,
  loadVenueById: loadVenueByIdActionCreator,
} = venuesSlice.actions;
