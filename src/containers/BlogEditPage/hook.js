import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleItem, updateItem, resetActionStatus } from 'redux/slices/blogSlice';

export default function useBlogEditPageHook() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { actionStatus, singleBlog } = useSelector((state) => state.blog);

  useEffect(() => {
    if(id) 
      dispatch(fetchSingleItem(id));

    return function() {
      console.log('useEffect blog edit page triggered')
      dispatch(resetActionStatus());
    }
  }, [dispatch, id]);

  function updateBlog(formValues) {
    return updateItem({ ...formValues, id });
  }

  return { 
    blog: singleBlog,
    isUpdateSuccess: actionStatus.isUpdateSuccess,
    updateBlog 
  };
}