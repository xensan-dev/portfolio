import {
    mobile,
    backend,
    creator,
    web,
    javascript,
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
    wwd,
    ccp,
    mp,
    threejs,
} from "./assets";
  
export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];
  
const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    }
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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
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
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];
  
const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
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
    /*{
        name: "uforumit",
        description:
            "A full Stack Forum web-application, similar to reddit, that allows the user to create categories, create threads, comment on existing threads, follow users, and more!",
        tags: [
            {
            name: "react",
                color: "blue-text-gradient",
            },
            {
            name: "mongodb",
                color: "green-text-gradient",
            },
            {
            name: "bulmacss",
                color: "pink-text-gradient",
            },
            {
            name: "graphql",
                color: "blue-text-gradient"
            },
        ],
        image: wwd,
        source_code_link: "https://github.com/",
    },*/
    {
        name: "Wallet Watchdog",
        description:
            "A Full Stack Finance web-application that takes in your income, monthly expenses, etc. and keeps a track on how much you are saving. Updates needed.",
        tags: [
            {
            name: "handlebars",
                color: "blue-text-gradient",
            },
            {
            name: "sql",
                color: "green-text-gradient",
            },
            {
            name: "express",
                color: "pink-text-gradient",
            },
            {
            name: "chart.js",
                color: "pink-text-gradient",
            },
        ],
        image: wwd,
        source_code_link: "https://github.com/Xenon789/Wallet-Watchdog",
    },
    {
        name: "Crypto Conversion",
        description:
            "A Crypto-currency web-application that allows the user to search all coins, find their values, and converts them to other currencies. (ex: USD to Yen)",
        tags: [
            {
            name: "html",
                color: "blue-text-gradient",
            },
            {
            name: "css",
                color: "green-text-gradient",
            },
            {
            name: "api",
                color: "pink-text-gradient",
            },
        ],
        image: ccp,
        source_code_link: "https://github.com/Xenon789/Crypto-conversion-project",
    },
    {
        name: "My Portfolio",
        description:
            "My first vite, three.js, tailwindcss front end project using a tutorial given by Javascript Mastery.",
        tags: [
            {
            name: "vite",
                color: "blue-text-gradient",
            },
            {
            name: "react",
                color: "green-text-gradient",
            },
            {
            name: "three.js",
                color: "pink-text-gradient",
            },
            {
            name: "tailwindcss",
                color: "white-text-gradient",
            },
        ],
        image: mp,
        source_code_link: "https://github.com/Xenon789/portfolio",
    },
];
  
export { services, technologies, experiences, testimonials, projects };