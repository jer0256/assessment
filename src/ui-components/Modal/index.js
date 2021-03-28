import { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import './style.css';

function Modal({ children, show = true }) {
  const rootElement = document.querySelector('#root');
  const el = document.createElement('div');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    rootElement.appendChild(el);
    document.body.style.overflow = 'hidden';

    return function() {
      rootElement.removeChild(el);
      document.body.style.overflow = 'unset';
    }
  }, [rootElement, el]);

  useEffect(() => {
    setShowModal(show);
  }, [show])

  function removeOnClickPropagation(event) {
    event.stopPropagation();
  }

  function onClickOutsideModal() {
    // setShowModal(false);
  }

  function renderContent() {
    return (
      <div className="modal-root" onClick={removeOnClickPropagation}>
        <div className="modal-overlay" onClick={onClickOutsideModal}></div>
        <div className="modal-container">
          {children}
        </div>
      </div>
    )
  }

  if(showModal)
    return ReactDom.createPortal(renderContent(), rootElement);  
  else
    return null;
}

export default Modal