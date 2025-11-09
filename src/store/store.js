import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import videoReducer from "./videoSlice";

const store = configureStore({
  reducer: {
    nav: navReducer,
    video: videoReducer,
  },
});

export default store;
