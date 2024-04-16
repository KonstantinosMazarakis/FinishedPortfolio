import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import '../css/About.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Document, Page } from 'react-pdf';


const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  return <div className='parent1'>

      {/* <object data="/downloads/resume.pdf" className=' blur' type="application/pdf" width="100%" height="900px">
    </object> */}
    <embed src="/downloads/resume.pdf" type="application/pdf" width="100%" height="900px" className='blur' />
  </div>


}
export default Resume
