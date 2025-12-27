import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import LogoAlliance from './assets/images/Alliance.webp';
import LogoMVP from './assets/images/mvp.webp';
import UC from './assets/images/UC.png';
import portfolio from './assets/images/portfolio.webp';
import dota2 from './assets/images/dota2.webp';
import advanceCalulator from './assets/images/advance-calculator.webp';
import calulator from './assets/images/calculator.webp';
import facebook from './assets/images/facebook.webp';
import fakeStore from './assets/images/fake-store.webp';
import WeLift from './assets/images/WeLift.webp';
import OverFlow from './assets/images/Overflow.webp';
import Amusement from './assets/images/amusement.gif';
import fun88 from './assets/images/fun88.webp';
import boilerplate from './assets/images/personal_boilerplate.webp';
import todo from './assets/images/todo.webp';
import mern from './assets/images/mern.webp';
import { LocalProjects } from './types/global';

export const sections = [
    {
        nameKey: 'nav.home',
        id: '/',
    },
    {
        nameKey: 'nav.about',
        id: 'about',
    },
    {
        nameKey: 'nav.skills',
        id: 'skills',
    },
    {
        nameKey: 'nav.timeline',
        id: 'timeline',
    },
    {
        nameKey: 'nav.projects',
        id: 'projects',
    },
    {
        nameKey: 'nav.contact',
        id: 'contact',
    },
];

export const skills = [
    {
        name: 'React.js',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    },
    {
        name: 'TypeScript',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    },
    {
        name: 'JavaScript (ES6+)',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    },
    {
        name: 'Vite',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg',
    },
    {
        name: 'Redux',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
    },
    {
        name: 'MobX',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mobx/mobx-original.svg',
    },
    {
        name: 'Zustand',
        link: 'https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg',
    },
    {
        name: 'HTML5',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    },
    {
        name: 'CSS3',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    },
    {
        name: 'Bootstrap',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original-wordmark.svg',
    },
    {
        name: 'Sass',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
    },
    {
        name: 'Tailwind CSS',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
        name: 'Shadcn/UI',
        link: 'https://avatars.githubusercontent.com/u/139895814?s=280&v=4',
    },
    {
        name: 'Material UI',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg',
    },
    {
        name: 'VBScript',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/visualbasic/visualbasic-original.svg',
    },
    {
        name: 'RESTful API',
        link: '',
    },
    {
        name: 'WebSocket',
        link: '',
    },
    {
        name: 'Jest',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg',
    },
    {
        name: 'React Testing Library',
        link: 'https://testing-library.com/img/logo-large.png',
    },
    {
        name: 'NodeJS',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
    },
    {
        name: 'Express.js',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
    },
    {
        name: 'C++',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
    },
    {
        name: 'Java',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg',
    },
    {
        name: 'Spring Boot',
        link: 'https://spring.io/img/projects/spring-boot.svg',
    },
    {
        name: 'C#',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
    },
    {
        name: 'ASP.NET Core',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg',
    },
    {
        name: 'PHP',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
    },
    {
        name: 'Python',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    },
    {
        name: 'MySQl',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
    },
    {
        name: 'Firebase',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-original.svg',
    },
    {
        name: 'MongoDB',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    },
    {
        name: 'Docker',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
    },
    {
        name: 'Git',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
    },
    {
        name: 'SVN',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/subversion/subversion-original.svg',
    },
    {
        name: 'Postman',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg',
    },
    {
        name: 'Figma',
        link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg',
    },
];

