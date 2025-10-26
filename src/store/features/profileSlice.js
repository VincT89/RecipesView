import { createSlice } from '@reduxjs/toolkit';

// Creiamo il slice per il profilo utente
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: null,
  },
  reducers: {
    // Aggiungiamo un'azione per settare i dati dell'utente
    setUserProfile: (state, action) => {
      state.user = action.payload; // Aggiorna i dettagli dell'utente con i dati ricevuti
    },
    clearUserProfile: (state) => {
      state.user = null; // Pulisce i dettagli dell'utente
    },
  },
});

// Esportiamo le azioni
export const { setUserProfile, clearUserProfile } = profileSlice.actions;

// Esportiamo il reducer per essere usato nel store
export default profileSlice.reducer;
