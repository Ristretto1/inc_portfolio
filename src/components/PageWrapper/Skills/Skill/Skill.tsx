import React, {FC} from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title: string
    imgUrl: string
}

export const Skill: FC<SkillPropsType> = ({title, imgUrl}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <img src={imgUrl} alt={title}/>
            </div>
            <h3>{title}</h3>
        </div>
    );
};

