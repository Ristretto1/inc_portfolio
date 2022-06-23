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
                <h3>{title}</h3>
            </div>
        </div>
    );
};

