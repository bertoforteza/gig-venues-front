import { renderHook } from "@testing-library/react";
import * as router from "react-router";
import { UserCredentials, UserRegisterData } from "../../data/types";
import mockInitialStore from "../../mocks/mockInitialStore";
import { OpenModalActionPayload } from "../../redux/features/types";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../redux/features/userSlice/userSlice";
import ProviderWrapper from "../../utils/testUtils/ProviderWrapper";
import { JwtCustomPayload } from "../types";
import useUser from "./useUser";

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("jwt-decode", () => {
  return () => ({ id: "adminId", username: "admin" } as JwtCustomPayload);
});

const mockNavigate = jest.fn();
beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
});

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

const mockDeleteToken = jest.fn();
jest.mock("../useToken/useToken", () => {
  return () => ({
    deleteToken: mockDeleteToken,
  });
});

describe("Given a useUser custom hook", () => {
  describe("When its method registerUser is invoked with username 'admin', password 'adminadmin' and email 'admin@admin.com'", () => {
    test("Then it should invoke dispatch with openModalActionCreator with text 'You are now registered in'", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const newUser: UserRegisterData = {
        username: "admin",
        password: "adminadmin",
        email: "admin@admin.com",
      };
      const modalPayload: OpenModalActionPayload = {
        isError: false,
        modalText: "You are now registered in",
      };

      await registerUser(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(modalPayload)
      );
    });

    test("Then useNavigate should be invoked", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const newUser: UserRegisterData = {
        username: "admin",
        password: "adminadmin",
        email: "admin@admin.com",
      };

      await registerUser(newUser);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When its method registerUser is invoked with username 'registeredAdmin'", () => {
    test("Then it should invoke dispatch with openModalAction creator with text 'This username is already registered'", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const newUser: UserRegisterData = {
        username: "registeredAdmin",
        password: "",
        email: "",
      };
      const modalPayload: OpenModalActionPayload = {
        isError: true,
        modalText: "This username is already registered",
      };

      await registerUser(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(modalPayload)
      );
    });
  });

  describe("When its method loginUser is invoked with a correct username 'admin' and password 'adminadmin'", () => {
    test("Then it should invoke dispatch with loginUserActionAcreator", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const user: UserCredentials = {
        username: "admin",
        password: "adminadmin",
      };
      const loginActionPayload = {
        username: "admin",
        id: "adminId",
        token: "adminToken",
      };

      await loginUser(user);

      expect(dispatchSpy).toHaveBeenCalledWith(
        loginUserActionCreator(loginActionPayload)
      );
    });
  });

  describe("When its method loginUser is invoked with correct username 'admin' and incorrect password 'password'", () => {
    test("Then it should invoke dispatch with openModalActionCreator and text 'Incorrect username or password'", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const user: UserCredentials = {
        username: "admin",
        password: "password",
      };
      const modalPayload: OpenModalActionPayload = {
        isError: true,
        modalText: "Incorrect username or password",
      };

      await loginUser(user);

      expect(dispatchSpy).toHaveBeenCalledWith(
        openModalActionCreator(modalPayload)
      );
    });
  });

  describe("When its method logoutUser is invoked", () => {
    test("Then it deleteToken should be invoked, distaptch should be invoked with logoutUser action, and useNavigate sould be invoked", () => {
      const {
        result: {
          current: { logoutUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      logoutUser();

      expect(mockDeleteToken).toHaveBeenCalled();
      expect(dispatchSpy).toHaveBeenCalledWith(logoutUserActionCreator());
      expect(mockNavigate).toHaveBeenCalledWith("/login");
    });
  });
});
