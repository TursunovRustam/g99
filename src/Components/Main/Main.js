import React from 'react';
import Buket from "./Images/buket.png"
import "./Main.scss"

function Main(props) {
    return (
        <main>
            <div className="background">
                <img src={Buket} alt="buket"/>
            </div>
            <div className="wrapper-main">
                <p>{props.obj.info}</p>
                <h2>{props.obj.name}</h2>
                {
                    props.obj.btn&&<button className="btn">{props.obj.btn}</button>
                }
            </div>
        </main>
    );
}

export default Main;