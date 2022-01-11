import React from 'react';
import classes from './Project.module.css'

type PropsType = {
    title: string
    description: string
}

export const Project = (props: PropsType) => {
    return (
        <div className={classes.project}>
            <div className={classes.iconProject}>
                {/*<img src={`https://st3.depositphotos.com/1010735/31707/v/600/depositphotos_317075756-stock-illustration-realistic-black-laptop-mockup-with.jpg`} alt={"#"} width="200"/>*/}
                <a href={"https://www.google.by/"} target="_blank">Смотреть</a>
            </div>
            <h2>{props.title}</h2>
            <span className={classes.description}>{props.description}</span>
        </div>
    )
}