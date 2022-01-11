import React from 'react';
import classes from './Main.module.css'

export const Main = () => {
    return (
        <div className={classes.mainBlock}>
            <div className={classes.container}>
                <div className={classes.greetings}>
                    <span>Hello,</span>
                    <h1>Nastya</h1>
                    <p>a freelance FE developer</p>
                </div>
                <div className={classes.photo}></div>
            </div>
        </div>
    )
}