import { createSlice } from "@reduxjs/toolkit";

// Stato iniziale del profilo utente come un oggetto
const initialState = {
	user: {
		firstName: "",
		lastName: "",
		maidenName: "",
		age: "",
		gender: "",
		email: "",
		image: "",
	},
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setProfile: (state, action) => {
			// Aggiorniamo lo stato del profilo con i dati ricevuti
			state.user = action.payload;
    },
		clearProfile: (state) => {
			// Resettiamo lo stato del profilo all'iniziale
			state.user = initialState.user;
		},
	},
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
