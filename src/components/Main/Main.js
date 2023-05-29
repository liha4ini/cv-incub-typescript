import React, {useEffect, useRef, Suspense} from 'react';

import {motion} from 'framer-motion';
import Typed from 'typed.js';
import {Canvas} from "@react-three/fiber";

import './Main.css';
import foto from '../../assets/my_foto.jpg';
import Sphere from '../AnimatedSphere';
import {OrbitControls} from "@react-three/drei";


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
                                    <ul className="socials">
                                        <li>
                                            fgfgfgfg
                                        </li>
                                    </ul>
                                    {/*<Canvas>*/}
                                    {/*    <OrbitControls enableZoom={false}/>*/}
                                    {/*    <ambientLight intensity={0.5}/>*/}
                                    {/*    <directionalLight position={[-2, 5, 2]} intensity={1}/>*/}
                                    {/*    <Suspense fallback={null}>*/}
                                    {/*        <Sphere />*/}
                                    {/*    </Suspense>*/}
                                    {/*</Canvas>*/}
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