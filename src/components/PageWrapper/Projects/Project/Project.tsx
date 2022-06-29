import React, {FC} from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
    style: any
}

export const Project: FC<ProjectPropsType> = ({title, description, style}) => {
    return (
        <div className={s.project} style={style}>
            <div className={s.imgContainer} >
                <h3>{title}</h3>
            </div>
        </div>
    );
};

