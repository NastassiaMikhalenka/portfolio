import React, {useState} from 'react';
import classes from './navigation.module.css'
// @ts-ignore
import {scroller} from 'react-scroll';


export const Navigation = () => {
    const handleExpandClick = (id: string) => {
        scroller.scrollTo(id, {
            duration: 1000,
            delay: 100,
            smooth: true,
        });
    };
    return (
        <nav className={classes.navigation}>
            <a href={"#home"} onClick={() => handleExpandClick('Main')}>Home</a>
            <a href={"#skills"} onClick={() => handleExpandClick('Skills')}>Skills</a>
            <a href={"#projects"} onClick={() => handleExpandClick('Projects')}>Works</a>
            <a href={"#contacts"} onClick={() => handleExpandClick('Contacts')}>Contacts</a>
        </nav>
    )
}