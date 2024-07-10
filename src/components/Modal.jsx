// import React from 'react'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white sm:p-8 p-2 rounded-custom-15 sm:w-[400px] w-[90%] shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-2 mr-2 text-black text-3xl hover:text-gray-700"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;