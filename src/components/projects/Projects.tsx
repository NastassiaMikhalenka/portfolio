import React from 'react';
// @ts-ignore
import classes from './Projects.module.css';
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={classes.projectsBlock}>
            <div className={classes.container}>
                <h2 className={classes.title}>Projects</h2>
                <div className={classes.projects}>
                    <Project title={"HTML"}
                           description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}/>
                    <Project title={"CSS"}
                           description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}/>
                </div>
            </div>
        </div>
    )
}