import React, {useState} from 'react';
import classes from './navigation.module.css'


export const Navigation = () => {
    return (
        <nav className={classes.navigation}>
            <a href={"s"}>Home</a>
            <a href={"s"}>Skills</a>
            <a href={"s"}>Works</a>
            <a href={"s"}>Contacts</a>
        </nav>
    )
}