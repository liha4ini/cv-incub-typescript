import React, {useEffect, useRef, useMemo} from 'react';

import {motion} from 'framer-motion';
import Typed from 'typed.js';

import './Main.css';
import foto from '../../assets/my_foto.jpg';
import logo from '../../assets/logo.png';

export const Main = () => {
    const el = useRef();

    useEffect(() => {
        const options = {
            strings: ["Sergey"],
            typeSpeed: 100,
            showCursor: true,
            cursorChar: "&#128064;",
            backSpeed: 20,
            smartBackspace: true,
            shuffle: true,
            startDelay: 500,
            backDelay: 2000,
            loop: true,
            loopCount: Infinity
        };

        const typed = new Typed(el.current, options);

        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <div className='main_block' style={{backgroundImage: 'url("img/herobg.png")'}}>
            <div className="main_block_container">
                <div className="main_block_left">

                    <h1 className='main_text' >
                        Hi, I'm <span className='main_name' ref={el}></span>
                    </h1>

                    <p className='main_subtext'>
                        I will help make your web application user-friendly <br className=''/>and attractive for you and
                        your customers
                    </p>

                </div>
                <div className="main_block_right">
                    <div className="wrapper-card">
                        <div className="card">
                            <div className="front">
                                <img src={foto} alt="Photo"/>
                            </div>
                            <div className="back">
                                <div className="content">
                                    <img className='logo' src={logo} alt="logo"/>
                                    <h2>
                                        Sergey
                                        <span> Front-end Developer</span>
                                    </h2>
                                    <ul className="socials">
                                        <li>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hren'>
                        <a href="#">
                            <div className='hren_s_bugra'>
                                <motion.div
                                    animate={{
                                        y: [0, 34, 0]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: 'loop'
                                    }}
                                    className='hren_s_bugra2'
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};