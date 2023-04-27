import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../actions/auth/authActions";

const initialState = {
  access_token: null,
  isLoading: true,
  isAuthenticated: false,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLogout: (state) => {
      state.access_token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = true;
      state.message = payload;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.access_token = payload.access_token;
      state.isAuthenticated = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.message = payload;
      state.isLoading = true;
    },
  },
});

export const { onLogout } = authSlice.actions;

export default authSlice.reducer;
