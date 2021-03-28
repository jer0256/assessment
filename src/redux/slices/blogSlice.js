import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    singleBlog: {
      title: null,
      content: null,
      date_created: null
    },
    searchedBlogs: {
      items: [],
      itemTotal: 0,
      itemPerPage: 10,
    },
    allBlogs: {
      items: [],
      itemTotal: 0,
      itemPerPage: 10,
      currentPage: 1,
    },
    actionStatus: {
      isUpdateSuccess: false,
      isCreateSuccess: false,
    },
  },
  reducers: {
    fetchAllItems: () => {},
    fetchSingleItem: () => {},
    fetchAllItemsPagination: () => {},
    searchItems: () => {},
    updateItem: () => {},
    createItem: () => {},
    fetchAllItemsSuccess: (state, action) => {
      state.allBlogs.items = action.payload.items;
      state.allBlogs.itemTotal = action.payload.itemTotal;
    },
    fetchSingleItemSuccess: (state, action) => {
      state.singleBlog = action.payload;
    },
    fetchAllItemsPaginationSuccess: (state, action) => {
      state.allBlogs.currentPage = action.payload.currentPage;
      state.allBlogs.items = action.payload.items;
      state.allBlogs.itemTotal = action.payload.itemTotal;
    },
    searchItemsSuccess: (state, action) => {
      state.searchedBlogs.items = action.payload.items;
      state.searchedBlogs.itemTotal = action.payload.itemTotal;
    },
    updateItemSuccess: (state, action) => {
      state.actionStatus.isUpdateSuccess = action.payload.isSuccess;
    },
    createItemSuccess: (state, action) => {
      state.actionStatus.isCreateSuccess = action.payload.isSuccess;
    },
    resetAllItems: (state, action) => {
      state.allBlogs = {
        items: [],
        itemTotal: 0,
        itemPerPage: 10,
        currentPage: 1,
      };
    },
    resetSingleItem: (state, action) => {
      state.singleBlog = {
        title: null,
        content: null,
        date_created: null
      };
    },
    resetActionStatus: (state, action) => {
      state.actionStatus = {
        isUpdateSuccess: false,
        isCreateSuccess: false,
      }
    }
  }
})

export const { 
  fetchAllItems,
  fetchSingleItem,
  fetchAllItemsPagination,
  searchItems,
  updateItem,
  createItem,
  fetchAllItemsPaginationSuccess,
  fetchAllItemsSuccess,
  searchItemsSuccess,
  fetchSingleItemSuccess,
  updateItemSuccess,
  createItemSuccess,
  resetAllItems,
  resetSingleItem,
  resetActionStatus
} = blogSlice.actions;

export default blogSlice.reducer;