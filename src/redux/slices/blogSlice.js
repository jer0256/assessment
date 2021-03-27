import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    singleItem: {
      title: null,
      content: null,
      date_created: null
    },
    searchedItems: {
      items: [],
      itemTotal: 0,
      itemPerPage: 10,
    },
    allItems: {
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
      state.allItems.items = action.payload.items;
      state.allItems.itemTotal = action.payload.itemTotal;
    },
    fetchSingleItemSuccess: (state, action) => {
      state.singleItem = action.payload;
    },
    fetchAllItemsPaginationSuccess: (state, action) => {
      state.allItems.currentPage = action.payload.currentPage;
      state.allItems.items = action.payload.items;
      state.allItems.itemTotal = action.payload.itemTotal;
    },
    searchItemsSuccess: (state, action) => {
      state.searchedItems.items = action.payload.items;
      state.searchedItems.itemTotal = action.payload.itemTotal;
    },
    updateItemSuccess: (state, action) => {
      state.actionStatus.isUpdateSuccess = action.payload.isSuccess;
    },
    createItemSuccess: (state, action) => {
      state.actionStatus.isCreateSuccess = action.payload.isSuccess;
    },
    resetAllItems: (state, action) => {
      state.allItems = {
        items: [],
        itemTotal: 0,
        itemPerPage: 10,
        currentPage: 1,
      };
    },
    resetSingleItem: (state, action) => {
      state.singleItem = {
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