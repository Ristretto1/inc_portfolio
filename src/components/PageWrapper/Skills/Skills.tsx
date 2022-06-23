import React from 'react';
import s from './Skills.module.css';
import sContainer from '../../../common/styles/Container.module.css';
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
import iconPostman from './icons/restapi.svg';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'REST API'} imgUrl={iconRestApi}/>
                    <Skill title={'React'} imgUrl={iconReact}/>
                    <Skill title={'Redux'} imgUrl={iconRedux}/>
                    <Skill title={'TypeScript'} imgUrl={iconTypeScript}/>
                    <Skill title={'JavaScript'} imgUrl={iconJavaScript}/>
                    <Skill title={'TDD/Jest/Unit-test'} imgUrl={iconJest}/>
                    <Skill title={'Storybook'} imgUrl={iconStorybook}/>
                    <Skill title={'Git'} imgUrl={iconGit}/>
                    <Skill title={'Postman'} imgUrl={''}/>
                    <Skill title={'HTML5'} imgUrl={iconHTML}/>
                    <Skill title={'CSS'} imgUrl={''}/>
                    <Skill title={'Sass'} imgUrl={''}/>
                </div>
            </div>
        </div>
    );
};

