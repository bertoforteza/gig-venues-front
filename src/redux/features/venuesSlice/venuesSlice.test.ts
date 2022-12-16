import { getRandomVenuesList } from "../../../factories/venuesFactory";
import mockVenuesList from "../../../mocks/mockVenuesList";
import mockVenuesInitialState from "../../../mocks/venuesMocks/mockVenuesInitialState";
import { VenuesState } from "../types";
import {
  deleteVenueActionCreator,
  loadMoreUserVenuesActionCreator,
  loadMoreVenuesActionCreator,
  loadUserVenuesActionCreator,
  loadVenueByIdActionCreator,
  loadVenuesActionCreator,
  venuesReducer,
} from "./venuesSlice";

describe("Given the function venuesSlice", () => {
  describe("When it receives an empty initial state and a loadVenues action with a list of venues", () => {
    test("Then it should return a new state with the received list of venues", () => {
      const currentVenuesState: VenuesState = mockVenuesInitialState;
      const venuesList = getRandomVenuesList(10);
      const loadVenuesAction = loadVenuesActionCreator(venuesList);
      const expectedVenuesState: VenuesState = {
        venues: venuesList,
        userVenues: [],
      };

      const newVenuesState = venuesReducer(
        currentVenuesState,
        loadVenuesAction
      );

      expect(newVenuesState).toStrictEqual(expectedVenuesState);
    });
  });

  describe("When it receives an empty initial state and an unknown action", () => {
    test("Then it should return a copy of the state with no changes", () => {
      const currentVenuesState: VenuesState = mockVenuesInitialState;
      const unknownAction = {
        type: "unknown",
      };

      const newState = venuesReducer(currentVenuesState, unknownAction);

      expect(newState).toStrictEqual(currentVenuesState);
    });
  });

  describe("When it receives an empty initial state and a loadUserVenues action with a list of venues", () => {
    test("Then it should return a new state with the received list of venues", () => {
      const currentVenuesState: VenuesState = mockVenuesInitialState;
      const userVenuesList = getRandomVenuesList(10);
      const loadUserVenuesAction = loadUserVenuesActionCreator(userVenuesList);
      const expectedVenuesState: VenuesState = {
        venues: [],
        userVenues: userVenuesList,
      };

      const newVenuesState = venuesReducer(
        currentVenuesState,
        loadUserVenuesAction
      );

      expect(newVenuesState).toStrictEqual(expectedVenuesState);
    });
  });

  describe("When it receives an initial state with a list of venues and a deleteVenue action with a venue id", () => {
    test("Then it should return a new state without the received venue", () => {
      const currentVenuesState: VenuesState = {
        venues: mockVenuesList,
        userVenues: mockVenuesList,
      };
      const venueToDelete = mockVenuesList[0];
      const deleteVenueAction = deleteVenueActionCreator(venueToDelete.id);
      const expectedVenuesState: VenuesState = {
        venues: [mockVenuesList[1]],
        userVenues: [mockVenuesList[1]],
      };

      const newVenuesState = venuesReducer(
        currentVenuesState,
        deleteVenueAction
      );

      expect(newVenuesState).toStrictEqual(expectedVenuesState);
    });
  });

  describe("When it receives an initial state with a list of venues and a loadVenueById action with a venue", () => {
    test("Then it should return a new state with the received venue", () => {
      const currentVenuesState: VenuesState = {
        venues: mockVenuesList,
        userVenues: mockVenuesList,
      };
      const venueToLoad = mockVenuesList[0];
      const loadVenueByIdAction = loadVenueByIdActionCreator(venueToLoad);
      const expectedVenuesState: VenuesState = {
        venues: [venueToLoad],
        userVenues: [venueToLoad],
      };
      const newVenuesState = venuesReducer(
        currentVenuesState,
        loadVenueByIdAction
      );

      expect(newVenuesState).toStrictEqual(expectedVenuesState);
    });
  });

  describe("When it receives a initial state with a list of 10 venues and a loadMoreVenues action with a list of 2 venues", () => {
    test("Then it should return a new state with the initial list of venues and the new list", () => {
      const currentVenuesState: VenuesState = {
        venues: getRandomVenuesList(10),
        userVenues: [],
      };
      const newVenuesList = mockVenuesList;
      const loadMoreVenuesAction = loadMoreVenuesActionCreator(newVenuesList);
      const expectedVenuesState: VenuesState = {
        venues: [...currentVenuesState.venues, ...newVenuesList],
        userVenues: [],
      };

      const newVenuesState = venuesReducer(
        currentVenuesState,
        loadMoreVenuesAction
      );

      expect(newVenuesState).toStrictEqual(expectedVenuesState);
    });
  });

  describe("When it receives a initial state with a list of 10 user venues and a loadMoreUserVenues action with a list of 2 venues", () => {
    test("Then it should return a new state with the initial list of user venues and the new list", () => {
      const currentVenuesState: VenuesState = {
        venues: [],
        userVenues: getRandomVenuesList(10),
      };
      const newUserVenuesList = mockVenuesList;
      const loadMoreUserVenuesAction =
        loadMoreUserVenuesActionCreator(newUserVenuesList);
      const expectedUserVenuesState: VenuesState = {
        venues: [],
        userVenues: [...currentVenuesState.userVenues, ...newUserVenuesList],
      };

      const newVenuesState = venuesReducer(
        currentVenuesState,
        loadMoreUserVenuesAction
      );

      expect(newVenuesState).toStrictEqual(expectedUserVenuesState);
    });
  });
});
