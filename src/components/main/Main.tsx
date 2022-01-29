import React from 'react';
import classes from './Main.module.css'
import me1 from '../assets/Skills/me1.jpg'
import me2 from '../assets/Skills/me2.jpg'
import me3 from '../assets/Skills/me3.jpg'

export const Main = () => {
    return (
        <main className={classes.mainBlock}>
            <div className={classes.containerMain}>
                <div className={classes.photoMain} style={{margin: '20px'}}>
                    <img src={me1} alt={"#"} width={'300px'}/>
                </div>
                <div className={classes.greetings}>
                    <div className={classes.greetings_ContainerName}>
                        <span className={classes.greetings_Name}>Nastassia</span>
                    </div>
                    <h2 className={classes.greetings_Vac}>Front end developer</h2>
                    <p className={classes.greetings_Text}>Hi, I’m Nastassia. I'm a purposeful and highly motivated person.
                        If you are looking for FE developer to build your brands and grow your business Let’s shake hands with me.</p>
                    <div className={classes.greetings_ContainerButtons}>
                        <button className={classes.greetings_ButtonHireMe}>Hire me</button>
                        <button className={classes.greetings_ButtonReadMore} id={'skills'}>Read more</button>
                    </div>
                    <hr/>
                    <p className={classes.greetings_TextBottom}>I am currently open for full-time work.</p>
                </div>
            </div>
        </main>
    )
}