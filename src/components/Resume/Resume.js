import React, { Component } from 'react';
import './Resume.css';
import resume from '../../Assets/SoftEnginResume.pdf';

class Resume extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='resume' name='Resume'><h1 className="sectionHead">Resume</h1>
            <embed src={resume}/>
            </div>
        )
    }
}



export default Resume;