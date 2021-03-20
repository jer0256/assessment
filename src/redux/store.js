import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './slices/blog';

export default configureStore({
  reducer: { blog: blogReducer }
});
