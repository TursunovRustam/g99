    import React from 'react';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Sale from "./Components/Sale/Sale";

function App() {
    return (
        <div>
            <Header  />
            <Main obj={{
                name: "Собираем букеты, созданные для Вас",
                info: "Подарите ощущение праздника",
                btn: "Выбрать букет"
            }}/>
            <Sale obj={
                {
                    count:4,
                    title: "Скидки"
                }
            }/>
        </div>
    );
}

export default App;