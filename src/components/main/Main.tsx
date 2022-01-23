import React from 'react';
import classes from './Main.module.css'

export const Main = () => {
    return (
        <main className={classes.mainBlock}>
            <div className={classes.containerMain}>
                <div className={classes.greetings}>
                    <div className={classes.greetings_ContainerName}>
                        <span className={classes.greetings_Name}>Nastassia</span>
                    </div>
                    <h2 className={classes.greetings_Vac}>Front end developer</h2>
                    <p className={classes.greetings_Text}>Hi, I’m Nastassia. I'm a purposeful and highly motivated person.
                        If you are looking for FE developer to build your brands and grow your business Let’s shake hands with me.</p>
                    <div className={classes.greetings_ContainerButtons}>
                        <button className={classes.greetings_ButtonHireMe}>Hire me</button>
                        <button className={classes.greetings_ButtonReadMore}>Read more</button>
                    </div>
                    <hr/>
                    <p className={classes.greetings_TextBottom}>I am currently open for full-time work.</p>
                </div>
                <div className={classes.photoMain} style={{margin: '20px'}}>
                </div>
            </div>
        </main>
    )
}