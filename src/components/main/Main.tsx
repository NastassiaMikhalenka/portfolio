import React from 'react';
import classes from './Main.module.css'

export const Main = () => {
    return (
        <main className={classes.mainBlock}>
            <div className={classes.containerMain}>
                <div className={classes.greetings}>
                    <span>Hello,</span>
                    <h1>Nastya</h1>
                    <p>a freelance FE developer</p>
                </div>
                <div className={classes.photoMain}></div>
            </div>
        </main>
    )
}