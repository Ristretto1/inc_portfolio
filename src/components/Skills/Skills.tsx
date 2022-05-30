import React from 'react';
import s from './Skills.module.css';
import sContainer from '../../common/styles/Container.module.css';
import {Skill} from './Skill/Skill';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'React'}
                           description={'qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty '}/>
                    <Skill title={'JavaScript'}
                           description={'qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty '}/>
                    <Skill title={'CSS'}
                           description={'qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty '}/>
                </div>
            </div>
        </div>
    );
};

