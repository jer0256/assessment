import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    loader: {
      actions: [],
    }
  },
  reducers: {
    startAction: (state, payload) => {
      state.loader = [...state.loader, payload];
    },
    stopAction: (state, payload) => {
      state.loader = state.loader.filter(i => i !== payload);
    }
  }, 
});

export const { startAction, stopAction } = uiSlice.actions;

export default uiSlice.reducer;