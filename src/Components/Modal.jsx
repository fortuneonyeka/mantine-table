import React from "react";

const Modal = ({ list, onClose }) => {
  return (
    <div className="overlay" onClick={() => onClose([])}>
      
      <div className="content">
      <h1>Documents</h1>
        <ul className="document-list">
          {list.map((element) => (
            <li className="list-items">{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
