import React, {useState} from 'react';

// @ts-ignore
import logo from '../../assets/logo.png';
import {navLinks} from "../../constants";
import './Header.css';

export const Header = () => {

    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    const elements = navLinks.map((el) => {
        return (
            <li key={el.id} className='link_item'>
                <a className='link' href="#">{el.title}</a>
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