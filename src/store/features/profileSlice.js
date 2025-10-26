import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        firstName: "",
        lastName: "",
        maidenName: "",
        age: "",
        gender: "",
        email: "",
        image: "",
    },
    reducers: {
        setProfile: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.lastName = action.payload.maidenName
            state.age = action.payload.age
            state.gender = action.payload.gender
            state.email = action.payload.email
            state.image = action.payload.image
        }

    }
})

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;


