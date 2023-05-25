import { motion } from 'framer-motion';
import React from 'react';

import './Main.css';

export const Main = () => {
    // @ts-ignore
    // @ts-ignore
    return (
        <div className='main_block' style={{backgroundImage: 'url("img/herobg.png")'}}>
            <div className="main_block_container">
                <div className="main_block_left">
                    <h1 className='main_text'>
                        Hi, I'm <span className='main_name'>Sergey</span>
                    </h1>
                    <p className='main_subtext'>
                        I will help make your web application user-friendly <br className=''/>and attractive for you and your customers
                    </p>
                </div>
                <div className="main_block_right">

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
    );
};