import { createSlice } from "@reduxjs/toolkit";

const initialPosts = []

const postsSlice = createSlice({
    name:'posts',
    initialState: {posts : initialPosts},
    reducers: {
        addPost: (state, {payload}) => {
            state.posts.push(payload)
        },
        deletePost: (state, {payload}) => {
            state.posts = state.posts.filter((p) => p.id !== payload)
        }
    }
})

export const {addPost, deletePost} = postsSlice.actions
export default postsSlice.reducer