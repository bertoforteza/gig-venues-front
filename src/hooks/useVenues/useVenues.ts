import axios, { AxiosError } from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  hideLoadingActionCreator,
  loadPagesActionCreator,
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
import { AxiosResponseBody, NewVenueData } from "../types";

const apiUrl = process.env.REACT_APP_API_URL;

const useVenues = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const getVenues = useCallback(
    async (page = 0, minCapacity?: number, maxCapacity?: number) => {
      try {
        dispatch(showLoadingActionCreator());
        const response = await axios.get(`${apiUrl}/venues`, {
          params: {
            page,
            minCapacity,
            maxCapacity,
          },
        });

        const { venues, isNextPage, totalPages } = response.data;

        if (page === 0) {
          dispatch(loadVenuesActionCreator(venues));
        } else {
          dispatch(loadMoreVenuesActionCreator(venues));
        }

        dispatch(
          loadPagesActionCreator({
            totalPages,
            isNextPage: isNextPage,
            currentPage: page,
          })
        );
        dispatch(hideLoadingActionCreator());
      } catch (error: unknown) {
        dispatch(hideLoadingActionCreator());

        dispatch(
          openModalActionCreator({
            isError: true,
            modalText: (error as AxiosError<AxiosResponseBody>).response?.data
              .error!,
          })
        );
      }
    },
    [dispatch]
  );

  const getUserVenues = useCallback(
    async (page = 0) => {
      try {
        dispatch(showLoadingActionCreator());
        const response = await axios.get(`${apiUrl}/venues/my-venues`, {
          params: {
            page,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { userVenues, isNextPage, totalPages } = response.data;

        if (page === 0) {
          dispatch(loadUserVenuesActionCreator(userVenues));
        } else {
          dispatch(loadMoreUserVenuesActionCreator(userVenues));
        }

        dispatch(
          loadPagesActionCreator({
            totalPages,
            isNextPage: isNextPage,
            currentPage: page,
          })
        );
        dispatch(hideLoadingActionCreator());
      } catch (error: unknown) {
        dispatch(hideLoadingActionCreator());

        dispatch(
          openModalActionCreator({
            isError: true,
            modalText: (error as AxiosError<AxiosResponseBody>).response?.data
              .error!,
          })
        );
      }
    },
    [dispatch, token]
  );

  const deleteVenue = useCallback(
    async (venueId: string) => {
      try {
        dispatch(showLoadingActionCreator());
        await axios.delete(`${apiUrl}/venues/delete/${venueId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(deleteVenueActionCreator(venueId));
        dispatch(hideLoadingActionCreator());
        dispatch(
          openModalActionCreator({
            isError: false,
            modalText: "Your venue was successfully deleted",
          })
        );
      } catch (error: unknown) {
        dispatch(hideLoadingActionCreator());

        dispatch(
          openModalActionCreator({
            isError: true,
            modalText: (error as AxiosError<AxiosResponseBody>).response?.data
              .error!,
          })
        );
      }
    },
    [dispatch, token]
  );

  const createNewVenue = async (venueData: NewVenueData) => {
    try {
      dispatch(showLoadingActionCreator());

      await axios.post(`${apiUrl}/venues/new-venue`, venueData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(hideLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: false,
          modalText: "Your venue has been successfully created",
        })
      );
      navigate("/my-venues");
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());

      dispatch(
        openModalActionCreator({
          isError: true,
          modalText: (error as AxiosError<AxiosResponseBody>).response?.data
            .error!,
        })
      );
    }
  };

  const getVenueById = useCallback(
    async (venueId: string) => {
      try {
        dispatch(showLoadingActionCreator());
        const { data } = await axios.get(`${apiUrl}/venues/${venueId}`);

        dispatch(loadVenueByIdActionCreator(data));
        dispatch(hideLoadingActionCreator());
      } catch (error: unknown) {
        dispatch(hideLoadingActionCreator());

        dispatch(
          openModalActionCreator({
            isError: true,
            modalText: (error as AxiosError<AxiosResponseBody>).response?.data
              .error!,
          })
        );
      }
    },
    [dispatch]
  );

  return {
    getVenues,
    getUserVenues,
    deleteVenue,
    createNewVenue,
    getVenueById,
  };
};

export default useVenues;
