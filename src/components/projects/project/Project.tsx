import React from 'react';
import classes from './Project.module.css'
import github from './../../assets/Skills/github.png'
import arrow_right from './../../assets/Skills/arrow-right.png'


type PropsType = {
    title?: string
    description: string
}

export const Project = (props: PropsType) => {
    return (
        <div className={classes.project}>
            <div className={classes.iconProject}>
                {/*<img src={`https://st3.depositphotos.com/1010735/31707/v/600/depositphotos_317075756-stock-illustration-realistic-black-laptop-mockup-with.jpg`} alt={"#"} width="200"/>*/}
                {/*<a href={"https://www.google.by/"} target="_blank"><img src={github}/></a>*/}
                <img src={"https://github.com/NastassiaMikhalenka/new-year-game/raw/master/src/assets/NewYear2.jpeg"} alt={"#"}/>
            </div>
            <h2>{props.title}</h2>
            <div className={classes.description}>
            <p>{props.description}</p>
                 <img src={arrow_right} alt={"2"}/>
                </div>
        </div>
    )
}