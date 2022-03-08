import React, {useState} from 'react';
import classes from './navigation.module.css'
// @ts-ignore
import {scroller} from 'react-scroll';
import hamburgerOpen from '../assets/Header/hamburgerOpen.png'
import hamburgerClose from '../assets/Header/hamburgerClose.png'


export const Navigation = () => {
    const handleExpandClick = (id: string) => {
        scroller.scrollTo(id, {
            duration: 1000,
            delay: 100,
            smooth: true,
        });
        setOpen(false)
    };

    const [open, setOpen] = useState(false)

    const handlerClick = (e: any) => {
        e.preventDefault()
        setOpen(!open)
    }

    return (
        <>
            <nav className={open ? classes.navigation + ' ' + classes.active : classes.navigation}>
                <a href={"#home"} onClick={() => handleExpandClick('Main')}>Home</a>
                <a href={"#skills"} onClick={() => handleExpandClick('Skills')}>Skills</a>
                <a href={"#projects"} onClick={() => handleExpandClick('Projects')}>Works</a>
                <a href={"#contacts"} onClick={() => handleExpandClick('Contacts')}>Contacts</a>
            </nav>
            <div className={classes.hamburger}>
                {
                    open
                        ? <img
                            src={hamburgerClose}
                            alt={'hamburgerClose'} onClick={handlerClick}/>
                        :
                        <img src={hamburgerOpen} alt={'hamburgerOpen'}
                             onClick={handlerClick}/>
                }
            </div>
        </>
    )
}