import React from 'react';
// @ts-ignore
import classes from './Projects.module.css';
import {Project} from "./project/Project";
import {project1, project2, project3, project4, project5, project6, project7} from "./ProjectsDescription";

export const Projects = () => {
    return (
        <section className={classes.projectsBlock} id={'Projects'}>
            <div className={classes.containerProjects}>
                <h2 className={classes.titleProjects}>Projects</h2>
                <div className={classes.projects}>
                    <Project project={project4}/>
                    <Project project={project5}/>
                    <Project project={project7}/>
                    <Project project={project1}/>
                    <Project project={project6}/>
                    {/*<Project project={project2}/>*/}
                    <Project project={project3}/>
                </div>
            </div>
        </section>
    )
}