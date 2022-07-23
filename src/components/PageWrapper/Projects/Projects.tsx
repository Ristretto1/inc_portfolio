import React from 'react';
import s from './Projects.module.css'
import socialImg from './img/social.jpg'
import todolistImg from './img/todolist.png'
import {Project} from './Project/Project';
import Fade from 'react-reveal/Fade';


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
        <section className={s.projectsBlock} id={'projects'}>
            <div className={s.projectsContainer}>
                <Fade bottom duration={2000}>
                    <h2>Проекты</h2>
                    <span>Мои проекты</span>
                    <div className={s.projects}>
                        <Project title={'Социальная сеть'}
                                 description={'REST-API, React, Redux, react-router-dom, thunk, react-form'}
                                 style={social}
                        />
                        <Project title={'Todo-list'}
                                 description={'REST-API, React, Redux, thunk, formik, MaterialUI'}
                                 style={todolist}

                        />
                    </div>
                </Fade>
            </div>
        </section>
    );
};

