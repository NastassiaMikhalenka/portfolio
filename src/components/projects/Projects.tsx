import React from 'react';
// @ts-ignore
import classes from './Projects.module.css';
import {Project} from "./project/Project";

export const Projects = () => {
    const project1 = {
        id: 1, title: 'HTML', description: 'It is a long established fact that a reader will be', image: [
            {image: `https://github.com/NastassiaMikhalenka/new-year-game/raw/master/src/assets/NewYear2.jpeg`,},
            {image: `https://github.com/NastassiaMikhalenka/new-year-game/raw/master/src/assets/NewYear1.jpeg`},
            {image: `https://github.com/NastassiaMikhalenka/new-year-game/raw/master/src/assets/NewYear3.jpeg`,},
        ],
        stacks: ['React', 'Redux',],
    }
    const project2 = {
        id: 1, title: 'JS', description: 'It is a long established fact that a reader will be', image: [
            {image: `https://img5.goodfon.ru/wallpaper/big/4/79/ozero-zakat-tuman-zima.jpg`,},
            {image: `https://img5.goodfon.ru/wallpaper/big/4/bf/andre-furtado-canada-city-street-snowfall-lights-buildings-p.jpg`,},
        ],
        stacks: ['React',],
    }

    return (
        <section className={classes.projectsBlock}>
            <div className={classes.containerProjects}>
                <h2 className={classes.titleProjects}>Projects</h2>
                <div className={classes.projects}>
                    <Project project={project1}/>
                    <Project project={project2}/>
                </div>
            </div>
        </section>
    )
}