import { createSlice } from "@reduxjs/toolkit";
import { login, register, tokenRefresh } from "../../actions/auth/authActions";

const initialState = {
  access_token: null,
  isLoading: true,
  isAuthenticated: false,
  message: null,
  username: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLogout: (state) => {
      state.access_token = null;
      state.isAuthenticated = false;
    },
    setAccessToken: (state, action) => {
      state.access_token = action.payload;
    },
    setRefreshToken: (state, { payload }) => {
      localStorage.setItem("refreshToken", payload.refresh_token);
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
      state.username = payload.username;
      localStorage.setItem("refreshToken", payload.refresh_token);
    },
    [login.rejected]: (state, { payload }) => {
      state.message = payload;
      state.isLoading = true;
    },
    [tokenRefresh.pending]: (state) => {
      state.isLoading = true;
    },
    [tokenRefresh.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.access_token = payload.access;
    },
    [tokenRefresh.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { onLogout } = authSlice.actions;

export default authSlice.reducer;
