import React from 'react';
import s from './Main.module.css';
import Fade from 'react-reveal/Fade';



export const Main = () => {
    return (
        <section className={s.main}>
            <div className={s.text}>
                <Fade bottom duration={2000}>
                    <h2>Приветствую</h2>
                    <h1>Я Frontend developer</h1>
                </Fade>
            </div>
        </section>
    );
};

