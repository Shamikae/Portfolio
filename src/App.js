import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';

function App() {
    return (
       <div className="App">
           <NavBar />
           <div className='overlay'></div>           
           <div className='homeBackground'></div>           
           {/* <div className='portfolioBackground'></div>*/}
           <div className="container">
               <Router>
                   <Switch>
                       <Route exact path="/" component={LandingPage}/>
                       <Route path="/landingpage" component={LandingPage}/>
                       <Route path="/portfolio" component={Portfolio}/>
                       <Route path="/resume" component={Resume}/>
                       <Route path="/about" component={About}/>
                       <Route path="/portfolio" component={Portfolio}/>
                       <Route path="/contact" component={Contact}/>
                   </Switch>
                </Router>
                {/* <LandingPage/> */}
                <Portfolio/>
                <About/>
                <Resume/>
                <Contact/>                              
           </div>
       </div>
    );
}

export default App;
