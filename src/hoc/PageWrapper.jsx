import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { styles } from "../styles";
import { baseRoute } from "../constants";

import { Footer, Navbar } from "../components";

const navLinks = [
    {
        title: 'Home',
        path: `${baseRoute}`,
    },
    {
        title: 'Projects',
        path: `${baseRoute}/projects`,
    },
    // {
    //     title: 'Certifications',
    //     path: `${baseRoute}/certifications`,
    // },
]

const PageWrapper = (Component, idName) =>
    function HOC() {
        const [active, setActive] = useState("")
        const [toggle, setToggle] = useState(false)
        // for light/dark mode theme
        const [theme, setTheme] = useState(
            localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
        )
        const element = document.documentElement
        const darkQUuery = window.matchMedia('(prefers-color-scheme: dark)')

        function onWindowMatch() {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQUuery.matches)) {
                element.classList.add('dark')
            } else {
                element.classList.remove('light')
            }
        }

        onWindowMatch()
        useEffect(() => {
            switch (theme) {
                case 'dark':
                    element.classList.add('light')
                    localStorage.setItem('theme', 'dark')
                    break;
                case 'light':
                    element.classList.remove('dark')
                    localStorage.setItem('theme', 'light')
                    break;
                default:
                    element.classList.remove('theme')
                    break;
            }
        }, [theme])

        return (
            <div className={`relative z-0 bg-white dark:bg-primary`}>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                    <nav
                        className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-white dark:bg-primary dark:bg-transparent bg-opacity-70`}>
                        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                            <Link to={baseRoute}
                                className='flex items-center gap-2 logo'
                                onClick={() => {
                                    setActive('');
                                    window.scrollTo(0, 0)
                                }}
                            >
                                <p className='text-black dark:text-white text-3xl font-bold cursor-pointer flex flex-row'>
                                    Suman &nbsp;
                                </p>
                            </Link>

                            <ul className="list-none hidden sm:flex flex-row gap-10">
                                {navLinks.map((link) => (
                                    <li
                                        key={link.id}
                                        className={`${active === link.title
                                            ? 'text-gray-900 dark:text-white font-bold'
                                            : 'text-gray-700 dark:text-secondary'
                                            } hover:scale-105 text-[18px] font-medium cursor-pointer}
                `}
                                        onClick={() => { setActive(link.title) }}
                                    >
                                        {!link.path
                                            ? <a href={`#${link.id}`}> {link.title} </a>
                                            : <Link to={`${link.path}`}> {link.title} </Link>
                                        }
                                    </li>
                                ))}

                                <div className='duration-100 flex gap-2 text-gray-900 dark:text-gray-100'>
                                    {
                                        // render dark mode button if theme is dark else render light mode button
                                        theme === 'dark' ?
                                            <ThemeButton
                                                icon={BsSun}
                                                text='light'
                                                theme={theme}
                                                setTheme={setTheme}
                                            />
                                            :
                                            <ThemeButton
                                                icon={BsMoonStars}
                                                text='dark'
                                                theme={theme}
                                                setTheme={setTheme}
                                            />
                                    }
                                </div>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="min-h-screen">
                    <Component />
                </div>
                <Footer />
            </div>
        );
    };

export default PageWrapper;


const ThemeButton = ({ icon: Icon, text, theme, setTheme }) => (
    <button
        onClick={() => {
            setTheme(text);
            // refresh the page to apply the theme
            window.location.reload();
        }}
        className={`p-2 md:-my-2 flex rounded-full items-center justify-center hover:bg-gray-200 hover:dark:bg-gray-800 outline-link cursor-pointer`}
    >
        <Icon
            className={`h-6 w-6 transition-transform flex rounded-full items-center text-gray-800 dark:text-gray-200 justify-center`}
        />
    </button>
);