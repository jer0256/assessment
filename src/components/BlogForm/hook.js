import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function useBlogFormHook(formRef, action) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { singleItem } = useSelector(state => state.blog);
  

  useEffect(() => {
    if(singleItem)
      formRef.current.setFieldsValue(singleItem)

  }, [formRef, singleItem]);


  function onSubmit(formValues) {
    dispatch(action(formValues));
  }

  function onCancel() {
    history.goBack();
  }

  return { onSubmit, onCancel };
}