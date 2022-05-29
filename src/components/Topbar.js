import React, { useState } from 'react'
import './Topbar.css'
import {FaThList} from 'react-icons/fa'
import {FaList} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const lastAdded = ["category", "Employee", "Shared with me", "Search in Notes"];
<input type="text"  placeholder="" />
function Topbar() {
  const [item, setItem] = useState("Last Added");
  return (
    <div className='add-new'>
    <div className="top">
    <div className='notes-title'>Notes</div>

    <div class="input-group mb-3 sm-2 top-bar-input">
      <Form.Select class="form-control inpt1" value={item} onChange={(e)=>setItem(e.target.value)}>
      <optgroup label="Sort By">
      {lastAdded.map((value, index)=>(
        <option key={index} value={value}><Link to={`#/${index}`}>{value}</Link></option>
        ))}
      </optgroup>
      <optgroup label="Order">
        <option><Link to={`#/apha`}>Alphabetical</Link></option>
        <option><Link to={`#/last-added`}>Alphabetical</Link></option>
      </optgroup>
      </Form.Select>
    <div class="input-group-append">
      <button class="btn btn-primary top-bar-btn" type="button">Add Note</button>
    </div>
  </div>
    </div>
   
    <div className="noteicon">
    <div className='all-notes'>All Notes</div>
    <div className="top-bar-icons">
    <i className='icon-1'><FaList /></i> | 
    <i className='icon-2'><FaThList /></i>
    </div>
    </div>
    </div>
  )
}

export default Topbar
