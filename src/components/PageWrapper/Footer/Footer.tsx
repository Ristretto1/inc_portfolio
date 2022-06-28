import React from 'react';
import s from './Footer.module.css';

export const Footer = () => {
    return (
        <section className={s.footer}>
            <div className={s.footerContainer}>
                <span>Кирилл Антонов, 2022</span>
            </div>
        </section>
    );
};

