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
                                    </div>
                                )
                            })
                        }
                        {/*<div className={classes.tech}>*/}
                        {/*    <div className={classes.anim_icon}>*/}
                        {/*        <img src={typescript} alt={"typescript"} title="TYPESCRIPT"/>*/}
                        {/*    </div>*/}
                        {/*<div className={classes.anim_icon}>*/}
                        {/*    <img src={javascript} alt={"javascript"} title="JAVASCRIPT"/>*/}
                        {/*</div>*/}
                        {/*<div className={classes.anim_icon}>*/}
                        {/*    <img src="https://img.icons8.com/ultraviolet/100/000000/react--v2.png" title="REACT"*/}
                        {/*         alt={"react"}/>*/}
                        {/*</div>*/}
                        {/*<div className={classes.anim_icon}>*/}
                        {/*    <img src="https://img.icons8.com/color/100/000000/redux.png" title="REDUX" alt={"redux"}/>*/}
                        {/*</div>*/}
                        {/*<div className={classes.anim_icon}>*/}
                        {/*    <img src="https://img.icons8.com/color/100/000000/html-5--v1.png" title="HTML" alt={"html"}/>*/}
                        {/*</div>*/}
                        {/*<div className={classes.anim_icon}>*/}
                        {/*    <img src="https://img.icons8.com/color/100/000000/css3.png" title="CSS" alt={"css"}/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </Slide>
    )
}