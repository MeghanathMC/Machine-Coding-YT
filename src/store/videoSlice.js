import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videoDetails: {},
};
const videoSlice = createSlice({
  name: "video",
  initialState: initialState,
  reducers: {
    setVideoDetails: (state, action) => {
      const videoObject = action.payload;
      state.videoDetails = videoObject;
    },
  },
});

export const { setVideoDetails } = videoSlice.actions;

export default videoSlice.reducer;
