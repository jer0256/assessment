import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
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
    }
  }, 
});

export const { startAction, stopAction } = uiSlice.actions;

export default uiSlice.reducer;