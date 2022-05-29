import { FormGroup, InputGroup, HTMLSelect } from '@blueprintjs/core'
import '@blueprintjs/core/lib/css/blueprint.css';
import Multiselect from 'multiselect-react-dropdown';
import React, { useState } from 'react';
import {BsFillCloudUploadFill} from 'react-icons/bs'
import axios from 'axios';
import './Form.css'
import { Link } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
});

function Form() {
    const data = [
        {id:0, item:"Health & Fitness"},
        {id:1, item:"Management"},
        {id:2, item:"Global"}
    ];

    const [options] = useState(data);
const [selectedFile, setSelectedFile] = useState();


    const [progress, setProgress] = useState()

    const changeHandler = e => {
      setSelectedFile(e.target.files[0]);
      let formData = new FormData()
    
      formData.append("file", selectedFile)
      axiosInstance.post("/upload_file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: data => {
          //Set the progress value to show the progress bar
          setProgress(Math.round((100 * data.loaded) / data.total))
        },
      })
    }
    


  return (
    <div className='form'>
    <h2>New Note</h2>
    <FormGroup
    labelInfo="(required)"
>
    <InputGroup id="text-input" placeholder="Title" />
    <InputGroup id="text-input" placeholder="Purpose" />
    <Multiselect options={options} displayValue="item" id="text-input" placeholder='Category'/>
    <p className="attach-h">Attach a file</p>
   
    <div className="uploadfile"> 
    <div id="fileupload">
   <p><BsFillCloudUploadFill/></p>
    <label htmlFor="file"  >Choose File</label><input type="file" name="file"  id="file" hidden onChange={(e)=>changeHandler(e)}/></div></div>
    <div className="progress">
    <label for="upload">{selectedFile && selectedFile.name }:</label>
<progress id="upload" value="32" max="100" className='bar'> 32% </progress>
    </div>
    <div className="textarea">
    <textarea name="message" id="msge" placeholder='Add your note here'></textarea>
    </div>
    <div className="bt-group">
    <button className="btn btn-outline-primary btn1"><Link to='/'>Cancle</Link></button>
    <button className="btn btn-primary">Create Note</button>
    </div>
</FormGroup>
      
    </div>
  )
}

export default Form
