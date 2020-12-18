import React, { Component } from 'react';
import './About.css';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='about' name='About'><h1 className="sectionHead">About</h1>
            </div> 
        )
    }
}

export default About;