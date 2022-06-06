import React from 'react';
import s from './Projects.module.css'
import {Project} from './Project/Project';
import sContainer from '../../common/styles/Container.module.css';


export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2>Мои проекты</h2>
                <div className={s.projects}>
                    <Project title={'Social network'}
                             description={'qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty '}/>
                    <Project title={'Counter'}
                             description={'qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty '}/>
                </div>
            </div>
        </div>
    );
};

