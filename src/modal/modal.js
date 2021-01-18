import React from 'react'
import './modal.css'

const Modal = (props) => {

    return (
      <div className="nmodal">
        <div className="modal-window">
          <div className="modal-hed">
            <span className="modal-title">Видалення завдання</span>
            <span className="modal-close" onClick={props.openModal}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <h2>Ви дійсно хочете видалити зі списку?</h2>
            <p>{props.title} </p>
          </div>
          <div className="modal-foot">
            <button className='butYeas'
              onClick={() => {
                props.removeTodo();
                props.openModal();
              }}
            >
            Так
            </button>
            <button className='butNo' onClick={props.openModal} >Ні</button>
          </div>
        </div>
      </div>
    );
}

export default Modal