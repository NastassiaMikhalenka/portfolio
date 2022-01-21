import React from 'react';
import classes from './Footer.module.css'
import {Project} from "../projects/project/Project";
import linkedin from '../assets/Skills/linkedin.png'
import github from '../assets/Skills/github.png'
import skype from '../assets/Skills/skype.png'


export const Footer = () => {
    return (
        <footer className={classes.footerBlock}>
            <div className={classes.containerFooter}>
                {/*<h2 className={classes.titleFooter}>Links</h2>*/}
                <div className={classes.linksWrapper}>
                    <p><a href="https://www.linkedin.com/in/nast-mikh/">
                        <img src={linkedin} alt="linkedin"/></a>
                    </p>
                    <p><a href="https://github.com/NastassiaMikhalenka">
                        <img src={github} alt="linkedin"/></a>
                    </p>
                    <p><a href="https://join.skype.com/invite/CChGvYPRcrjg">
                        <img src={skype} alt="linkedin"/></a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

