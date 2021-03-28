import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function useBlogFormHook(formRef, action, blog) {
  const history = useHistory();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(blog)
      formRef.current.setFieldsValue(blog)

  }, [formRef, blog]);


  function onSubmit(formValues) {
    dispatch(action(formValues));
  }

  function onCancel() {
    history.goBack();
  }

  return { onSubmit, onCancel };
}