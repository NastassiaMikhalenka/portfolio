import React from 'react';
import classes from './navigation.module.css'


export const Navigation = () => {
    return (
        <nav className={classes.navigation}>
            <a href={"s"}>Главная</a>
            <a href={"s"}>Скиллы</a>
            <a href={"s"}>Проекты</a>
            <a href={"s"}>Контакты</a>
        </nav>
    )
}