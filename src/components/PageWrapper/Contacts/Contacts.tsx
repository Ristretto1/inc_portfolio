import React from 'react';
import s from './Contacts.module.css';
import arrowIcon from './icons/arrow.svg';

export const Contacts = () => {
    return (
        <section className={s.contacts}>
            <h2>Контакты</h2>
            <form action="#">
                <input placeholder={'*Ваше имя'}/>
                <input placeholder={'*Email'}/>
                <input placeholder={'Телефон'}/>
                <textarea placeholder={'*Сообщение'}/>
                <button>Отправить 🡪</button>
            </form>
        </section>
    );
};