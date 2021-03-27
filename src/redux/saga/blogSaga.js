import { takeLatest, call, put } from 'redux-saga/effects';
import { 
  fetchAllItemsPagination, 
  fetchAllItemsPaginationSuccess,
  searchItems, 
  searchItemsSuccess,
  fetchSingleItem, 
  fetchSingleItemSuccess,
  fetchAllItems, 
  fetchAllItemsSuccess ,
  updateItem,
  updateItemSuccess,
  createItem,
  createItemSuccess
} from 'redux/slices/blogSlice';
import { startAction, stopAction } from 'redux/slices/uiSlice';
import BlogAPI from 'api/BlogAPI';


function* handleFetchAllBlogPaginationSaga({ type, payload }) {
  try {
    yield put(startAction(type));
    const response = yield call(BlogAPI.getAllBlog, payload);
    const { data } = response;

    yield put(fetchAllItemsPaginationSuccess({
      currentPage: payload.page,
      items: data.items,
      itemTotal: data.total
    }));
  }
  catch(error) {
    console.log(error)
  }
  finally {
    yield put(stopAction(type));
  }
}

function* handleSearchBlogSaga({ type, payload }) {
  try {
    yield put(startAction(type));
    const response = yield call(BlogAPI.searchBlog, payload);
    const { data } = response;
    
    yield put(searchItemsSuccess({
      items: data.items || [],
      itemTotal: data.total || 0,
    }));
  }
  catch(error) {
    console.log(error)
  }
  finally {
    yield put(stopAction(type));
  }
}

function* handleFetchSingleSaga({ type, payload }) {
  try {
    yield put(startAction(type));
    const response = yield call(BlogAPI.getBlogById, payload);
    const { data } = response;

    yield put(fetchSingleItemSuccess({
      title: data.title,
      content: data.content,
      date_created: data.date_created
    }));
  }
  catch(error) {
    console.log(error)
  }
  finally {
    yield put(stopAction(type));
  }
}

function* handleFetchAllSaga({ type, payload }) {
  try {
    yield put(startAction(type));
    const response = yield call(BlogAPI.getAllBlog);
    const { data } = response;

    yield put(fetchAllItemsSuccess({
      items: data.items,
      itemTotal: data.total
    }));
  }
  catch(error) {
    console.log(error)
  }
  finally {
    yield put(stopAction(type)) 
  }
}

function* handleUpdateItemSaga({ type, payload }) {
  try {
    yield put(startAction(type));
    yield call(BlogAPI.updateBlog, payload);

    yield put(updateItemSuccess({ isSuccess: true }));
  }
  catch(error) {
    console.log(error)
  }
  finally {
    yield put(stopAction(type)) 
  }
}


function* handleCreateItemSaga({ type, payload }) {
  try {
    yield put(startAction(type));
    yield call(BlogAPI.createBlog, payload);

    yield put(createItemSuccess({ isSuccess: true }));
  }
  catch(error) {
    console.log(error)
  }
  finally {
    yield put(stopAction(type)) 
  }
}

export function* watchBlogSaga() {
  yield takeLatest(fetchAllItemsPagination.type, handleFetchAllBlogPaginationSaga);
  yield takeLatest(searchItems.type, handleSearchBlogSaga);
  yield takeLatest(fetchSingleItem.type, handleFetchSingleSaga);
  yield takeLatest(fetchAllItems.type, handleFetchAllSaga);
  yield takeLatest(updateItem.type, handleUpdateItemSaga);
  yield takeLatest(createItem.type, handleCreateItemSaga);
}