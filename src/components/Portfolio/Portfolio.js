import React, { Component } from 'react';
import './Portfolio.css';
import notflixImage from './Assets/Notflix.png';
import simpleCalcImage from './Assets/SimpleCalculator.png';
import racingGameImage from './Assets/RacingGame.png'

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: 'https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg',
            filter: 'All Projects'
        };
        this.handelInputChange = this.handelInputChange.bind(this)
    }
    handelInputChange = (event) => {
        
        this.setState({ filter: event.target.innerText })
    }

    createCards = () => {
        const allProjects = [
            {
                url: 'https//videosync.com',
                title: 'Title',
                desc: 'VideoSync can sync your music like bluetooth',
                tech: ['React', 'CSS', 'JavaScript', 'Full Stack', 'All Projects'],
                img: simpleCalcImage
            },
            {
                url: 'https//videosync.com',
                title: 'Title',
                desc: 'VideoSync can sync your music like bluetooth',
                tech: [ 'HTML', 'CSS', 'JavaScript', 'Full Stack', 'All Projects'],
                img: racingGameImage
            },
            {
                url: 'https//videosync.com',
                title: 'Title',
                desc: 'VideoSync can sync your music like bluetooth',
                tech: ['React', 'HTML', 'CSS', 'JavaScript', 'Full Stack', 'All Projects'],
                img: notflixImage
            },
            {
                url: 'https//videosync.com',
                title: 'Title',
                desc: 'VideoSync can sync your music like bluetooth',
                tech: ['React', 'HTML', 'CSS', 'JavaScript', 'Full Stack', 'All Projects'],
                img: 'https://media1.giphy.com/media/WmXVyUmxKglfXfFAHa/giphy.gif'
            },
            {
                url: 'https//videosync.com',
                title: 'Title',
                desc: 'VideoSync can sync your music like bluetooth',
                tech: ['React', 'HTML', 'CSS', 'JavaScript', 'Full Stack', 'All Projects'],
                img: 'https://media1.giphy.com/media/WmXVyUmxKglfXfFAHa/giphy.gif'
            },

        ];
        return (
            allProjects
                // .filter((project) => {
                //     return project.tech
                //         .includes(this.state.filter)
                // })
                .map((project, index) => {
                    return (
                        <div 
                            key={index} 
                            className={!project.tech.includes(this.state.filter)? 'projectCard shrink' : 'projectCard grow'}
                            style={{backgroundImage:`url(${project.img || this.state.backgroundImage})`}}
                        >
                            <div className='bar'> {project.title}</div>  
                            {/* {console.log(project.tech.includes(this.state.filter),'<<<<<<') }                 */}
                            <div className='portcontainer'>
                                {/* <img className='projectImage' alt={project} src={project.img} /> */}
                            <div className='projectOverlay'>
                                {/* <img className='projectImage' alt={project} src={project.img} /> */}
                                <p className='cardDesc'>{project.desc}</p>
                                <div className='technologies'>                                
                                    <ul className='techStyle'>
                                        {
                                            project.tech.map((tech, index) => {
                                            return tech !== 'All Projects' ? <li key={index} value={tech} onClick={this.handelInputChange}>{tech}</li> : '' })
                                        }
                                    </ul>
                                    <button type="button" onclick="alert('Hello world!')">View Project</button>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                    )
                })
        )
    }

    render() {
        return (
            <div className='portfolio' name='Portfolio'>
                <h1 className="sectionHead">Web Developer Portfolio</h1>

                <ul className="filter">
                    <li onClick={this.handelInputChange}>All Projects</li>
                    <div>|</div>
                    <li onClick={this.handelInputChange}>React</li>
                    <div>|</div>
                    <li onClick={this.handelInputChange}>HTML</li>
                    <div>|</div>
                    <li onClick={this.handelInputChange}>CSS</li>
                    <div>|</div>
                    <li onClick={this.handelInputChange}>JavaScript</li>
                    <div>|</div>
                    <li onClick={this.handelInputChange}>Full Stack</li>
                    <div></div>
                </ul>
                {this.createCards()}
            </div>
        )
    }
}

export default Portfolio;