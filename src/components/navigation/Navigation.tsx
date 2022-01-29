import React, {useState} from 'react';
import classes from './navigation.module.css'


export const Navigation = () => {
    return (
        <nav className={classes.navigation}>
            <a href={"#home"}>Home</a>
            <a href={"#skills"}>Skills</a>
            <a href={"#projects"}>Works</a>
            <a href={"#contacts"}>Contacts</a>
        </nav>
    )
}