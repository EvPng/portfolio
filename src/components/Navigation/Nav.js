import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <h3>shiyi peng.</h3>
                <ul>
                    <li><a href="https://www.evpeng.com/" target="_blank" rel="noreferrer">AI</a></li>
                    <li><a href="https://www.evpeng.com/about" target="_blank" rel="noreferrer">ABOUT</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;