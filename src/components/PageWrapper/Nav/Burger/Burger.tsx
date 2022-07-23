import React, {FC, useState} from 'react';
import s from './Burger.module.css';


type BurgerPropsType = {
    isOpen: boolean
    callback: (show: boolean) => void
}

export const Burger: FC<BurgerPropsType> = ({callback, isOpen}) => {

    const onBurgerHandler = () => {
        callback(!isOpen)
    }

    return (
        <div
            className={`${s.navIcon} ${isOpen ? s.open : ''}`}
            onClick={onBurgerHandler}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