export const experiences = [
    {
        logo: LogoAlliance,
        role: 'experiences.company1.role',
        title: 'Alliance Software Inc.',
        description: 'experiences.company1.description',
        link: 'https://alliance.com.ph/',
        tech: [
            'React.js',
            'TypeScript',
            'ASP.net Core',
            'C++',
            'VBScript',
            'JavaScript',
            'Git',
            'Waterfall',
        ],
        date: 'experiences.company1.date',
        subItems: [
            {
                position: 'experiences.company1.subItems.0.position',
                setup: 'experiences.company1.subItems.0.setup',
                projects: [
                    {
                        description:
                            'experiences.company1.subItems.0.projects.0.description',
                        tech: [
                            'React.js',
                            'C++',
                            'VBScript',
                            'JavaScript',
                            'HTML',
                            'CSS',
                            'C#',
                            'REST API',
                            'Git',
                            'SVN',
                            'Waterfall',
                        ],
                    },
                ],
                date: 'experiences.company1.subItems.0.date',
            },
            {
                position: 'experiences.company1.subItems.1.position',
                setup: 'experiences.company1.subItems.1.setup',
                projects: [
                    {
                        description:
                            'experiences.company1.subItems.1.projects.0.description',
                        tech: [
                            'React.js',
                            'C++',
                            'VBScript',
                            'JavaScript',
                            'HTML',
                            'CSS',
                            'C#',
                            'REST API',
                            'Git',
                            'SVN',
                            'Waterfall',
                        ],
                    },
                    {
                        description:
                            'experiences.company1.subItems.1.projects.1.description',
                        tech: [],
                    },
                ],
                date: 'experiences.company1.subItems.1.date',
            },
            {
                position: 'experiences.company1.subItems.2.position',
                setup: 'experiences.company1.subItems.2.setup',
                projects: [
                    {
                        description:
                            'experiences.company1.subItems.2.projects.0.description',
                        tech: [
                            'React.js',
                            'C++',
                            'VBScript',
                            'JavaScript',
                            'HTML',
                            'CSS',
                            'C#',
                            'REST API',
                            'Git',
                            'SVN',
                            'Waterfall',
                        ],
                    },
                ],
                date: 'experiences.company1.subItems.2.date',
            },
            {
                position: 'experiences.company1.subItems.3.position',
                setup: 'experiences.company1.subItems.3.setup',
                projects: [
                    {
                        description:
                            'experiences.company1.subItems.3.projects.0.description',
                        tech: [
                            'React.js',
                            'TypeScript',
                            'MobX',
                            'Material UI',
                            'ASP.net Core',
                            'Git',
                        ],
                    },
                    {
                        description:
                            'experiences.company1.subItems.3.projects.1.description',
                        tech: ['JavaScript', 'HTML', 'Bootstrap + Sass', 'C#'],
                    },
                    {
                        description:
                            'experiences.company1.subItems.3.projects.2.description',
                        tech: [
                            'React.js',
                            'JavaScript',
                            'C++',
                            'VBScript',
                            'Git',
                            'SVN',
                            'Waterfall',
                        ],
                    },
                ],
                date: 'experiences.company1.subItems.3.date',
            },
        ],
    },
    {
        logo: LogoMVP,
        title: 'MVP.dev',
        role: 'experiences.company2.role',
        link: 'https://mvp.dev/',
        description: 'experiences.company2.description',
        tech: [
            'Test Plan',
            'Test Cases',
            'Integration tests',
            'Functional tests',
        ],
        date: 'experiences.company2.date',
    },
];

export const educations = [
    {
        logo: UC,
        school: 'educations.education1.school',
        track: 'educations.education1.track',
        course: 'educations.education1.course',
        tech: [
            'C++',
            'Java',
            'C#',
            'Spring Boot',
            'J2EE',
            'NodeJS',
            'Python',
            'MySQL',
            'PHP',
            'Agile',
        ],
        date: 'educations.education1.date',
    },
    {
        logo: UC,
        school: 'educations.education2.school',
        track: 'educations.education2.track',
        course: 'educations.education2.course',
        tech: ['Java', 'C#'],
        date: 'educations.education2.date',
    },
];

