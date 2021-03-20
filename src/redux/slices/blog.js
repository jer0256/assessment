import { createSlice } from '@reduxjs/toolkit'

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    loading: false,
    currentPage: 1,
    totalItems: 0,
    items: [],
    searchedKeyword: null
  },
  reducers: {
    updateCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    updateTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
    updateItems: (state, action) => {
      state.items = action.payload;
    },
    updateLoading: (state, action) => {
      state.loading = action.payload;
    },
    updateKeyword: (state, action) => {
      state.searchedKeyword = action.payload;
    },
  }
})

export const { 
  updateCurrentPage, 
  updateTotalItems,
  updateItems,
  updateLoading,
  updateKeyword
} = blogSlice.actions;

export default blogSlice.reducer;