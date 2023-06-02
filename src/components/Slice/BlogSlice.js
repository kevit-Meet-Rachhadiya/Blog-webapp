import { createSlice } from "@reduxjs/toolkit";

const BlogSlice = createSlice({
  name: "blog",
  initialState: {
    formData:[],
  },
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});
export const {setFormData } = BlogSlice.actions
export default BlogSlice.reducer