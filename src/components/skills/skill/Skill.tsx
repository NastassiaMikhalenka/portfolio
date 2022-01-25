import React from 'react';
import classes from './Skill.module.css'
import javascript from '../../assets/Skills/javascript.png';
import typescript from '../../assets/Skills/typescript.png';
import html from '../../assets/Skills/html.png';
import css from '../../assets/Skills/css.png';
import redux from '../../assets/Skills/redux.png';
import react from '../../assets/Skills/react.png';


export const Skill = () => {
    return (
        <div className={classes.skillWrapper}>
            <div className={classes.skillItemWrapper}>
                <img src={javascript} alt={"javascript"}/>
                <p>JavaScript</p>
            </div>
            <div className={classes.skillItemWrapper}>
                <img src={typescript} alt={"typescript"}/>
                <p>TypeScript</p>
            </div>
            <div className={classes.skillItemWrapper}>
                <img src={html} alt={"html"}/>
                <p>HTML</p>
            </div>
            <div className={classes.skillItemWrapper}>
                <img src={css} alt={"css"}/>
                <p>CSS</p>
            </div>
            <div className={classes.skillItemWrapper}>
                <img src={redux} alt={"redux"}/>
                <p>Redux</p>
            </div>
            <div className={classes.skillItemWrapper}>
                <img src={react} alt={"react"}/>
                <p>React</p>
            </div>

            {/*<div className={classes.iconSkill}>*/}
            {/*    <img src={props.icon} alt={"#"} width={"70px"}/>*/}
            {/*</div>*/}
            {/*<h3>{props.title}</h3>*/}
            {/*<span className={classes.description}>{props.description}</span>*/}
            {/*<a href={props.link}>{props.nameLink}</a>*/}
        </div>
    )
}