import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blogPosts:[]
}

export const BlogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    
    blogPostShow: (state, actions) => {
      state.blogPosts = [...state.blogPosts, actions.payload]
    },
  },
})

export const { blogPostShow } = BlogSlice.actions

export default BlogSlice.reducer