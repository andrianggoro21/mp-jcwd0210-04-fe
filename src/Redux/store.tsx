import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "../Reducers";

const rootReducer = combineReducers({
  mainReducer,
});

const preloadedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
