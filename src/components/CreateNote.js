import React from 'react'
import { Link } from 'react-router-dom'
import note from './../assets/notes.png'
import './CreateNote.css'
import useWindowDimensions from './useWindowDimension';


function CreateNote() {
  const { height, width } = useWindowDimensions();
  return (
    <div className='create-note'>
      <div className="image-note">
      <img src={note} alt="" />
      </div>
      <div className="note-text">
      You haven't saved any note yet. Add your first note and never lose important information again. it's quite easy. 
      </div>
      <div className="note-btn">
      <Link to={width > 768 ? '/create-note' : '/mobile-form'} className="btn btn-primary">Create my first Note</Link>
      </div>
    </div>
  )
}

export default CreateNote
