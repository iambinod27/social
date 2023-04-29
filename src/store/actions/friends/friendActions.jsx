import { createAsyncThunk } from "@reduxjs/toolkit";
import socialAxios from "../../../axios/axios";
import { tokenRefresh } from "../auth/authActions";

const refresh_token = localStorage.getItem("refreshToken");

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
      console.log(data);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        console.log("hello");
        tokenRefresh(refresh_token);
      } else {
        thunkAPI.rejectWithValue("Something Wrong Info");
      }
    }
  }
);
