import React from 'react';
import classes from './Skill.module.css'

type PropsType = {
    title?: string
    description?: string
    icon: string
}

export const Skill = (props: PropsType) => {
    return (
        <div className={classes.skillWrapper}>
            <div className={classes.iconSkill}>
                <img src={props.icon} alt={"#"} width={"70px"}/>
            </div>
            <h3>{props.title}</h3>
            <span className={classes.description}>{props.description}</span>
        </div>
    )
}