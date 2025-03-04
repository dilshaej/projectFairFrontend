import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import uploadImg from '../assets/upload.jpg'

function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button onClick={handleShow} className='btn'><i className='fa-solid fa-plus me-1'></i> Add New</button>
      <Modal
      size='lg' centered 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Upload Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
          <div className="col-lg-4">
           <label> 
            <input type="file" style={{display:'none'}} />
            <img height={'500px'} className='img-fluid' src={uploadImg} alt="" />
            </label>

          </div>
          <div className="col-lg-8">
           
              <div className='mb-2'><input type="text" className='form-control' placeholder='Project Title' /></div>
            <div className='mb-2'>  <input type="text" className='form-control' placeholder='Languages used in the project' /></div>
             <div className='mb-2'> <input type="text" className='form-control' placeholder='Project GITHUB Link' /></div>
             <div className='mb-2'> <input type="text" className='form-control' placeholder='Project WEBSITE Link' /></div>
             <div className='mb-2'> <input type="text" className='form-control' placeholder='Project Overview' /></div>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add