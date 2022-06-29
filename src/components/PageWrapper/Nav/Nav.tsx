import React, {useState} from 'react';
import s from './Nav.module.css';
import {Burger} from './Burger/Burger';


export const Nav = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const navClasses = [s.navBlock]
    if (!isOpen) navClasses.push(s.hidden)


    return (
        <>
            <div className={s.burger}>
                <Burger callback={setIsOpen}/>
            </div>

            <div className={navClasses.join(' ')}>
                <nav>
                    <ul>
                        <li><a
                            href={'#'}
                            >Главная</a></li>
                        <li><a
                            href={'#'}
                            >Навыки</a></li>
                        <li><a
                            href={'#'}
                            >Проекты</a></li>
                        <li><a
                            href={'#'}
                            >Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

