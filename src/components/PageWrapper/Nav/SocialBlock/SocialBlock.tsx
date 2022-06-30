import React from 'react';
import s from './SocialBlock.module.css';
import telegramIcon from './icons/telegram.svg';
import githubIcon from './icons/github.svg';
import phoneIcon from './icons/phone.svg';

export const SocialBlock = () => {
    return (
        <ul className={s.socialBlock}>
            <li><a href="#"><img src={telegramIcon} alt="telegram"/></a></li>
            <li><a href="#"><img src={githubIcon} alt="github"/></a></li>
            <li><a href="#"><img src={phoneIcon} alt="phone"/></a></li>
        </ul>
    );
};

