import React from 'react';
import s from './Contacts.module.css';
import sContainer from '../../../common/styles/Container.module.css';

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h2>Контакты</h2>
                <form action="#">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>

                <button>Отправить</button>
            </div>
        </div>
    );
};