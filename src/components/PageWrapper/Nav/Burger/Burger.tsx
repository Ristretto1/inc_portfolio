import React, {FC, useState} from 'react';
import s from './Burger.module.css';


type BurgerPropsType = {
    callback: (show: boolean) => void
}

export const Burger: FC<BurgerPropsType> = ({callback,}) => {

    const [show, setShow] = useState<boolean>(false)

    const onBurgerHandler = () => {
        setShow(state => !state)
        callback(!show)
    }

    return (
        <div
            className={`${s.navIcon} ${show ? s.open : ''}`}
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

