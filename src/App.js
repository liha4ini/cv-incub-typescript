import React from 'react';
import {BrowserRouter} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {About} from "./components/About/About";
import {Works} from "./components/Works/Works";

import './App.css';


function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <Header />
                <Main />
                <About />
                <Works />
            </div>
        </BrowserRouter>
    );
}

export default App;
