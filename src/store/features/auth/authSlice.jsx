import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../actions/auth/authActions";

const initialState = {
  access_token: null,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = true;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.access_token = payload.access_token;
      localStorage.setItem("refreshToken", payload.refresh_token);
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = true;
    },
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
