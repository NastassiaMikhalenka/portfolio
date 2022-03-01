import React, {useEffect, useState} from 'react';
import classes from './Project.module.css'
// @ts-ignore
import Fade from 'react-reveal/Fade';
import bite4 from '../../assets/ProjectsImg/Bite/bite4.jpeg'
import github from '../../assets/Skills/github.png'
import link from '../../assets/Skills/link.png'


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
        <Fade bottom>
            <div className={classes.projectWrapper}>
                {/*    <div className={classes.iconProject}>*/}
                {/*        <img src={quote.image} alt={"#"}/>*/}
                {/*        <a onClick={prevQuote} className={classes.prev} id="prev">&#10094;</a>*/}
                {/*        <a onClick={nextQuote} className={classes.next} id="next">&#10095;</a>*/}
                {/*    </div>*/}
                {/*    <div className={classes.descriptionProject}>*/}
                {/*        <div className={classes.descriptionProject_title}>*/}
                {/*            <h2 className={classes.titleProject}>{project.title}</h2>*/}
                {/*            <p className={classes.description}>{project.description}</p>*/}
                {/*        </div>*/}
                {/*        <div className={classes.icon_links}>*/}
                {/*            <a href={project.link} target="_blank"><img src="https://img.icons8.com/windows/32/000000/link.png" alt={'@'}/></a>*/}
                {/*            <a href={project.linkGitHub} target="_blank"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt={'@'}/></a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className={classes.card}>
                    <div className={classes.box}>
                        <img src={bite4} alt=""/>
                        <img src={quote.image} alt={"#"}/>
                        <a onClick={prevQuote} className={classes.prev} id="prev">&#10094;</a>
                        <a onClick={nextQuote} className={classes.next} id="next">&#10095;</a>
                        <div className={classes.text_block}>
                            <h3 className={classes.title}>{project.title}</h3>
                            <p className={classes.description}>{project.description}</p>
                        </div>
                    </div>
                    <div className={classes.buttons}>
                        <a href={project.link} target="_blank"><img
                            src={link} alt={'link'}/></a>
                        <a href={project.linkGitHub} target="_blank"><img
                            src={github} alt={'github'}/></a>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
