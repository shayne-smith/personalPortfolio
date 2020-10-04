import React from "react";

import wave from "../assets/wave.png";

const Header = () => {
    return (
        <div id="header">
            <div id="logo">Shayne Smith</div>
            <div className="link-list">
                <a className="link" href="https://twitter.com/shaynesm" target="_blank">Twitter</a>
                <a className="link" href="https://github.com/shayne-smith" target="_blank">GitHub</a>
                <div id="hi">
                    <a  href="mailto:hi@shaynesmith.io" target="_blank">hi@shaynesmith.io <img src={require("../assets/waving.svg")}/></a>    
                </div>
                
            </div>
        </div>
    )
};

export default Header;