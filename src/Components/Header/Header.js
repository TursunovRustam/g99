import React from 'react';
import hamburger from "./Images/Hamburger.svg"
import logo from "./Images/Logo.svg"
import cart from "./Images/Cart.svg"
import lupa from "./Images/Lupa.svg"
import user from "./Images/User.svg"
import "./Header.scss"

function Header(props) {
    return (
        <header>
            <div className={"wrapper"}>
                <div className="menubar">
                    <div className={"menubar-rightSide"}>
                        <img src={lupa} alt="lupa"/>
                        <img src={cart} alt="cart"/>
                        <img src={user} alt="user"/>
                    </div>
                </div>
                <div className={"leftSide"}>
                    <img src={hamburger} alt="hamburger"/>
                </div>
                <div className={"center"}>
                    <img src={logo} alt=""/>
                </div>
                <div className={"rightSide"}>
                    <img src={lupa} alt="lupa"/>
                    <img src={cart} alt="cart"/>
                    <img src={user} alt="user"/>
                </div>
            </div>
        </header>
    );
}

export default Header;