import React, {FC, useState} from 'react';
import s from './Nav.module.css';
import {Burger} from './Burger/Burger';
import {SocialBlock} from './SocialBlock/SocialBlock';
import Fade from 'react-reveal/Fade';

type NavPropsType = {}

export const Nav: FC<NavPropsType> = ({}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)


    return (
        <>
            <div className={s.burger}>
                <Burger callback={setIsOpen}/>
            </div>


            {isOpen
                ? <Fade>
                    <div className={s.shadow}>
                        <div className={s.navContainer}>
                            <nav className={s.navBlock}>
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
                            <SocialBlock/>
                        </div>
                    </div>
                </Fade>
                : null
            }

        </>
    );
};

