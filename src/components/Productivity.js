import React from 'react'
import './ErrorPage.css'
import Sidebar from './Sidebar'
import Navbar from './Navbar';
import './Productivity.css'
import Topbar from './Topbar';
import {GrAttachment} from 'react-icons/gr';
import {BsCircleFill} from 'react-icons/bs';
import {AiOutlineEllipsis} from 'react-icons/ai';
import img from './../assets/tuat.png'
import { Dropdown } from 'react-bootstrap';
import ModalComp from './Modal';
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {CgDanger} from 'react-icons/cg';

function Productivity() {

   const [show, setShow] = useState(false);
  
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const clickHandler =()=>{
      <ModalComp />
   }
  return (
    <div className='layout'>
    <Navbar />
    <Sidebar />
    <div className="productivity">
      <Topbar />
        <div className="container">
            <div className="cards">
               <div className="card-h">
                <img src={img} alt="" /><span>HydrogenHR</span><small>July, 2022</small>
               </div>
               <div className="card-body">
                  <h2>Staying Productive</h2>
                  <div className="msge">Revamping the web applications. assignees are to thoroughly go through our content... 
                  </div>
               </div>
                  <div className="card-footer">
                     <div className="card-category">
                     <span className="card-icon"><BsCircleFill /></span>
                      <span className="category"><span>Management </span>
                      <label htmlFor="proicon"><GrAttachment /></label>
                      <input type="file" name="" id="proicon" hidden/>
                      </span>
                  </div>
                  <span>
                  
                  <Dropdown>
                     <Dropdown.Toggle variant="default" id="dropdown-basic">
                     <AiOutlineEllipsis />
                     </Dropdown.Toggle>

                     <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><span className="wr-black">Edit</span></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"><span className="wr-black">Copy</span></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"><span className="wr-delete" onClick={handleShow}>Delete</span></Dropdown.Item>
                     </Dropdown.Menu>
                     </Dropdown>
                  
                  </span></div>
            </div>
            <div className="cards">
            <div className="card-h">
             <img src={img} alt="" /><span>HydrogenHR</span><small>July, 2022</small>
            </div>
            <div className="card-body">
               <h2>Staying Productive</h2>
               <div className="msge">Revamping the web applications. assignees are to thoroughly go through our content... 
               </div>
            </div>
               <div className="card-footer">
                  <div className="card-category">
                  <span className="card-icon-1"><BsCircleFill /></span>
                   <span className="category"><span>Health & Wellness </span>
                   <label htmlFor="proicon"><GrAttachment /></label>
                   <input type="file" name="" id="proicon" hidden/>
                   </span>
               </div>
               <span><Dropdown>
               <Dropdown.Toggle variant="default" id="dropdown-basic">
               <AiOutlineEllipsis />
               </Dropdown.Toggle>

               <Dropdown.Menu>
               <Dropdown.Item Link="#/action-1"><span className="wr-black">Edit</span></Dropdown.Item>
               <Dropdown.Item Link="#/action-1"><span className="wr-black">Copy</span></Dropdown.Item>
               <Dropdown.Item Link="#/action-1"><span className="wr-delete" onClick={handleShow}>Delete</span></Dropdown.Item>
               </Dropdown.Menu>
               </Dropdown></span></div>
         </div>
         <div className="cards">
         <div className="card-h">
          <img src={img} alt="" /><span>HydrogenHR</span><small>July, 2022</small>
         </div>
         <div className="card-body">
            <h2>Staying Productive</h2>
            <div className="msge">Revamping the web applications. assignees are to thoroughly go through our content... 
            </div>
         </div>
            <div className="card-footer">
               <div className="card-category">
               <span className="card-icon-2"><BsCircleFill /></span>
                <span className="category"><span>Global </span>
                <label htmlFor="proicon"><GrAttachment /></label>
                <input type="file" name="" id="proicon" hidden/>
                </span>
            </div>
            <span><Dropdown>
            <Dropdown.Toggle variant="default" id="dropdown-basic">
            <AiOutlineEllipsis />
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item Link="#/action-1"><span className="wr-black">Edit</span></Dropdown.Item>
            <Dropdown.Item Link="#/action-1"><span className="wr-black">Copy</span></Dropdown.Item>
            <Dropdown.Item Link="#/action-1"><span className="wr-delete" onClick={handleShow}>Delete</span></Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown></span></div>
      </div>
      <div className="cards">
      <div className="card-h">
       <img src={img} alt="" /><span>HydrogenHR</span><small>July, 2022</small>
      </div>
      <div className="card-body">
         <h2>Staying Productive</h2>
         <div className="msge">Revamping the web applications. assignees are to thoroughly go through our content... 
         </div>
      </div>
         <div className="card-footer">
            <div className="card-category">
            <span className="card-icon"><BsCircleFill /></span>
             <span className="category"><span>Management </span>
             <label htmlFor="proicon"><GrAttachment /></label>
             <input type="file" name="" id="proicon" hidden/>
             </span>
         </div>
         <span><Dropdown>
         <Dropdown.Toggle variant="default" id="dropdown-basic">
         <AiOutlineEllipsis />
         </Dropdown.Toggle>

         <Dropdown.Menu>
         <Dropdown.Item Link="#/action-1"><span className="wr-black">Edit</span></Dropdown.Item>
         <Dropdown.Item Link="#/action-1"><span className="wr-black">Copy</span></Dropdown.Item>
         <Dropdown.Item Link="#/action-1"><span className="wr-delete" onClick={handleShow}>Delete</span></Dropdown.Item>
         </Dropdown.Menu>
         </Dropdown></span></div>
   </div>
   <div className="cards">
   <div className="card-h">
    <img src={img} alt="" /><span>HydrogenHR</span><small>July, 2022</small>
   </div>
   <div className="card-body">
      <h2>Staying Productive</h2>
      <div className="msge">Revamping the web applications. assignees are to thoroughly go through our content... 
      </div>
   </div>
      <div className="card-footer">
         <div className="card-category">
         <span className="card-icon"><BsCircleFill /></span>
          <span className="category"><span>Management </span>
          <label htmlFor="proicon"><GrAttachment /></label>
          <input type="file" name="" id="proicon" hidden/>
          </span>
      </div>
      <span><Dropdown>
      <Dropdown.Toggle variant="default" id="dropdown-basic">
      <AiOutlineEllipsis />
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item Link="#/action-1"><span className="wr-black">Edit</span></Dropdown.Item>
      <Dropdown.Item Link="#/action-1"><span className="wr-black">Copy</span></Dropdown.Item>
      <Dropdown.Item Link="#/action-1"><span className="wr-delete" onClick={handleShow}>Delete</span></Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown></span></div>
</div>
<div className="cards">
<div className="card-h">
 <img src={img} alt="" /><span>HydrogenHR</span><small>July, 2022</small>
</div>
<div className="card-body">
   <h2>Staying Productive</h2>
   <div className="msge">Revamping the web applications. assignees are to thoroughly go through our content... 
   </div>
</div>
   <div className="card-footer">
      <div className="card-category">
      <span className="card-icon"><BsCircleFill /></span>
       <span className="category"><span>Management </span>
       <label htmlFor="proicon"><GrAttachment /></label>
       <input type="file" name="" id="proicon" hidden/>
       </span>
   </div>
   <span><Dropdown>
   <Dropdown.Toggle variant="default" id="dropdown-basic">
   <AiOutlineEllipsis />
   </Dropdown.Toggle>

   <Dropdown.Menu>
   <Dropdown.Item Link="#/action-1"><span className="wr-black">Edit</span></Dropdown.Item>
   <Dropdown.Item Link="#/action-1"><span className="wr-black">Copy</span></Dropdown.Item>
   <Dropdown.Item Link="#/action-1"><span className="wr-delete" onClick={handleShow}>Delete</span></Dropdown.Item>
   </Dropdown.Menu>
   </Dropdown></span></div>
</div>
        </div>
    </div>
    <Modal show={show} onHide={handleClose} animation={false} centered>
          <Modal.Header closeButton>
            <Modal.Title> <span className="modal-col"><CgDanger /></span> Delete Note?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Deleting this note will erase it completely and it cannot be recovered. Are you sure, you want to delete</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Delete
            </Button>
            <Button variant="Light" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default Productivity
