import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createItem, resetActionStatus } from 'redux/slices/blogSlice';

export default function useBlogEditPageHook() {
  const dispatch = useDispatch();
  const { actionStatus } = useSelector((state) => state.blog);

  useEffect(() => {
    return function() {
      console.log('useEffect blog create page triggered')
      dispatch(resetActionStatus());
    }
  }, [dispatch]);

  return { 
    isCreateSuccess: actionStatus.isCreateSuccess,
    createBlog: createItem
  };
}