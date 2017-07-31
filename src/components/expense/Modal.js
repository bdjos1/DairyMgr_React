import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({titleTxt, bodyTxt, submitAction, cancelAction}) => {

  return (
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={() => cancelAction()}>&times;</span>
          <span className="modal-title">{titleTxt}</span>
        </div>
        <div className="modal-body">
          {bodyTxt}
          <div className="bottom-button">
            <button className="dropbtn" onClick={() => submitAction()}>Confirm</button>
          </div>

        </div>
      </div>
  );
};

Modal.propTypes = {
  titleTxt: PropTypes.object,
  bodyTxt: PropTypes.object,
  submitAction: PropTypes.func,
  cancelAction: PropTypes.func
};

export default Modal;
