import React, { useEffect } from "react"

const Modal = ({ handleConfirm, handleDeny, showModal }) => {
  const disposeModal = event => {
    if (event.keyCode === 27) {
      handleDeny(false)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", disposeModal, false)

    return () => {
      document.removeEventListener("keydown", disposeModal, false)
    }
    /* eslint-disable-next-line */
  }, [])

  return (
    <div
      className={showModal ? `modal show` : `modal`}
      onKeyUp={() => console.log("Funciona aqui?")}
    >
      <div className="modal__content ">
        <div className="modal__header">
          <h2 className="modal__title">Clear All?</h2>
        </div>
        <div className="modal__body">
          <p>Do you want to clear all todos?</p>
        </div>
        <div className="modal__footer">
          <button className="btn btn--primary" onClick={() => handleConfirm()}>
            Yes!
          </button>
          <button className="btn" onClick={() => handleDeny(false)}>
            No, I don't!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
