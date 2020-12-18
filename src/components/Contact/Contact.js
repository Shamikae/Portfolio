import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='contact' name='Contact'><h1 className="sectionHead">Contact Information</h1></div>
        )
    }
}

export default Contact;