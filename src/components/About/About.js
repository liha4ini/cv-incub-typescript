import React from 'react';

import {Tilt} from 'react-tilt';
import {fadeIn, textVariant} from "../../utils/motion";
import {motion} from "framer-motion";
import {services} from "../../constants";

import './About.css';


export const About = () => {
    // @ts-ignore
    return (
        <div className='about' id='about'>
            <div className="about_container">
                <motion.div variants={textVariant()}>
                    <h2 className='about_title'>About</h2>
                </motion.div>

                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className='about_sub_title'
                >
                    I'm a  software developer with experience in TypeScript and
                    JavaScript, and expertise in frameworks like React and
                    Three.js. I'm a quick learner and collaborate closely with clients to
                    create efficient, scalable, and user-friendly solutions that solve
                    real-world problems. Let's work together to bring your ideas to life!
                </motion.p>

                <div className='about_card_block'>
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} index={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};



const ServiceCard = ({index, title, icon}) => {
    return (
        <Tilt className='card_about_wrapper'>
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className='card_about'
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className='card_h'
                >
                    <img src={icon} alt={title}
                         className='card_r'
                    />
                    <h3 className='card_m'>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}