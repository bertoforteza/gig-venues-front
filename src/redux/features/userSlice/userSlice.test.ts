import { getRandomUserState } from "../../../factories/userFactory";
import { UserLoginData, UserState } from "../types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";
import mockLoggedUser from "../../../mocks/userMocks/mockLoggedUser";

const newUserState = getRandomUserState();

describe("Given the function userSlice", () => {
  describe("When it receives an empty initial state and a loginUser action with a new user as payload", () => {
    test("Then it should return a new state with the received user and isLogged property true", () => {
      const expectedState: UserState = {
        ...newUserState,
        isLogged: true,
      };
      const loginActionPayload: UserLoginData = {
        username: newUserState.username,
        id: newUserState.id,
        token: newUserState.token,
      };
      const loginUserAction = loginUserActionCreator(loginActionPayload);
      const newState = userReducer(newUserState, loginUserAction);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it receives an initial state with a logged user and a logoutUser action", () => {
    test("Then it should return a copy of the userInitialState", () => {
      const userInitialState: UserState = {
        username: "",
        id: "",
        token: "",
        isLogged: false,
      };
      const currentState: UserState = mockLoggedUser;
      const logoutUserAction = logoutUserActionCreator();
      const newState = userReducer(currentState, logoutUserAction);

      expect(newState).toStrictEqual(userInitialState);
    });
  });
});
