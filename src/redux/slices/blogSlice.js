import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    currentAction: null,
    currentPage: 1,
    currentItem: {
      title: null,
      content: null,
      date_created: null
    },
    itemTotal: 0,
    itemPerPage: 10,
    items: [],
    cachedKeyword: null,
    updateSuccess: false,
    createSuccess: false,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload.items;
      state.itemTotal = action.payload.itemTotal;
    },
    setItemsByPagination: (state, action) => {
      state.currentPage = action.payload.currentPage;
      state.items = action.payload.items;
      state.itemTotal = action.payload.itemTotal;
    },
    searchItems: (state, action) => {
      state.items = action.payload.items;
      state.itemTotal = action.payload.itemTotal;
      state.cachedKeyword = action.payload.keyword;
    },
    setCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
    setCurrentAction: (state, action) => {
      state.currentAction = action.payload;
    },
    setUpdateSuccess: (state, action) => {
      state.updateSuccess = action.payload
    },
    setCreateSuccess: (state, action) => {
      state.createSuccess = action.payload
    },
  }
})

export const { 
  setItemsByPagination, 
  setItems,
  searchItems,
  setCurrentItem,
  setCurrentAction,
  setUpdateSuccess,
  setCreateSuccess
} = blogSlice.actions;

export default blogSlice.reducer;