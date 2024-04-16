import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import '../css/Certifications.css';
import {
    Link
} from "react-router-dom";
import Button from '@mui/material/Button';
import { saveAs } from "file-saver";

const Certifications = () => {

    const saveFileVocational = () => { saveAs("/downloads/VocationalTraining.pdf", "VocationalDegree.pdf"); };
    const saveFileDegree = () => { saveAs("/downloads/degree.pdf", "degree.pdf"); };
    const saveFileCIW = () => { saveAs("/downloads/CIW.pdf", "CIW.pdf"); };



    return <div className='parent1 expand-cert'>
        <h1 className='blur-cert'>Certifications</h1>
        <div className='d-flex '>

            <div className="card bg-light mb-3 mt-4 me-4 blur-cert" style={{ maxWidth: "15rem" }}>
                <div className="card-header ">Bachelor's degree</div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">Software Engineer</h5>
                    <p className="card-text m-0"><span className=' fw-bold'>Univercity:</span> Western Governors University</p>
                    <p className="card-text"><span className=' fw-bold'>Location:</span> Online</p>
                </div>
            </div>
            <div className="card bg-light mb-3 mt-4 me-4 blur-cert" style={{ maxWidth: "15rem" }}>
                <div className="card-header ">Coding Dojo certificate</div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">Software Development</h5>
                    <p className="card-text m-0"><span className=' fw-bold'>Academy:</span> Coding Dojo</p>
                    <p className="card-text"><span className=' fw-bold'>Location:</span> Online</p>
                </div>
            </div>

            <div className="card bg-light mb-3 mt-4 me-4 blur-cert" style={{ maxWidth: "15rem" }}>
                <div className="card-header ">Associate's degree</div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">Computer Technician (IT)</h5>
                    <p className="card-text m-0"><span className=' fw-bold'>Univercity:</span>  IEK AKMI</p>
                    <p className="card-text"><span className=' fw-bold'>Location:</span> Thessaloniki Greece</p>
                </div>
            </div>

        </div>
        <div className='d-flex '>

            <div className="card bg-light mb-3 mt-4 me-4 blur-cert" style={{ maxWidth: "15rem" }}>
                <div className="card-header ">Technical degree</div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">Computer Technician (IT)</h5>
                    <p className="card-text m-0"><span className=' fw-bold'>School:</span> Second EPAL </p>
                    <p className="card-text"><span className=' fw-bold'>Location:</span> Corfu Greece</p>
                </div>
            </div>

            <div className="card bg-light mb-3 mt-4 me-4 blur-cert" style={{ maxWidth: "15rem" }}>
                <div className="card-header ">CIW certificate</div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">HTML5 & CSS3 Specialist</h5>
                    <p className="card-text m-0"><span className=' fw-bold'>Online Cert:</span> CIW </p>
                    <p className="card-text"><span className=' fw-bold'>Location:</span> Online</p>
                </div>
            </div>

            <div className="card bg-light mb-3 mt-4 me-4 blur-cert" style={{ maxWidth: "15rem" }}>
                <div className="card-header ">CompTIA certificate</div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">CompTIA Project+</h5>
                    <p className="card-text m-0"><span className=' fw-bold'>Online Cert:</span> CompTIA </p>
                    <p className="card-text"><span className=' fw-bold'>Location:</span> Online</p>
                </div>
            </div>
        </div>
        <div className='d-flex '>
        <div className="card bg-light mb-3 mt-4 me-4 blur-cert" style={{ maxWidth: "15rem" }}>
                <div className="card-header ">AWS Cloud Practitioner</div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">AWS Certified Cloud Practitioner</h5>
                    <p className="card-text m-0"><span className=' fw-bold'>Online Cert:</span> Amazon </p>
                    <p className="card-text"><span className=' fw-bold'>Location:</span> Online</p>
                </div>
            </div>

            <div className="card bg-light mb-3 mt-4 me-4 blur-cert" style={{ maxWidth: "15rem" }}>
                <div className="card-header ">ITIL 4 Certification</div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">ITIL Foundation Certification</h5>
                    <p className="card-text m-0"><span className=' fw-bold'>Online Cert:</span> AXELOS </p>
                    <p className="card-text"><span className=' fw-bold'>Location:</span> Online</p>
                </div>
            </div>
        </div>

    </div>

}
export default Certifications


