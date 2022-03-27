import bite1 from '../assets/ProjectsImg/Bite/bite1.jpeg'
import bite2 from '../assets/ProjectsImg/Bite/bite2.jpeg'
import bite3 from '../assets/ProjectsImg/Bite/bite3.jpeg'
import bite4 from '../assets/ProjectsImg/Bite/bite4.jpeg'
import Trevland1 from '../assets/ProjectsImg/Trevland/Trevland1.jpeg'
import Trevland2 from '../assets/ProjectsImg/Trevland/Trevland2.jpeg'
import Trevland3 from '../assets/ProjectsImg/Trevland/Trevland3.jpeg'
import QuizCards1 from '../assets/ProjectsImg/QuizCards/QuizCards1.jpeg'
import QuizCards2 from '../assets/ProjectsImg/QuizCards/QuizCards2.png'
import QuizCards3 from '../assets/ProjectsImg/QuizCards/QuizCards3.png'
import QuizCards4 from '../assets/ProjectsImg/QuizCards/QuizCards4.png'
import QuizCards5 from '../assets/ProjectsImg/QuizCards/QuizCards5.png'
import QuizCards6 from '../assets/ProjectsImg/QuizCards/QuizCards6.png'
import AviaSales1 from '../assets/ProjectsImg/Aviasales/Aviasales1.png'
import AviaSales2 from '../assets/ProjectsImg/Aviasales/Aviasales2.png'
import AviaSales3 from '../assets/ProjectsImg/Aviasales/Aviasales3.png'
import gallery from '../assets/ProjectsImg/Gallery/gallery.png'
import ToDoList from '../assets/ProjectsImg/ToDoList/todolist.png'
import ToDoList2 from '../assets/ProjectsImg/ToDoList/todolist2.png'



export const project1 = {
    id: 1,
    title: 'The card game memory',
    description: `I've created App with the feature of changing level. The object of the game is to turn over pairs of matching cards.`,
    stack: 'React JS, TypeScript, Module CSS.',
    image: [
        {image: `https://github.com/NastassiaMikhalenka/new-year-game/raw/master/src/assets/NewYear2.jpeg`,},
        {image: `https://github.com/NastassiaMikhalenka/new-year-game/raw/master/src/assets/NewYear1.jpeg`},
        {image: `https://github.com/NastassiaMikhalenka/new-year-game/raw/master/src/assets/NewYear3.jpeg`,},
    ],
    link: 'https://nastassiamikhalenka.github.io/new-year-game/',
    linkGitHub: 'https://github.com/NastassiaMikhalenka/new-year-game',
}
export const project2 = {
    id: 1,
    title: 'Landing Page Trevland',
    description: 'This landing page for travel agency. There are also a few areas with JS. This landing page for travel agency. There are also a few areas with JS.',
    image: [
        {image: Trevland1,},
        {image: Trevland2,},
        {image: Trevland3,},
    ],
    link: 'https://nastassiamikhalenka.github.io/traveland/',
    linkGitHub: 'https://nastassiamikhalenka.github.io/traveland/',
}

export const project3 = {
    id: 1,
    title: 'E-commerce Shop',
    description: `I've created App 'Shopping store' with the feature of adding items count and decreasing item count.`,
    image: [
        {image: bite3,},
        {image: bite4,},
        {image: bite2,},
        {image: bite1,},
    ],
    stack: 'React JS, Redux, Module CSS.',
    link: 'https://NastassiaMikhalenka.github.io/bite',
    linkGitHub: 'https://github.com/NastassiaMikhalenka/bite',
}

export const project4 = {
    id: 1,
    title: 'Quiz Cards',
    description: `Teamwork. We've created Login, Registration, Profile, Packs Pages, etc. There is action to get and to learn cards. App includes allowing u to edit items, and sorting items.`,
    image: [
        {image: QuizCards1,},
        {image: QuizCards2,},
        {image: QuizCards3,},
        {image: QuizCards4,},
        {image: QuizCards5,},
        {image: QuizCards6,},
    ],
    readMore: ' Read more info...',
    readMoreLink: `https://github.com/NastassiaMikhalenka/projectcards/blob/master/README.md`,
    stack: 'React, TypeScript, Redux, Redux-Thunk, react-router-dom, Axios.',
    link: 'https://nastassiamikhalenka.github.io/projectcards/',
    linkGitHub: 'https://github.com/NastassiaMikhalenka/projectcards',
}

export const project5 = {
    id: 1,
    title: 'AviaSales',
    description: 'Application lets you create custom process of searching tickets to flights.',
    image: [
        {image: AviaSales1,},
        {image: AviaSales2,},
        {image: AviaSales3,},
    ],
    stack: 'React JS, Redux, Redux-Thunk, Axios, Module CSS.',
    link: 'https://nastassiamikhalenka.github.io/aviasales/',
    linkGitHub: 'https://github.com/NastassiaMikhalenka/aviasales',
}

export const project6 = {
    id: 1,
    title: 'Gallery',
    description: 'Gallery lets you search pictures.',
    stack: 'React JS, React Hooks, Axios.',
    image: [
        {image: gallery,},
    ],
    link: 'https://nastassiamikhalenka.github.io/gallery/',
    linkGitHub: 'https://github.com/NastassiaMikhalenka/gallery',
}
export const project7 = {
    id: 1,
    title: 'ToDoList',
    description: `I've created app which includes allowing u to fetch the list of tasks, also u can edit tasks, and filtering the list of tasks between all, completed, and incomplete tasks.`,
    stack: 'React JS, TypeScript, Redux, Redux-Thunk, Axios, Material UI.',
    image: [
        {image: ToDoList,},
        {image: ToDoList2,},
    ],
    link: 'https://NastassiaMikhalenka.github.io/todolist/',
    linkGitHub: 'https://github.com/NastassiaMikhalenka/todolist',
}