import React from 'react';
import classes from './Footer.module.css'
import linkedin from '../assets/Skills/linkedin.png'
import github from '../assets/Skills/github.png'
import telegr from '../assets/Skills/telegram.png'
import email from '../assets/Skills/email.png'
// @ts-ignore
import {scroller} from 'react-scroll';


export const Footer = () => {

    const handleTopClick = () => {
        scroller.scrollTo('header', {
            duration: 1000,
            delay: 100,
            smooth: true,
        });
    };
    return (
        <footer className={classes.footerBlock}>
            <div className={classes.containerFooter}>
                <h2 className={classes.titleFooter}>Contact Me</h2>
                <div className={classes.linksWrapper}>
                    <p className={classes.linkContainer}><a href="https://www.linkedin.com/in/nast-mikh/" target="_blank">
                        <img src={linkedin} alt="linkedin"/></a>
                    </p>
                    <p className={classes.linkContainer}><a href="https://github.com/NastassiaMikhalenka" target="_blank">
                        <img src={github} alt="linkedin"/></a>
                    </p>
                    <p className={classes.linkContainer}><a href="https://t.me/iamnast" target="_blank">
                        <img src={telegr} alt="telegrgam"/></a>
                    </p>
                    <p className={classes.linkContainer}><a href="mailto:anastasiyamihalenko@gmail.com" target="_blank">
                        <img src={email} alt={'email'}/></a>
                    </p>
                </div>
            </div>
            <div className={classes.btnUp}>
                <img onClick={handleTopClick} src="https://img.icons8.com/ios/50/000000/collapse-arrow--v2.png"/>
            </div>
        </footer>
    )
}

