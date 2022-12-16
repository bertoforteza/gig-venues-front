import { renderHook } from "@testing-library/react";
import localStorageMock from "../../mocks/localStorage/localStorageMock";
import mockInitialStore from "../../mocks/mockInitialStore";
import mockUserWithToken from "../../mocks/mockUserWithToken";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../redux/features/userSlice/userSlice";
import ProviderWrapper from "../../utils/testUtils/ProviderWrapper";
import { JwtCustomPayload } from "../types";
import useToken from "./useToken";

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

jest.mock("jwt-decode", () => {
  return () => ({ id: "adminId", username: "admin" } as JwtCustomPayload);
});

describe("Given a useToken custom hook", () => {
  describe("When its method getToken is invoked and there ir no token in the local storage", () => {
    test("Then dispatch should not be invoked", () => {
      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: ProviderWrapper,
      });

      getToken();

      expect(dispatchSpy).not.toHaveBeenCalled();
    });
  });

  describe("When its method getToken is invoked and there is a token 'adminToken' in the local storage", () => {
    test("Then dispatch should be invoked with logiUser action", () => {
      localStorageMock.setItem("token", "adminToken");

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: ProviderWrapper,
      });

      getToken();

      expect(dispatchSpy).toHaveBeenCalledWith(
        loginUserActionCreator(mockUserWithToken)
      );
    });
  });

  describe("When its method deleteToken is invoked and there is a token 'adminToken' in the local storage", () => {
    test("Then dispatch should be invoked with logoutUser action", () => {
      localStorageMock.setItem("token", "adminToken");
      const {
        result: {
          current: { deleteToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: ProviderWrapper,
      });

      deleteToken();

      expect(dispatchSpy).toHaveBeenCalledWith(logoutUserActionCreator());
    });
  });
});
