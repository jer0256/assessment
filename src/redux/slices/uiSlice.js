import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isShowError: false,
    loader: {
      actions: [],
    }
  },
  reducers: {
    startAction: (state, action) => {
      state.loader.actions = [...state.loader.actions, action.payload];
    },
    stopAction: (state, action) => {
      state.loader.actions = state.loader.actions.filter(i => i !== action.payload);
    },
    displayErrorModal: (state, action) => {
      state.isShowError = true;
    },
    hideErrorModal: (state, action) => {
      state.isShowError = false;
    }
  }, 
});

export const { 
  startAction, 
  stopAction,
  displayErrorModal,
  hideErrorModal
} = uiSlice.actions;

export default uiSlice.reducer;