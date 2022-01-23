import React, {useEffect, useState} from 'react';
import classes from './Project.module.css'
import arrow_right from './../../assets/Skills/arrow-right.png'


type PropsType = {
    title?: string
    description: string
    images: any
}

export const Project = (props: PropsType) => {
    const [imageData] = useState(props.images);
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
        <div>
            <div className={classes.project}>
                <div className={classes.iconProject}>
                    <img src={quote.image} alt={"#"}/>
                    <a onClick={prevQuote} className={classes.prev} id="prev">&#10094;</a>
                    <a onClick={nextQuote} className={classes.next} id="next">&#10095;</a>
                </div>
                <h2>{props.title}</h2>
                <div className={classes.description}>
                    <p>{props.description}</p>
                    <img src={arrow_right} alt={"2"}/>
                </div>
            </div>
        </div>
    )
}
