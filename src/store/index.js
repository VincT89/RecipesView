import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import recipesReducer from './features/recipesSlice';
import searchInputReducer from './features/searchSlice';
import profileReducer from './features/profileSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    recipes: recipesReducer,
    searchInput: searchInputReducer,
    profile: profileReducer,
  },
});

export default store;
