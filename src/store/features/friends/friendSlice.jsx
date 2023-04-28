import { createSlice } from "@reduxjs/toolkit";
import { getFriends } from "../../actions/friends/friendActions";

const initialState = {
  friends: [],
  loading: true,
};

const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {},
  extraReducers: {
    [getFriends.pending]: (state) => {
      state.loading = true;
    },
    [getFriends.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.friends = payload;
    },
    [getFriends.rejected]: (state) => {
      state.loading = true;
    },
  },
});

export const {} = friendSlice.actions;

export default friendSlice.reducer;
