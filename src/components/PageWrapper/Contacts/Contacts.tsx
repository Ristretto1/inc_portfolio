import React from 'react';
import s from './Contacts.module.css';
import arrow from './icons/arrow.svg';
import Fade from 'react-reveal/Fade';


export const Contacts = () => {
    return (
        <section className={s.contacts} id={'contacts'}>
            <Fade bottom duration={2000}>

                <h2>Контакты</h2>
                <span>Давайте свяжемся</span>
                <form action="#">
                    <input placeholder={'*Ваше имя'}/>
                    <input placeholder={'*Email'}/>
                    <input placeholder={'Телефон'}/>
                    <textarea placeholder={'*Сообщение'}/>
                    <button>Отправить <span className={s.arrowImg}><img src={arrow} alt="arrow"/></span></button>
                </form>
            </Fade>
        </section>
    );
};