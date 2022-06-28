import React from 'react';
import s from './Projects.module.css'
import {Project} from './Project/Project';


export const Projects = () => {
    return (
        <section className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <h2>Проекты</h2>
                <span>Мои проекты</span>
                <div className={s.projects}>
                    <Project title={'Social network'}
                             description={'2'}/>
                    <Project title={'Counter'}
                             description={'1 '}/>
                </div>
            </div>
        </section>
    );
};

