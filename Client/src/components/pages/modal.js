import React, { useState } from "react";



function Modal() {
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
  
    return (
      <>
        {values.map((v, idx) => (
          <button key={idx} className="me-2" onClick={() => handleShow(v)}>
            Full screen
            {typeof v === 'string' && `below ${v.split('-')[0]}`}
          </button>
        ))}
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body content</Modal.Body>
        </Modal>
      </>
    );
  }
  

export default Modal;