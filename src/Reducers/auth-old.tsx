import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../Action/types";

interface User {
  id: number;
  username: string;
  email: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

const user = JSON.parse(localStorage.getItem("user"));

const initialState: AuthState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

type AuthActionTypes =
  | {
      type:
        | typeof REGISTER_SUCCESS
        | typeof REGISTER_FAIL
        | typeof LOGIN_FAIL
        | typeof LOGOUT;
    }
  | { type: typeof LOGIN_SUCCESS; payload: { user: User } };

export default function authReducer(
  state: AuthState = initialState,
  action: AuthActionTypes
): AuthState {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
