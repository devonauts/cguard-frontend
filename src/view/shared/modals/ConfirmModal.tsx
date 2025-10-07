import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const ConfirmModal = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the modal when component mounts
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      props.onClose();
    }, 150); // Small delay to allow animation
  };

  const onConfirm = () => {
    setIsVisible(false);
    setTimeout(() => {
      props.onConfirm();
    }, 150); // Small delay to allow animation
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return ReactDOM.createPortal(
    <div 
      className={`modal fade ${isVisible ? 'show' : ''}`} 
      tabIndex={-1}
      style={{ 
        display: isVisible ? 'block' : 'none',
        backgroundColor: 'rgba(0,0,0,0.5)'
      }}
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button
              type="button"
              className="close"
              onClick={handleClose}
            >
                          <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{props.content}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-light btn-sm"
              onClick={handleClose}
            >
              {props.cancelText}
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={onConfirm}
            >
              {props.okText}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ConfirmModal;
