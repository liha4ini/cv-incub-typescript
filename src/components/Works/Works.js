import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';


import {github} from '../../assets';
import {projects} from "../../constants/index";
import {fadeIn, textVariant} from "../../utils/motion.js";

import './Works.css';


export const Works = () => {
    return (
        <div className='works'>
            <div className="works_container">
                <motion.div variants={textVariant()}>
                    <h2 className='works_title'>My Projects</h2>
                </motion.div>

                <div className='works_sub_title_section'>
                    <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                        className='works_sub_title_text'
                    >
                        Following projects showcases my skills and experience through
                        real-world examples of my work. Each project is briefly described with
                        links to code repositories and live demos in it. It reflects my
                        ability to solve complex problems, work with different technologies,
                        and manage projects effectively.
                    </motion.p>
                </div>

                <div className='works_card_block'>
                    {projects.map((project, index) => (
                        <ProjectCard key={`project-${index}`} index={index} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};


const ProjectCard = ({
                         index,
                         name,
                         description,
                         tags,
                         image,
                         source_code_link,
                     }) => {
    return (
        <motion.div className='dfdfdf' variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='works_card_wrapper'
            >
                <div className='works_card'>
                    <img
                        src={image}
                        alt='project_image'
                        className='works_card_img'
                    />

                    <div className='works_card_absolute'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='works_card_absolute_wrapper'
                        >
                            <img
                                src={github}
                                alt='source code'
                                className='github_img'
                            />
                        </div>
                    </div>
                </div>

                <div className='works_card_bottom'>
                    <h3 style={{color: '#d5cece', fontWeight: 'bold', fontSize: '24px'}}>{name}</h3>
                    <p style={{marginTop: '8px', color: '#d5cece', fontSize: '14px', lineHeight: '20px'}}>{description}</p>
                </div>

                <div style={{marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text_text ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

