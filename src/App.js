import React from 'react';

import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {About} from "./components/About/About";

import './App.css';


function App() {
    return (
        <div className='app'>
            <Header />
            <Main />
            <About />
        </div>
    );
}

export default App;
