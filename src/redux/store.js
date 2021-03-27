import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';
import blogReducer from './slices/blogSlice';
import uiReducer from './slices/uiSlice';
import startRootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleWare();

const store = configureStore({
  reducer: { 
    blog: blogReducer, 
    ui: uiReducer,
  },
  middleware: [sagaMiddleware]
});


sagaMiddleware.run(startRootSaga);

export default store;