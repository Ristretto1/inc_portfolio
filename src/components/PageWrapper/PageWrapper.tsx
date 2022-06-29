import React from 'react';
import {Main} from './Main/Main';
import {Skills} from './Skills/Skills';
import {Projects} from './Projects/Projects';
import {Contacts} from './Contacts/Contacts';
import {Footer} from './Footer/Footer';
import s from './PageWrapper.module.css'
import {LeftFixedBlock} from './LeftFixedBlock/LeftFixedBlock';
import {Nav} from './Nav/Nav';

export const PageWrapper = () => {
    return (
        <div className={s.pageWrapper}>
            <Nav/>
            <div className={s.leftContentBlock}>
                <LeftFixedBlock/>
            </div>

            <div className={s.rightContentBlock}>
                <div className={s.rightContentWrapper}>
                    <Main />
                    <Skills />
                    <Projects />
                    <Contacts />
                    <Footer/>
                </div>
            </div>

        </div>
    );
};