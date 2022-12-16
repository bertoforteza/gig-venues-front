import { renderHook } from "@testing-library/react";
import { getNewRandomVenue } from "../../factories/venuesFactory";
import mockInitialStore from "../../mocks/mockInitialStore";
import mockVenuesList from "../../mocks/mockVenuesList";
import {
  hideLoadingActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import {
  deleteVenueActionCreator,
  loadMoreUserVenuesActionCreator,
  loadMoreVenuesActionCreator,
  loadUserVenuesActionCreator,
  loadVenueByIdActionCreator,
  loadVenuesActionCreator,
} from "../../redux/features/venuesSlice/venuesSlice";
import ProviderWrapper from "../../utils/testUtils/ProviderWrapper";
import useVenues from "./useVenues";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a useVenues custom hook", () => {
  const newVenue = getNewRandomVenue();

  describe("When it's method getVenues is invoked", () => {
    test("Then it should invoke dispatch with loadVenuesActionCreator and a list of venues", async () => {
      const {
        result: {
          current: { getVenues },
        },
      } = renderHook(() => useVenues(), {
        wrapper: ProviderWrapper,
      });

      await getVenues();

      expect(dispatchSpy).toHaveBeenCalledWith(
        loadVenuesActionCreator(mockVenuesList)
      );
    });
  });

  describe("When it's method getVenues is invoked with page 1", () => {
    test("Then it should invoke dispatch with loadMoreVenuesActionCreator and a list of venues", async () => {
      const {
        result: {
          current: { getVenues },
        },
      } = renderHook(() => useVenues(), {
        wrapper: ProviderWrapper,
      });

      await getVenues(1);

      expect(dispatchSpy).toHaveBeenCalledWith(
        loadMoreVenuesActionCreator(mockVenuesList)
      );
    });
  });

  describe("When it's method getVenues is invoked and the request fails", () => {
    test("Then it should invoke dispatch with hideLoadingActionCreator and openModalActionCreator with an error", async () => {
      const {
        result: {
          current: { getVenues },
        },
      } = renderHook(() => useVenues(), {
        wrapper: ProviderWrapper,
      });

      await getVenues();

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        hideLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator({
          isError: true,
          modalText: "Something went wrong",
        })
      );
    });
  });

  describe("When it's method getUserVenues is invoked", () => {
    test("Then it should invoke dispatch with loadUserVenuesActionCreator and a list of venues", async () => {
      const {
        result: {
          current: { getUserVenues },
        },
      } = renderHook(() => useVenues(), {
        wrapper: ProviderWrapper,
      });

      await getUserVenues();

      expect(dispatchSpy).toHaveBeenCalledWith(
        loadUserVenuesActionCreator(mockVenuesList)
      );
    });
  });

  describe("When it's method getUserVenues is invoked with page 1", () => {
    test("Then it should invoke dispatch with loadMoreUserVenuesActionCreator and a list of venues", async () => {
      const {
        result: {
          current: { getUserVenues },
        },
      } = renderHook(() => useVenues(), {
        wrapper: ProviderWrapper,
      });

      await getUserVenues(1);

      expect(dispatchSpy).toHaveBeenCalledWith(
        loadMoreUserVenuesActionCreator(mockVenuesList)
      );
    });
  });

  describe("When it's method getUserVenues is invoked and the request fails", () => {
    test("Then it should invoke dispatch with hideLoadingActionCreator and openModalActionCreator with an error", async () => {
      const {
        result: {
          current: { getUserVenues },
        },
      } = renderHook(() => useVenues(), {
        wrapper: ProviderWrapper,
      });

      await getUserVenues();

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        hideLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator({
          isError: true,
          modalText: "Something went wrong",
        })
      );
    });
  });

  describe("When it's method deleteVenue is invoked with a venueId", () => {
    test("Then it should invoke dispatch with deleteVenueActionCreator and the received venueId", async () => {
      const {
        result: {
          current: { deleteVenue },
        },
      } = renderHook(() => useVenues(), {
        wrapper: ProviderWrapper,
      });
      const { id: testVenueId } = mockVenuesList[1];

      await deleteVenue(testVenueId);

      expect(dispatchSpy).toHaveBeenCalledWith(
        deleteVenueActionCreator(testVenueId)
      );
    });
  });

  describe("When it's method deleteVenue is invoked and the request fails", () => {
    test("Then it shoould invoke dispatch with hideLoadingActionCreator and openModalActionCreator with an error", async () => {
      const {
        result: {
          current: { deleteVenue },
        },
      } = renderHook(() => useVenues(), {
        wrapper: ProviderWrapper,
      });
      const { id: testVenueId } = mockVenuesList[1];

      await deleteVenue(testVenueId);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        hideLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator({
          isError: true,
          modalText: "Something went wrong",
        })
      );
    });
  });

  describe("When it's method createNewVenue is invoked and the request fails", () => {
    test("Then it should invoke dispatch with hideLoadingActionCreator and openModalActionCreator with an error", async () => {
      const {
        result: {
          current: { createNewVenue },
        },
      } = renderHook(() => useVenues(), {
        wrapper: ProviderWrapper,
      });

      await createNewVenue(newVenue);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        hideLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator({
          isError: true,
          modalText: "There was an error creating the venue",
        })
      );
    });
  });

  describe("When it's method createNewVenue is invoked with a new venueData", () => {
    test("Then it should invoke dispatch with showLoadingActionCreator, hideLoadingActionCreator and openModalActionCreator with text 'Your venue has been successfully created'", async () => {
      const {
        result: {
          current: { createNewVenue },
        },
      } = renderHook(() => useVenues(), {
        wrapper: ProviderWrapper,
      });

      await createNewVenue(newVenue);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        hideLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator({
          isError: false,
          modalText: "Your venue has been successfully created",
        })
      );
      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When it's method getVenueById is invoked with a venueId", () => {
    test("Then it should invoke dispatch with showLoadingActionCreator, hideLoadingActionCreator and loadVenueByIdActionCreator with the received venue", async () => {
      const venue = mockVenuesList[0];
      const venueId = venue.id;
      const {
        result: {
          current: { getVenueById },
        },
      } = renderHook(() => useVenues(), {
        wrapper: ProviderWrapper,
      });

      await getVenueById(venueId);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        loadVenueByIdActionCreator(venue)
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        hideLoadingActionCreator()
      );
    });
  });

  describe("When it's method getVenueById is invoked and the request fails", () => {
    test("Then it should invoke dispatch with hideLoadingActionCreator and openModalActionCreator with an error", async () => {
      const venue = mockVenuesList[0];
      const venueId = venue.id;
      const {
        result: {
          current: { getVenueById },
        },
      } = renderHook(() => useVenues(), {
        wrapper: ProviderWrapper,
      });

      await getVenueById(venueId);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        hideLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator({
          isError: true,
          modalText: "Could not find the venue",
        })
      );
    });
  });
});
