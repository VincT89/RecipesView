import { createSlice } from "@reduxjs/toolkit";

const auth = JSON.parse(localStorage.getItem("auth"));

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: auth?.user || null,
        accessToken: auth?.accessToken || null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;

            localStorage.setItem("auth", JSON.stringify({ ...action.payload }));
        },
        logout: (state) => {
            state.user = null;
            state.accessToken = null;

            localStorage.removeItem("auth");
        }
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;