import React from "react";
import Divider from "./Divider";

const Header = () => {
    return (
        <div>
            <div id="header">
                <h1 id="logo">Shayne Smith</h1>
                <div className="link-list">
                    <a className="link" href="https://twitter.com/shaynesm" target="_blank">Twitter</a>
                    <a className="link" href="https://github.com/shayne-smith" target="_blank">GitHub</a>
                    <div id="hi">
                        <a  href="mailto:hi@shaynesmith.io" target="_blank">hi@shaynesmith.io <img src={require("../assets/waving.svg")}/></a>    
                    </div>
                </div>
            </div>
            <Divider>
                <div id="highlight"></div>    
            </Divider>
            
        </div>
        
    )
};

export default Header;