import React, { Component } from 'react';
import './Portfolio.css';
//Image, Icon, ShortDesc, URL, leads to project
//Image, Title, Description (),
//Image,


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
                tech: ['React', 'CSS', 'JavaScript', 'FullStack', 'All Projects'],
                img: 'https://lh3.googleusercontent.com/proxy/LpVy9v42ZQf3rjVKNQOT9wjEqTWzirSVGhvA99TOFHVZ6Pnq894tmjddiSVzXbL1t7MEl6LwiOL6GESMVXJMf89TQgjgY5ByejT1WvK0BhsBwT3KRvCQ8NBkotgs2daIScJ36Z0C'
            },
            {
                url: 'https//videosync.com',
                title: 'Title',
                desc: 'VideoSync can sync your music like bluetooth',
                tech: [ 'HTML', 'CSS', 'JavaScript', 'FullStack', 'All Projects'],
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2tuA98vrqtvlD9ENpyZqwLzDLrlyoavsgg&usqp=CAU'
            },
            {
                url: 'https//videosync.com',
                title: 'Title',
                desc: 'VideoSync can sync your music like bluetooth',
                tech: ['React', 'HTML', 'CSS', 'JavaScript', 'FullStack', 'All Projects'],
                img: 'https://brooksandkirk.co.uk/wp-content/uploads/2012/02/number-3.jpg'
            },
            {
                url: 'https//videosync.com',
                title: 'Title',
                desc: 'VideoSync can sync your music like bluetooth',
                tech: ['React', 'HTML', 'CSS', 'JavaScript', 'FullStack', 'AllTitle Projects'],
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
                        style={{backgroundImage:`url(${project.img || this.state.backgroundImage})`}}>

                            <div className='bar'> {project.title}</div>                   
                            <div className='projectOverlay'>
                                <img className='projectImage' alt={project} src={project.img} />
                                <p className='cardDesc'>{project.desc}</p>
                                <div className='technologies'><ul>{project.tech.map((tech, index) => {
                                    return tech !== 'All Projects' ? <li key={index} value={tech} onClick={this.handelInputChange}>{tech}</li> : '' })}</ul>
                                </div>
                            </div>
                        </div>
                        
                    )
                })
        )
    }

    render() {
        return (
            <div className='Portfolio' name='Portfolio'>
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
                    <div>|</div>
                </ul>
                {this.createCards()}

                <h1>Portfolio</h1>
            </div>
        )
    }
}

export default Portfolio;