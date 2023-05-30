import React, {useState} from 'react';

import logo from '../../assets/logo.png';
import {navLinks} from "../../constants";
import './Header.css';

export const Header = () => {

    const [active, setActive] = useState('');
    // const [toggle, setToggle] = useState(false);

    const elements = navLinks.map((el) => {
        console.log(el)
        return (
            <li
                key={el.id}
                className='link_item'
                onClick={() => setActive(el.title)}
            >
                <a className={active === el.title ? 'active' : 'link'} href={`#${el.id}`}>{el.title}</a>
            </li>
        )
    })

    return (
        <div className='header'>
            <div className="container">
                <div className="header_left"
                     onClick={() => {
                         setActive('')
                         window.scrollTo({
                             top: 0,
                             left: 0,
                             behavior: "smooth"
                         })
                     }}>
                    <img className='logo' src={logo} alt="logo"/>
                    <span className='header_info'>Sergey | Web-Developer</span>
                </div>
                <div className="header_right">
                    <ul className='links_block'>
                        {elements}
                    </ul>
                </div>
            </div>
        </div>
    );
};