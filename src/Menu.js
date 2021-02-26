import React from 'react';
import './Menu.css'
const Menu = () => {
    return(
        <div>
            <ul>
            <li class="bb"><h1>LO</h1></li>
            <li class="cc"><h1>GO</h1></li>
            <li><a  href="#contact">Contact</a></li>
            <li><a  href="#about">Career</a></li>
            <li><a  href="#news">News</a></li>
            <li><a  href="#about">About</a></li>
            <li><a  href="#home">Home</a></li>
            
            </ul>
            <ul class="ab">
                <li><a class="active" href="#home">Client-Login</a></li>
                <li><a class="bc" href="#news">Consumer-Waste</a></li>
                <li><a class="bc" href="#contact">Industries</a></li>
                <li><a class="bc" href="#about">Services</a></li>
            </ul>
        </div>
        
    )
} 

export default Menu;