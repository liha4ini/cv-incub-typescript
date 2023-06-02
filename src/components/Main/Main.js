import React, {useEffect, useRef, Suspense} from 'react';

import {motion} from 'framer-motion';
import Typed from 'typed.js';
import {Canvas} from "@react-three/fiber";

import foto from '../../assets/my_foto.jpg';
import Sphere from '../AnimatedSphere';
import {OrbitControls} from "@react-three/drei";

import './Main.css';


export const Main = () => {
    const el = useRef();
    const backText = useRef()

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

    useEffect(() => {
        const options = {
            strings: ["Nice to meet you!"],
            typeSpeed: 30,
            showCursor: false,
            cursorChar: "&#128075;",
            backSpeed: 20,
            smartBackspace: true,
            shuffle: true,
            startDelay: 500,
            backDelay: 2000,
            loop: true,
            loopCount: Infinity
        };

        const typed = new Typed(backText.current, options);

        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <div className='main_block' style={{backgroundImage: 'url("img/herobg.png")'}}>
            <div className="main_block_container">
                <div className="main_block_left">

                    <h1 className='main_text'>
                        Hi, I'm <span className='main_name' ref={el}></span>
                    </h1>

                    <p className='main_subtext'>
                        I will help make your web application<br/> user-friendly and attractive for you and
                        your customers
                    </p>

                    <div className='canvas'>
                        <Canvas>
                            <OrbitControls enableZoom={false}/>
                            <ambientLight intensity={0.5}/>
                            <directionalLight position={[-2, 5, 2]} intensity={1}/>
                            <Suspense fallback={null}>
                                <Sphere/>
                            </Suspense>
                        </Canvas>
                    </div>

                </div>
                <div className="main_block_right">
                    <div className="wrapper-card">
                        <div className="card">
                            <div className="front">
                                <img src={foto} alt="Photo"/>
                            </div>
                            <div className="back">
                                <div className="content">
                                    <h3 className='back_title' ref={backText}></h3>
                                    <p className='back_text'>
                                        If you want to cooperate or if you are just a nice and interesting person -
                                        contact me :)
                                    </p>
                                    <div className='hand'>&#128075;</div>
                                    <ul className="socials">
                                        <li>
                                            <i className="fa-brands fa-github fa-bounce" style={{color: "#325ea9;", width: '50px', height: '50px'}}></i>
                                            {/*<FontAwesomeIcon icon="fa-brands fa-telegram" bounce style={{color: "#6279d5", width: '50px'}} />*/}
                                            {/*<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><style>svg{fill:#6279d5}</style><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>*/}
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