import React from 'react';
import s from './Skills.module.css';
import {Skill} from './Skill/Skill';
import iconRestApi from './icons/restapi.svg';
import iconReact from './icons/react.svg';
import iconRedux from './icons/redux.svg';
import iconTypeScript from './icons/typescript.svg';
import iconJavaScript from './icons/js.svg';
import iconHTML from './icons/html.svg';
import iconJest from './icons/jest.svg';
import iconStorybook from './icons/storybook.svg';
import iconGit from './icons/git.svg';
import iconPostman from './icons/postman.svg';
import iconCSS from './icons/css.svg';
import iconSass from './icons/sass.svg';
import Fade from 'react-reveal/Fade';

export const Skills = () => {
    return (

        <section className={s.skillsBlock} id={'skills'}>
            <div className={s.skillsContainer}>
                <Fade bottom duration={2000}>
                    <h2>Навыки</h2>
                    <span>Технологии, <br/> которыми я&nbsp;владею </span>
                    <div className={s.skills}>
                        <Skill title={'REST API'} imgUrl={iconRestApi}/>
                        <Skill title={'React'} imgUrl={iconReact}/>
                        <Skill title={'Redux'} imgUrl={iconRedux}/>
                        <Skill title={'TypeScript'} imgUrl={iconTypeScript}/>
                        <Skill title={'JavaScript'} imgUrl={iconJavaScript}/>
                        <Skill title={'TDD/Jest/Unit-test'} imgUrl={iconJest}/>
                        <Skill title={'Storybook'} imgUrl={iconStorybook}/>
                        <Skill title={'Git'} imgUrl={iconGit}/>
                        <Skill title={'Postman'} imgUrl={iconPostman}/>
                        <Skill title={'HTML5'} imgUrl={iconHTML}/>
                        <Skill title={'CSS'} imgUrl={iconCSS}/>
                        <Skill title={'Sass'} imgUrl={iconSass}/>
                    </div>
                </Fade>
            </div>
        </section>


    );
};

