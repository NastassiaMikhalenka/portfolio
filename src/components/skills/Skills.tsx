import React from 'react';
// @ts-ignore
import {Skill} from './skill/Skill';
import classes from './Skills.module.css';
// import iconsCV from '../assets/Skills/iconsCV.png'
// import CV from '../assets/Skills/CV.png'
import CVDone from '../assets/Skills/CVdone.png'


export const Skills = () => {
    return (
        <section className={classes.skillsBlock} id={'skills'}>
            <div className={classes.containerSkills}>
                <h2 className={classes.titleSkills}>Skills</h2>
                <div className={classes.skillsWrapperContainer}>
                    <div className={classes.skillsWrapper}>
                        <Skill />
                    </div>
                    <div className={classes.wrapperContainerCV}>
                        <img src={CVDone} alt={'CV'}/>
                        <span className={classes.textCV}>Kindly take a look at my <a href={'https://github.com/NastassiaMikhalenka/new-year-game/raw/master/src/assets/NewYear1.jpeg'} target='_blank'>CV</a></span>
                    </div>
                </div>
            </div>
        </section>
    )
}
