import React from 'react';
import classes from './Main.module.css'
import me1 from '../assets/Skills/me1.jpg'
// @ts-ignore
import {scroller} from 'react-scroll';

export const Main = () => {

    const handleExpandClick = () => {
        scroller.scrollTo('Skills', {
            duration: 1500,
            delay: 100,
            smooth: true,
        });
    };

    return (
        <main className={classes.mainBlock} id='Main'>
            <div className={classes.area}>
                <ul className={classes.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className={classes.containerMain}>
                    <div className={classes.photoMain} style={{margin: '20px'}}>
                        <img src={me1} alt={"#"} width={'300px'}/>
                    </div>
                    <div className={classes.greetings}>
                        <div className={classes.greetings_ContainerName}>
                            <span className={classes.greetings_Name}>Nastassia</span>
                        </div>
                        <h2 className={classes.greetings_Vac}>Front end developer</h2>
                        <p className={classes.greetings_Text}>Hi, I’m Nastassia. I'm highly-motivated web developer to
                            pursuing long-term career change in front-end development. Very detail oriented and good at
                            applying problem-solving and organizational skills fostered by working in various work
                            environments. Eager to expand my skill set in front-end development in order to help you
                            deliver coding excellence.</p>
                        <div className={classes.greetings_ContainerButtons}>
                            <a target="_blank"
                               href={"https://drive.google.com/file/d/1i2OaoNaOV4F7wbTs6gq3caNhX4PTW5cP/view?usp=sharing"}>
                                <button className={classes.greetings_ButtonHireMe}>Download CV</button>
                            </a>
                        </div>
                        <hr/>
                        <p className={classes.greetings_TextBottom}>I am currently open for full-time work.</p>
                    </div>
                </div>
            </div>
            <img className={classes.btnScroll} onClick={handleExpandClick}
                 src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-1.png"/>
        </main>
    )
}