import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FetchRandomUser from './fetch.js';


class App extends Component {


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">NuCamp React Project</h1>
                    <h3>In this time of social distancing, it's time to meet a new friend.</h3>
                </header>
                        <FetchRandomUser />
                <div className="App-intro">
                    
                </div>
            </div>
        );
    }
}

export default App;
