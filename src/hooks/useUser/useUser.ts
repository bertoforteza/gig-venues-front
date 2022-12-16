import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { UserCredentials, UserRegisterData } from "../../data/types";
import {
  hideLoadingActionCreator,
  openModalActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../redux/features/userSlice/userSlice";
import decodeToken from "../../utils/decodeToken";
import { AxiosResponseBody, JwtCustomPayload } from "../types";
import useToken from "../useToken/useToken";

const apiUrl = process.env.REACT_APP_API_URL;

const useUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { deleteToken } = useToken();

  const registerUser = async (registerData: UserRegisterData) => {
    dispatch(showLoadingActionCreator());
    try {
      await axios.post(`${apiUrl}/user/register`, registerData);

      dispatch(hideLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: false,
          modalText: "You are now registered in",
        })
      );
      navigate("/login");
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

  const loginUser = async (loginData: UserCredentials) => {
    dispatch(showLoadingActionCreator());
    try {
      const loginResponse = await axios.post(`${apiUrl}/user/login`, loginData);

      const { token } = await loginResponse.data;
      const loggedUser: JwtCustomPayload = decodeToken(token);

      dispatch(hideLoadingActionCreator());
      dispatch(loginUserActionCreator({ ...loggedUser, token }));
      localStorage.setItem("token", token);
      navigate("/home");
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

  const logoutUser = () => {
    deleteToken();

    dispatch(logoutUserActionCreator());
    navigate("/login");
  };

  return { registerUser, loginUser, logoutUser };
};

export default useUser;
