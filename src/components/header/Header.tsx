import React from 'react';
import classes from './Header.module.scss'
import {Navigation} from "../navigation/Navigation";
import Ellipse from '../assets/Header/Ellipse.png'


export const Header = () => {
    return (
        <header className={classes.header}>
            <div>
                <img src={Ellipse} alt={'icon'}/>
            </div>
            <Navigation/>
        </header>
    )
}