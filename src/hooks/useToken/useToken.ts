import { useCallback } from "react";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import decodeToken from "../../utils/decodeToken";
import { JwtCustomPayload } from "../types";

const useToken = () => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user: JwtCustomPayload = decodeToken(token);

      dispatch(loginUserActionCreator({ ...user, token }));
    }
  }, [dispatch]);

  const deleteToken = () => {
    localStorage.removeItem("token");
    dispatch(logoutUserActionCreator());
  };

  return { getToken, deleteToken };
};

export default useToken;
