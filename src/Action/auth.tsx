import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./types";

import AuthService from "../Services/service";
import { Dispatch } from "redux";

export const login =
  (email: string, password: string) => (dispatch: Dispatch) => {
    return AuthService.login(email, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: LOGIN_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };

export const register =
  (
    username: string,
    email: string,
    password: string,
    phoneNumber: string,
    address: string,
    avatar: string,
    roleId: number
  ) =>
  (dispatch: Dispatch) => {
    return AuthService.register(
      username,
      email,
      password,
      phoneNumber,
      address,
      avatar,
      roleId
    ).then(
      (response) => {
        console.log("masuk authhh");
        console.log(response);
        dispatch({
          type: REGISTER_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: REGISTER_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
