import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './slices/blogSlice';
import uiReducer from './slices/uiSlice';

export default configureStore({
  reducer: { 
    blog: blogReducer, 
    ui: uiReducer,
  }
});
