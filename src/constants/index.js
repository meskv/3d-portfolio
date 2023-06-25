// Social Links Icons
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineTwitter } from "react-icons/ai";

// Tech Skill Icons
import { AiFillHtml5 } from "react-icons/ai";

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

import {
    IITPatna,
    NITAndhraLogo,
    JNVLogo,

    project1Img,
    project2Img,
    project3Img,

    chatgptProjImg1,
    chatgptProjImg2,
    chatgptProjImg3,
} from "../assets";

const baseRoute = "/portfolio";

const heroTypedText = [
    "Developer",
    "Programmer",
    "ML Enthusiast",
]

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
        path: "/projects"
    },
    {
        id: "contact",
        title: "Contact",
    },
    // {
    //     id: "resume",
    //     title: "Resume",
    //     path: "/resume"
    // },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Machine Learning Enthusiast",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
];


const experiences = [
    {
        title: "Web Development Intern",
        company_name: "Academic Section, IIT Patna",
        icon: IITPatna,
        iconBg: "#383E56",
        date: "May 2023 - Present",
        points: [
            "Developing web application using React.js, NodeJs and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Developing APIs for the web application using NodeJs and ExpressJs.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "ChatGPT Clone",
        description:
            "Created a clone of chatGPT using ReactJs and Tailwind CSS. ChatGPT is a chatbot that uses GPT-3 to answer your questions. It is a web app that uses the OpenAI API to complete your text.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "openai",
                color: "pink-text-gradient",
            },
        ],
        image: chatgptProjImg1,
        source_code_link: "https://github.com/meskv/chatgpt",
        deployedLink: "",
    },
    {
        name: "AIR Website",
        description:
            "Multi page Responsive React website built using ReactJs and scss",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "scss",
                color: "green-text-gradient",
            },
        ],
        image: project1Img,
        source_code_link: "https://github.com/meskv/AIR_WEBSITE",
        deployedLink: "https://ai-robotics.netlify.app/"
    },
    {
        name: "Color Pallete Generator",
        description:
            "It's a color pallete generator built using HTML, CSS and Javascript which generates a random color pallete.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image: project2Img,
        source_code_link: "https://github.com/",
        deployedLink: "https://meskv.netlify.app/projects/ColorPalleteGenerator/index.html"
    },
    {
        name: "Random Number Guessing Game",
        description:
            "Number guessing game user has to guess the number in 5 attempts.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image: project3Img,
        source_code_link: "https://github.com/",
        deployedLink: "https://meskv.netlify.app/projects/numbergame/"
    },
];

const hobbies = [
    {
        name: "Reading",
        color: "blue-text-gradient",
    },
    {
        name: "Mentoring",
        color: "green-text-gradient",
    },
    {
        name: "Sketching",
        color: "pink-text-gradient",
    },
    {
        name: "Listening Poetry and Music",
        color: "blue-text-gradient",
    },
    {
        name: "Watching YT Videos",
        color: "green-text-gradient",
    },
];

const socialLinks = [
    {
        name: "Github",
        link: "https://github.com/meskv",
        icon: AiFillGithub,
    },
    {
        name: "Linkedin",
        icon: AiFillLinkedin,
        link: "https://www.linkedin.com/in/me-skv"
    },
    {
        name: "Mail",
        icon: AiFillMail,
        link: "mailto:krsk1495@gmail.com"
    },
    {
        name: "Twitter",
        icon: AiOutlineTwitter,
        link: "https://twitter.com/me_skv"
    },
]

const educations = [
    {
        degree: "Bachelor of Technology",
        major: "Electrical and Electronics Engineering",
        university: "National Institute of Technology, Andhra Pradesh",
        icon: NITAndhraLogo,
        iconBg: "#383E56",
        date: "Nov 2020 - 2024(Expected)",
        grade: "7.84 CGPA (Till 6th Sem)",
    },
    {
        degree: "Senior Secondary",
        major: "Mathematics with Computer Science",
        university: "Jawahar Navodaya Vidyalaya, Giridih",
        icon: JNVLogo,
        iconBg: "#383E56",
        date: "Aug 2017 - March 2019",
        grade: "89.4%",
    },
    {
        degree: "Secondary",
        major: "",
        university: "Jawahar Navodaya Vidyalaya, Giridih",
        icon: JNVLogo,
        iconBg: "#383E56",
        date: "April 2012 - March 2017",
        grade: "9.8 CGPA",
    },
];

export {
    baseRoute,
    navLinks,
    heroTypedText,
    services,
    technologies,
    experiences,
    testimonials,
    projects,
    hobbies,
    socialLinks,
    educations,
};