export const projects: LocalProjects[] = [
    {
        name: 'Personal FullStack Boilerplate',
        image: mern,
        about: 'projects.personalFullStackBoilerplate.about',
        tech: [
            'React.js',
            'Vite',
            'TypeScript',
            'Tailwind',
            'Shadcn',
            'Zustand',
            'TanStack Query',
            'Node.js',
            'Express.js',
            'MongoDB',
        ],
        date: '2025',
        new: true,
        links: {
            github: 'https://github.com/crljhnmngs/fullstack-boilerplate',
        },
    },
    {
        name: 'Todo App',
        image: todo,
        about: 'projects.todoApp.about',
        tech: [
            'React.js',
            'TypeScript',
            'Tailwind',
            'Firebase',
            'Redux',
            'Jest',
        ],
        date: '2024',
        links: {
            github: 'https://github.com/crljhnmngs/todo-app',
            live: 'https://crljhnmngs-todo-app.netlify.app',
        },
    },
    {
        name: 'Personal Frontend Boilerplate',
        image: boilerplate,
        about: 'projects.personalFrontendBoilerplate.about',
        tech: ['React.js', 'Vite', 'TypeScript', 'Tailwind', 'Redux', 'Jest'],
        date: '2024',
        links: {
            github: 'https://github.com/crljhnmngs/react-redux-boilerplate',
            live: 'https://react-redux-boilerplate-crl.netlify.app',
        },
    },
    {
        name: 'FUN88',
        image: fun88,
        about: 'projects.fun88.about',
        tech: ['React.js', 'TypeScript', 'Tailwind', 'Redux'],
        date: '2024',
        links: {
            github: 'https://github.com/crljhnmngs/FUN88',
        },
    },
    {
        name: 'Personal Portfolio',
        image: portfolio,
        about: 'projects.personalPortfolio.about',
        tech: [
            'React.js',
            'Vite',
            'TypeScript',
            'Tailwind',
            'Framer Motion',
            'Responsive ',
        ],
        date: '2024',
        links: {
            github: 'https://github.com/crljhnmngs/Portfolio',
        },
    },
    {
        name: 'Fake Store',
        image: fakeStore,
        about: 'projects.fakeStore.about',
        tech: ['HTML', 'SCSS', 'JavaScript', 'Responsive'],
        date: '2022',
        links: {
            github: 'https://github.com/crljhnmngs/Fake-Store',
            live: 'https://crljhnmngs-fake-store.netlify.app',
        },
    },
    {
        name: 'DOTA2 Heroes',
        image: dota2,
        about: 'projects.dota2Heroes.about',
        tech: ['HTML', 'Tailwind', 'JavaScript', 'Responsive'],
        date: '2022',
        links: {
            github: 'https://github.com/crljhnmngs/DOTA2-Heroes',
            live: 'https://crljhnmngs.github.io/DOTA2-Heroes/',
        },
    },
    {
        name: 'Welift',
        image: WeLift,
        about: 'projects.welift.about',
        tech: ['PHP', 'MySQL', 'jQuery', 'JavaScript'],
        date: '2022',
        links: {
            github: 'https://github.com/crljhnmngs/CAPSTONE-PROJECT',
        },
    },
    {
        name: 'Overflow',
        image: OverFlow,
        about: 'projects.overflow.about',
        tech: ['PHP', 'MySQL', 'jQuery', 'JavaScript'],
        date: '2022',
        links: {
            github: 'https://github.com/LMNTRIXXXX/Capstone',
        },
    },
    {
        name: 'Advance Calculator',
        image: advanceCalulator,
        about: 'projects.advanceCalculator.about',
        tech: ['HTML', 'CSS', 'JavaScript'],
        date: '2022',
        links: {
            github: 'https://github.com/crljhnmngs/Advance-Calculator',
            live: 'https://crljhnmngs-advance-calculator.netlify.app',
        },
    },
    {
        name: 'Basic Calculator',
        image: calulator,
        about: 'projects.basicCalculator.about',
        tech: ['HTML', 'CSS', 'JavaScript'],
        date: '2022',
        links: {
            github: 'https://github.com/crljhnmngs/Calculator',
            live: 'https://crljhnmngs-basic-calculator.netlify.app',
        },
    },
    {
        name: 'Facebook Clone(Design)',
        image: facebook,
        about: `projects.facebookClone.about`,
        tech: ['HTML', 'CSS'],
        date: '2022',
        links: {
            github: 'https://github.com/crljhnmngs/Facebook-Clone',
        },
    },
    {
        name: ' Amusement Park Management System',
        image: Amusement,
        about: 'projects.amusementParkManagementSystem.about',
        tech: ['C#', 'Windows Forms'],
        date: '2019',
        links: {
            github: 'https://github.com/crljhnmngs/Amusement-Park-Management-System',
        },
    },
];
