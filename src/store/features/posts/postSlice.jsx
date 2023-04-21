import { createSlice } from "@reduxjs/toolkit";
import { getPost } from "../../actions/auth/postActions";

const initialState = {
  postItems: [],
  isLoading: true,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getPost.pending]: (state) => {
      state.isLoading = false;
    },
    [getPost.fulfilled]: (state, payload) => {
      state.isLoading = true;
      state.postItems = payload;
    },
    [getPost.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {} = postSlice.actions;

export default postSlice.reducer;
