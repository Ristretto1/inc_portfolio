import React from 'react';
import s from './Projects.module.css'
import {Project} from './Project/Project';
import sContainer from '../../../common/styles/Container.module.css';


export const Projects = () => {
    return (
        <section className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2>Проекты</h2>
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

