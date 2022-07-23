import React, {FC, useState} from 'react';
import s from './Nav.module.css';
import {Burger} from './Burger/Burger';
import {SocialBlock} from './SocialBlock/SocialBlock';
import Fade from 'react-reveal/Fade';
import {Link, animateScroll as scroll} from 'react-scroll';

export const Nav: FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)


    return (
        <>
            <div className={s.burger}>
                <Burger
                    callback={setIsOpen}
                    isOpen={isOpen}
                />
            </div>


            {isOpen
                ? <Fade>
                    <div className={s.shadow}>
                        <div className={s.navContainer}>
                            <nav className={s.navBlock}>
                                <ul>
                                    <li><Link
                                        smooth
                                        to={'main'}
                                        onClick={()=> setIsOpen(false)}
                                    >Главная</Link></li>
                                    <li><Link smooth
                                              to={'skills'}
                                              onClick={()=> setIsOpen(false)}
                                    >Навыки</Link></li>
                                    <li><Link smooth
                                              to={'projects'}
                                              onClick={()=> setIsOpen(false)}
                                    >Проекты</Link></li>
                                    <li><Link smooth
                                              to={'contacts'}
                                              onClick={()=> setIsOpen(false)}
                                    >Контакты</Link></li>
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

