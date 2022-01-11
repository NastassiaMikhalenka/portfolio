import React from 'react';
// @ts-ignore
import {Skill} from './skill/Skill';
import classes from './Skills.module.css';

export const Skills = () => {
    return (
        <div className={classes.skillsBlock}>
            <div className={classes.container}>
                <h2 className={classes.title}>Skills</h2>
                <div className={classes.skills}>
                    <Skill title={"HTML"}
                           description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}/>
                    <Skill title={"CSS"}
                           description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}/>
                    <Skill title={"JS"}
                           description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}/>
                </div>
            </div>
        </div>
    )
}