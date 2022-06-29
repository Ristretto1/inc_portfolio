import React from 'react';
import s from './Projects.module.css'
import socialImg from './img/social.jpg'
import todolistImg from './img/todolist.png'
import {Project} from './Project/Project';


export const Projects = () => {

    const social = {
        backgroundImage: `url(${socialImg})`,
        backgroundSize: 'cover',
        filter: 'grayscale(50%)'
    }

    const todolist = {
        backgroundImage: `url(${todolistImg})`,
        backgroundSize: 'cover',
        filter: 'grayscale(50%)'
    }

    return (
        <section className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <h2>Проекты</h2>
                <span>Мои проекты</span>
                <div className={s.projects}>
                    <Project title={'Социальная сеть'}
                             description={'2'}
                             style={social}
                    />
                    <Project title={'Todo-list'}
                             description={'1 '}
                             style={todolist}

                    />
                </div>
            </div>
        </section>
    );
};

