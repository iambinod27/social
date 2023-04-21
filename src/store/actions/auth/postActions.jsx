import { createAsyncThunk } from "@reduxjs/toolkit";
import socialAxios from "../../../axios/axios";

export const getPost = createAsyncThunk(
  "post/All",
  async (payload, thunkAPI) => {
    try {
      const res = await socialAxios.get("/posts/", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
