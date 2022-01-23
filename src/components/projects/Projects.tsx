import React from 'react';
// @ts-ignore
import classes from './Projects.module.css';
import {Project} from "./project/Project";

export const Projects = () => {
    const project1 = [
        {image: `https://github.com/NastassiaMikhalenka/new-year-game/raw/master/src/assets/NewYear2.jpeg`,},
        {image: `https://github.com/NastassiaMikhalenka/new-year-game/raw/master/src/assets/NewYear1.jpeg`},
        {image: `https://github.com/NastassiaMikhalenka/new-year-game/raw/master/src/assets/NewYear3.jpeg`,},
    ];
    const project2 = [
        {image: `https://img5.goodfon.ru/wallpaper/big/4/79/ozero-zakat-tuman-zima.jpg`,},
        {image: `https://img5.goodfon.ru/wallpaper/big/4/bf/andre-furtado-canada-city-street-snowfall-lights-buildings-p.jpg`},
        {image: `https://u01.appmifile.com/images/2017/04/15/db874b01-7402-4899-afba-e7a29c8b6c0e.jpg`,},
    ];

    return (
        <section className={classes.projectsBlock}>
            <div className={classes.containerProjects}>
                <h2 className={classes.titleProjects}>Projects</h2>
                <div className={classes.projects}>
                    <Project
                        images={project1}
                        title={"HTML"}
                        description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                    />
                    <Project
                        images={project2}
                        title={"HTML"}
                        description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                    />
                </div>
            </div>
        </section>
    )
}