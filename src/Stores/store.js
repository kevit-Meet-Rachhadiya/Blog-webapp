import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "../components/Slice/BlogSlice";

const store = configureStore({
    reducer: {
        blog: BlogSlice
    },
  })
  
  export default store;
  