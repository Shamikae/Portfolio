import React, { Component } from 'react';

class Intro extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '______'

        }
    }

    handleInputChange = (e) => {
        console.log(e.target)
        let value = e.target.value;
        this.setState({ futureName: value });
    }

    updateUser = (e) => {
        this.setState({user: this.state.futureName})
    }

    render() {
        return (
            <header className="App-header">
                <p>Welcome, I'm, a FullStack Developer </p>
                <p>My name is {this.state.user}!</p>
                <input onChange={this.handleInputChange} />
                <button onClick={this.updateUser}>Change Name</button>
            </header>
        )
    }
}

export default Intro;