import React, {FC} from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

export const Project: FC<ProjectPropsType> = ({title, description}) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <a href="#">Посмотреть</a>
            </div>
            <div className={s.textContainer}>
                <h3>{title}</h3>
                <span>{description}</span>
            </div>
        </div>
    );
};

