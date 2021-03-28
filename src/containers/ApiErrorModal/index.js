import { useSelector } from 'react-redux';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { hideErrorModal } from 'redux/slices/uiSlice';
import Modal from 'ui-components/Modal';
import { SecondaryText } from 'app-style';
import { ModalContent, WarningIcon } from './style';

function ApiErrorModal() {
  const dispatch = useDispatch();
  const { isShowError } = useSelector(state => state.ui);

  function onClick() {
    dispatch(hideErrorModal());
  }

  if(!isShowError)
    return null;
  
  return (
    <Modal>
      <ModalContent>
        <WarningIcon /> 
        <SecondaryText>Something went wrong, Please try again later.</SecondaryText>
        <Button onClick={onClick} type="primary">OK</Button>
      </ModalContent>
    </Modal>
  );
}

export default ApiErrorModal;