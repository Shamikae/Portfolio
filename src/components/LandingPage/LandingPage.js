import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div name='Landingpage' className='landingPage'>
            <h1>Hello, my name is Shamika E.</h1>
            {/* <hr className='break' */}
            <p>Software Engineer & Developer based in New York, NY. Experienced in designing & developing.</p>
            </div>
        )
    }
}
// const LandingPage = () => {
//     return(
//         <div className='landingPage'>
//         <h1>Hello, my name is Shamika E.</h1>
//         {/* <hr className='break' */}
//         <p>Software Engineer & Developer based in New York, NY. Experienced in designing & developing.</p>
//         </div>
//     )
// }

export default LandingPage;