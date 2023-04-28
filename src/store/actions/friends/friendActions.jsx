import { createAsyncThunk } from "@reduxjs/toolkit";
import socialAxios from "../../../axios/axios";

export const getFriends = createAsyncThunk(
  "friends/all",
  async (payload, thunkAPI) => {
    try {
      const res = await socialAxios.get("/friends", {
        headers: {
          Authorization: `Bearer ${payload}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue("Something Wrong Info");
    }
  }
);
