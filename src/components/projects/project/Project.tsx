import React, {useEffect, useState} from 'react';
import classes from './Project.module.css'
import arrow_right from './../../assets/Skills/arrow-right.png'


type PropsType = {
    project: any
}

export const Project = ({project}: PropsType) => {
    const [imageData] = useState(project.image);
    const [current, setCurrent] = useState(0);
    const [quote, getQuote] = useState(imageData[current])

    useEffect(
        () => getQuote(imageData[current]),
        [current, quote]
    )

    const nextQuote = () => {
        if (current === imageData.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }

    const prevQuote = () => {
        if (current === 0) {
            setCurrent(imageData.length - 1)
        } else {
            setCurrent(current - 1)
        }
    }

    return (
        <div className={classes.project}>
            <div className={classes.iconProject}>
                <img src={quote.image} alt={"#"}/>
                <a onClick={prevQuote} className={classes.prev} id="prev">&#10094;</a>
                <a onClick={nextQuote} className={classes.next} id="next">&#10095;</a>
            </div>
            <div className={classes.titleContainer}>
                <h2 className={classes.titleProject}>{project.title}</h2>
                <a href={project.link} target="_blank" className={classes.linkCV}><img src={arrow_right} alt={"2"}/></a>
            </div>
            <div className={classes.description}>
                <p className={classes.descriptionText}>{project.description}</p>
                <div className={classes.stacks}>
                    {
                        project.stacks.map((stack: any) => {
                            return (
                                <span className={classes.stackText}>{stack} </span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
