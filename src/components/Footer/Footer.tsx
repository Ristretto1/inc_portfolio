import React from 'react';
import s from './Footer.module.css';
import sContainer from '../../common/styles/Container.module.css';

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h3>Кирилл Антонов</h3>
                <div className={s.social}>
                    <div className={s.imageContainer}></div>
                    <div className={s.imageContainer}></div>
                    <div className={s.imageContainer}></div>
                    <div className={s.imageContainer}></div>
                </div>
                <span>2022, Все права защищены</span>
            </div>
        </div>
    );
};

