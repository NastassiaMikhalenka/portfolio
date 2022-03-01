import React from 'react';
import {Skill} from './skill/Skill';
import classes from './Skills.module.css';
import javascript from '../assets/Skills/javascript.png';
import development from '../assets/Skills/development.png';
import typescript from '../assets/Skills/typescript.png';
import storybook from '../assets/Skills/storybook.png';


export const Skills = () => {
    const developmentSkill = {
        id: 1,
        titleIcon: development,
        title: 'development',
        icon: [
            {
                img: javascript,
                name: 'JAVASCRIPT'
            },
            {
                img: typescript,
                name: 'TYPESCRIPT'
            },
            {
                img: 'https://img.icons8.com/ultraviolet/100/000000/react--v2.png',
                name: 'REACT'
            },
            {
                img: "https://img.icons8.com/color/100/000000/redux.png",
                name: 'REDUX'
            },
            {
                img: 'https://img.icons8.com/color/100/000000/html-5--v1.png',
                name: 'HTML'
            },
            {
                img: "https://img.icons8.com/color/100/000000/css3.png",
                name: 'CSS'
            },
        ],
    }
    const testingSkill = {
        id: 2,
        titleIcon: "https://img.icons8.com/external-others-phat-plus/100/000000/external-testing-cloud-computing-outline-others-phat-plus.png",
        title: 'testing',
        icon: [
            {
                img: "https://img.icons8.com/external-tal-revivo-filled-tal-revivo/100/000000/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-filled-tal-revivo.png",
                name: 'JEST'
            },
            {
                img: storybook,
                name: 'STORYBOOK'
            },
        ],
    }

    const designSkill = {
        id: 2,
        titleIcon: "https://img.icons8.com/external-sbts2018-outline-sbts2018/100/000000/external-design-design-thinking2-sbts2018-outline-sbts2018-1.png",
        title: 'design',
        icon: [
            {
                img: "https://img.icons8.com/color/100/000000/figma--v1.png",
                name: 'FIGMA'
            },
            {
                img: "https://img.icons8.com/color/100/000000/adobe-photoshop--v1.png",
                name: 'PHOTOSHOP'
            },
        ],
    }

    return (
        <section className={classes.skillsBlock} id='Skills'>
            <div className={classes.containerSkills}>
                <h2 className={classes.titleSkills}>Skills</h2>
                <div className={classes.skillsWrapper}>
                    <Skill skill={developmentSkill}/>
                    <Skill skill={testingSkill}/>
                    <Skill skill={designSkill}/>
                </div>
            </div>
        </section>
    )
}
