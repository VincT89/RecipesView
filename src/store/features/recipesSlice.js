// src/features/recipes/recipesSlice.js

// Importa gli strumenti necessari da Redux Toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Thunk asincrono per recuperare le ricette da un'API esterna.
 * Accetta un parametro `limit` per specificare quante ricette recuperare.
 */
export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async (limit = 10) => {
    // Effettua la chiamata HTTP all'endpoint con il parametro dinamico `limit`
    const response = await fetch(`https://dummyjson.com/recipes?limit=${limit}`);

    // Gestisce eventuali errori di rete o risposta non OK
    if (!response.ok) {
      throw new Error('Errore nel recupero delle ricette');
    }

    // Converte la risposta in JSON e restituisce solo l'array di ricette
    const data = await response.json();
    return data.recipes;
  }
);

/**
 * Slice Redux per gestire lo stato delle ricette.
 * Include stato iniziale, reducer e gestione degli stati asincroni.
 */
const recipesSlice = createSlice({
  name: 'recipes', // Nome dello slice

  // Stato iniziale
  initialState: {
    items: [],       // Array di ricette
    status: 'idle',  // Stato della richiesta: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,     // Eventuale messaggio di errore
  },

  // Reducer standard (non ne usiamo in questo caso)
  reducers: {},

  // Gestione degli stati del thunk asincrono
  extraReducers: (builder) => {
    builder
      // Quando la richiesta è in corso
      .addCase(fetchRecipes.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })

      // Quando la richiesta ha successo
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload; // Aggiorna l'array di ricette
      })

      // Quando la richiesta fallisce
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Salva il messaggio di errore
      });
  },
});


// Esporta il reducer per integrarlo nello store Redux
export default recipesSlice.reducer;
