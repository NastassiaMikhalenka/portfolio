import React from 'react';
// @ts-ignore
import {Skill} from './skill/Skill';
import classes from './Skills.module.css';

export const Skills = () => {
    return (
        <section className={classes.skillsBlock}>
            <div className={classes.containerSkills}>
                <h2 className={classes.titleSkills}>Skills</h2>
                <div className={classes.skillsWrapper}>
                    <Skill icon={"https://img.icons8.com/ios/50/000000/javascript--v1.png"}/>
                    <Skill icon={"https://img.icons8.com/ios/50/000000/javascript--v1.png"}/>
                    <Skill icon={"https://img.icons8.com/ios/50/000000/javascript--v1.png"}/>
                    <Skill icon={"https://img.icons8.com/ios/50/000000/javascript--v1.png"}/>
                    <Skill icon={"https://img.icons8.com/ios/50/000000/javascript--v1.png"}/>
                    <Skill icon={"https://img.icons8.com/ios/50/000000/javascript--v1.png"}/>
                    <Skill icon={"https://img.icons8.com/ios/50/000000/javascript--v1.png"}/>
                    <Skill icon={"https://img.icons8.com/ios/50/000000/javascript--v1.png"}/>
                    <Skill icon={"https://img.icons8.com/ios/50/000000/javascript--v1.png"}/>
                </div>
            </div>
        </section>
    )
}
