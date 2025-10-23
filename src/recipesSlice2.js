// src/features/recipes/recipesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async (limit = 10) => {
    const response = await fetch(`https://dummyjson.com/recipes?limit=${limit}`);

    if (!response.ok) {
      throw new Error('Errore nel recupero delle ricette');
    }

    const data = await response.json();

    // Fallback: se l'API non restituisce "recipes", usa "data" direttamente
    return data.recipes || data;
  }
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default recipesSlice.reducer;
