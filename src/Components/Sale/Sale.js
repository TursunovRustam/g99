import React from 'react';
import "./Sale.scss"
import Rubriki from "./Images/Рубрики.svg"

function Sale(props) {
    let arr = [];
    for (let i = 0; i < props.obj.count; i++) {
        arr.push(0)
    }
    return (
        <section className="sale">
            <div className="wrapper">
                <h2>{props.obj.title}</h2>
                <div className="cards">
                    {arr.map((item,index)=>
                        <div className={"card"}>
                            <div className="card-header">
                                <img src={Rubriki} alt="rubriki"/>
                            </div>
                            <div className="card-body">
                                <p>№225 “Ромашки для Наташки” </p>
                                <p>№225 “Ромашки для Наташки” </p>
                                <div className="order">
                                    <div className="price">3 700 грн</div>
                                    <button>Заказать</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="pagination">
                    <div className="normal"></div>
                    <div className="active"></div>
                    <div className="normal"></div>
                </div>
            </div>
        </section>
    );
}

export default Sale;