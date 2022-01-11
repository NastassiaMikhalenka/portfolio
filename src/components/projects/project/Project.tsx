import React from 'react';
import classes from './Project.module.css'

type PropsType = {
    title: string
    description: string
}

export const Project = (props: PropsType) => {
    return (
        <div className={classes.project}>
            <div className={classes.icon}>
                <button>Смотреть</button>
            </div>
            <h2>{props.title}</h2>
            <span className={classes.description}>{props.description}</span>
        </div>
    )
}