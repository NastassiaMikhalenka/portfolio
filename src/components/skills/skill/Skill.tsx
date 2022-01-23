import React from 'react';
import classes from './Skill.module.css'

// type PropsType = {
//     title?: string
//     description?: string
//     icon: string
//     link?: string
//     nameLink?: string
// }

export const Skill = () => {
    return (
        <div className={classes.skillWrapper}>
            <div className={classes.smileWrapper}><div className={classes.smile}>React</div></div>
            <div className={classes.smileWrapper}><div className={classes.smile}>React</div></div>
            {/*<div className={classes.iconSkill}>*/}
            {/*    <img src={props.icon} alt={"#"} width={"70px"}/>*/}
            {/*</div>*/}
            {/*<h3>{props.title}</h3>*/}
            {/*<span className={classes.description}>{props.description}</span>*/}
            {/*<a href={props.link}>{props.nameLink}</a>*/}
        </div>
    )
}