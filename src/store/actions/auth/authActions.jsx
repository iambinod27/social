import { createAsyncThunk } from "@reduxjs/toolkit";
import socialAxios from "../../../axios/axios";

export const register = createAsyncThunk(
  "auth/register",
  async (payload, thunkAPI) => {
    try {
      const response = await socialAxios.post("/auth/register/", payload, {
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    try {
      const res = await socialAxios.post("/auth/login/", payload, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await res.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "The username or password you entered is incorrect."
      );
    }
  }
);
