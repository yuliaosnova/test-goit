import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./usersSlice";

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    usersApi.middleware,
  ],
});
