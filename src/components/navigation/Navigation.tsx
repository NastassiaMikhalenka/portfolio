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

    const [open, setOpen] = useState(false)

    const handlerClick = (e: any) => {
        e.preventDefault()
        setOpen(!open)
    }

    const handlerClickFalse = () => {
        setOpen(false)
    }

    return (
        <>
            <nav className={open ? classes.navigation + ' ' + classes.active : classes.navigation}>
                <a href={"#home"} onClick={() => handleExpandClick('Main')} onBlur={handlerClickFalse}>Home</a>
                <a href={"#skills"} onClick={() => handleExpandClick('Skills')} onBlur={handlerClickFalse}>Skills</a>
                <a href={"#projects"} onClick={() => handleExpandClick('Projects')}>Works</a>
                <a href={"#contacts"} onClick={() => handleExpandClick('Contacts')}>Contacts</a>
            </nav>
            <div className={classes.hamburger}>
                {
                    open
                        ? <img
                            src={'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-round-256.png'}
                            alt={'hamburgerOpen'} onClick={handlerClick}/>
                        :
                        <img src={'https://cdn-icons-png.flaticon.com/128/56/56763.png'} alt={'hamburgerClose'}
                             onClick={handlerClick}/>
                }
            </div>
        </>
    )
}