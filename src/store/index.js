import { configureStore } from '@reduxjs/toolkit';
import profileReducer from "./features/profileSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer,  // Registro profileSlice
  },
});

export default store;