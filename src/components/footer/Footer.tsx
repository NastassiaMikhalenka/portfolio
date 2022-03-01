import React from 'react';
import classes from './Footer.module.css'
import {Project} from "../projects/project/Project";
import linkedin from '../assets/Skills/linkedin.png'
import github from '../assets/Skills/github.png'
import skype from '../assets/Skills/skype.png'
import telegr from '../assets/Skills/telegr.png'
// @ts-ignore
import {scroller} from 'react-scroll';


export const Footer = () => {

    const handleTopClick = () => {
        scroller.scrollTo('Main', {
            duration: 1000,
            delay: 100,
            smooth: true,
        });
    };
    return (
        <footer className={classes.footerBlock}>
            <div className={classes.containerFooter}>
                {/*<h2 className={classes.titleFooter}>Links</h2>*/}
                <div className={classes.linksWrapper}>
                    <p className={classes.linkContainer}><a href="https://www.linkedin.com/in/nast-mikh/"
                                                            target="_blank">
                        <img src={linkedin} alt="linkedin"/></a>
                    </p>
                    <p className={classes.linkContainer}><a href="https://github.com/NastassiaMikhalenka"
                                                            target="_blank">
                        <img src={github} alt="linkedin"/></a>
                    </p>
                    <p className={classes.linkContainer}><a href="https://join.skype.com/invite/CChGvYPRcrjg"
                                                            target="_blank">
                        <img src={skype} alt="linkedin"/></a>
                    </p>
                    <p className={classes.linkContainer}><a href="https://t.me/iamnast" target="_blank">
                        <img src={telegr} alt="telegrgam"/></a>
                    </p>
                </div>
            </div>
            <div className={classes.btnUp}>
                <img onClick={handleTopClick} src="https://img.icons8.com/ios/50/000000/collapse-arrow--v2.png"/>
            </div>
        </footer>
    )
}

