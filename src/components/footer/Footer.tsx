import React from 'react';
import classes from './Footer.module.css'
import {Project} from "../projects/project/Project";


export const Footer = () => {
    return (
        <footer className={classes.footerBlock}>
            <div className={classes.container}>
                <h2 className={classes.title}>Links</h2>
                <div className={classes.linksWrapper}>
                    <p><a href={`https://github.com/NastassiaMikhalenka`}><img
                        src={`https://www.veryicon.com/download/png/application/outline-1/github-58?s=256`} width="50"
                        height="50" alt="Пример"/></a></p>
                    <p><a href={`https://www.linkedin.com/in/nastassia-mikhalenka-790062212/`}><img
                        src={`https://www.veryicon.com/download/png/application/outline-1/github-58?s=256`} width="50"
                        height="50" alt="Пример"/></a></p>
                    <p><a href={`mailto:anastasiyamihalenko@gmail.com`}><img
                        src={`https://www.veryicon.com/download/png/application/outline-1/github-58?s=256`} width="50"
                        height="50" alt="Пример"/></a></p>
                </div>
            </div>
        </footer>
    )
}

