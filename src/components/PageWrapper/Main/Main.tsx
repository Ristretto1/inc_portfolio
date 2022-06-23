import React from 'react';
import s from './Main.module.css';


export const Main = () => {
    return (
        <section className={s.main}>
            <div className={s.text}>
                <h2>Приветствую</h2>
                <h1>Я Frontend-developer</h1>
            </div>
        </section>
    );
};

