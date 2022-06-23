import React from 'react';
import {Header} from './Header/Header';
import {Main} from './Main/Main';
import {Skills} from './Skills/Skills';
import {Projects} from './Projects/Projects';
import {Contacts} from './Contacts/Contacts';
import {Footer} from './Footer/Footer';
import s from './PageWrapper.module.css'
import {LeftFixedBlock} from './LeftFixedBlock/LeftFixedBlock';

export const PageWrapper = () => {
    return (
        <div className={s.pageWrapper}>
            <div className={s.leftContentBlock}>
                <LeftFixedBlock/>
            </div>
            <div className={s.rightContentBlock}>
                <div className={s.rightContentWrapper}>
                    {/*<Header/>*/}
                    <Main/>
                    <Skills/>
                    <Projects/>
                    <Contacts/>
                    {/*<Footer/>*/}
                </div>
            </div>
        </div>
    );
};