import React from 'react';
import s from './Contacts.module.css';
import arrow from './icons/arrow.svg';


export const Contacts = () => {
    return (
        <section className={s.contacts}>
            <h2>Контакты</h2>
            <span>Давайте свяжемся</span>
            <form action="#">
                <input placeholder={'*Ваше имя'}/>
                <input placeholder={'*Email'}/>
                <input placeholder={'Телефон'}/>
                <textarea placeholder={'*Сообщение'}/>
                <button>Отправить <span className={s.arrowImg}><img src={arrow} alt="arrow"/></span></button>
            </form>
        </section>
    );
};