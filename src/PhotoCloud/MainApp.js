import React, { Component } from 'react';
import ImageServiceApp from './component/RouterComponent';
import './App.css';

class MainApp extends Component {
    render() {
        return (
            <div className="container">
                <ImageServiceApp />
            </div>
        );
    }
}

export default MainApp;