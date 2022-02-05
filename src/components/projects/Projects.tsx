import React from 'react';
// @ts-ignore
import classes from './Projects.module.css';
import {Project} from "./project/Project";
import bite1 from '../assets/ProjectsImg/Bite/bite1.jpeg'
import bite2 from '../assets/ProjectsImg/Bite/bite2.jpeg'
import bite3 from '../assets/ProjectsImg/Bite/bite3.jpeg'
import bite4 from '../assets/ProjectsImg/Bite/bite4.jpeg'
import Trevland1 from '../assets/ProjectsImg/Trevland/Trevland1.jpeg'
import Trevland2 from '../assets/ProjectsImg/Trevland/Trevland2.jpeg'
import Trevland3 from '../assets/ProjectsImg/Trevland/Trevland3.jpeg'

export const Projects = () => {
    const project1 = {
        id: 1, title: 'The card game memory', description: 'It is a long established fact that a reader will be', image: [
            {image: `https://github.com/NastassiaMikhalenka/new-year-game/raw/master/src/assets/NewYear2.jpeg`,},
            {image: `https://github.com/NastassiaMikhalenka/new-year-game/raw/master/src/assets/NewYear1.jpeg`},
            {image: `https://github.com/NastassiaMikhalenka/new-year-game/raw/master/src/assets/NewYear3.jpeg`,},
        ],
        stacks: ['React', 'TS',],
        link: 'https://nastassiamikhalenka.github.io/new-year-game/',
    }
    const project2 = {
        id: 1, title: 'Landing Page Trevland', description: 'This landing page for travel agency. There are also a few areas with JS.', image: [
            {image: Trevland1,},
            {image: Trevland2,},
            {image: Trevland3,},
        ],
        stacks: ['JS','HTML','CSS',],
        link: 'https://nastassiamikhalenka.github.io/traveland/',

    }
    const project3 = {
        id: 1, title: 'E-commerce Shop', description: 'Created shopping store by React & Redux.', image: [
            {image: bite3,},
            {image: bite4,},
            {image: bite2,},
            {image: bite1,},
        ],
        stacks: ['React', 'Components', 'Props', 'Events', 'Hooks', 'Router', 'Redux', 'Store', 'Reducers', 'Actions', 'CSS', 'HTML'],
        link: 'https://NastassiaMikhalenka.github.io/bite',
    }

    return (
        <section className={classes.projectsBlock} id={'projects'}>
            <div className={classes.containerProjects}>
                <h2 className={classes.titleProjects}>Projects</h2>
                <div className={classes.projects}>
                    <Project project={project1}/>
                    <Project project={project2}/>
                    <Project project={project3}/>
                    <Project project={project1}/>
                    <Project project={project2}/>
                    <Project project={project3}/>
                </div>
            </div>
        </section>
    )
}