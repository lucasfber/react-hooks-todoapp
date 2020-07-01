import React, { useEffect } from "react"

const Modal = ({ title, text, onDeny, onAccept }) => {
  useEffect(() => {
    document.addEventListener("keydown", onDeny, false)

    return () => {
      document.removeEventListener("keydown", onDeny, false)
    }
    /* eslint-disable-next-line */
  }, [])

  return (
    <div className="modal">
      <div className="modal__content ">
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
        </div>
        <div className="modal__body">
          <p>{text}</p>
        </div>
        <div className="modal__footer">
          <button className="btn btn--primary" onClick={onAccept}>
            Yes!
          </button>
          <button className="btn" onClick={onDeny}>
            No, I don't!
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
