import React from 'react';
import classes from './Skill.module.css'
// @ts-ignore
import Slide from 'react-reveal/Slide';


type PropsType = {
    skill: any
}

export const Skill = ({skill}: PropsType) => {
    return (
        <Slide bottom>
            <div className={classes.skillWrapper}>
                <div className={classes.skill}>
                    <div className={classes.icon}>
                        <img src={skill.titleIcon} alt={"development"}/>
                    </div>
                    <p className={classes.text}>{skill.title}</p>
                    <div className={classes.tech}>
                        {
                            skill.icon.map((m: any) => {
                                return (
                                    <div className={classes.anim_icon}>
                                        <img src={m.img} alt={m.name} title={m.name}/>
                                        <p>{m.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Slide>
    )
}