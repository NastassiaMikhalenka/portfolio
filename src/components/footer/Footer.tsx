import React from 'react';
import classes from './Footer.module.css'
import {Project} from "../projects/project/Project";
import linkedin from '../assets/Skills/linkedin.png'
import github from '../assets/Skills/github.png'
import skype from '../assets/Skills/skype.png'
import telegr from '../assets/Skills/telegr.png'



export const Footer = () => {
    return (
        <footer className={classes.footerBlock}>
            <div className={classes.containerFooter}>
                {/*<h2 className={classes.titleFooter}>Links</h2>*/}
                <div className={classes.linksWrapper}>
                    <p><a href="https://www.linkedin.com/in/nast-mikh/" target="_blank">
                        <img src={linkedin} alt="linkedin"/></a>
                    </p>
                    <p><a href="https://github.com/NastassiaMikhalenka" target="_blank">
                        <img src={github} alt="linkedin"/></a>
                    </p>
                    <p><a href="https://join.skype.com/invite/CChGvYPRcrjg" target="_blank">
                        <img src={skype} alt="linkedin"/></a>
                    </p>
                    <p><a href="https://t.me/iamnast" target="_blank">
                        <img src={telegr} alt="telegrgam"/></a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

