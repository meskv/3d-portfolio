import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { baseRoute, navLinks } from '../constants'
import { logo, menu, close } from '../assets'

import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { BsSun, BsMoonStars } from 'react-icons/bs'
import { HiOutlineDesktopComputer } from 'react-icons/hi'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  // for light/dark mode theme
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
  )
  const element = document.documentElement
  const darkQUuery = window.matchMedia('(prefers-color-scheme: dark)')

  const themeOptions = [
    {
      icon: BsSun,
      text: 'light',
    },
    {
      icon: BsMoonStars,
      text: 'dark',
    },
    // {
    //   icon: HiOutlineDesktopComputer,
    //   text: 'system',
    // }
  ]

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
          {/* <img src={logo} alt="logo" className='w-10 h-10 object-contain' /> */}
          <p className='text-black dark:text-white text-3xl font-bold cursor-pointer flex fler'>
            Suman &nbsp;
            {/* <span className='sm:block hidden'>|
              Tech Enthusiast
            </span> */}
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


            {/* {
              themeOptions.map((option) =>
                <ThemeButton
                  key={option.text}
                  icon={option.icon}
                  text={option.text}
                  theme={theme}
                  setTheme={setTheme}
                />
              )
            } */}
          </div>
        </ul>

        {/* nav for small devices */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>

          {toggle
            ? <AiOutlineClose className='h-6 w-6 text-black dark:text-white cursor-pointer' onClick={() => setToggle(!toggle)} />
            : <BiMenuAltRight className='h-6 w-6 text-black dark:text-white cursor-pointer' onClick={() => setToggle(!toggle)} />
          }

          {/* <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28] h-[28] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          /> */}

          <div className={`${!toggle ? 'hidden' : 'flex'} bg-gray-200 dark:bg-gray-700 p-6 absolute top-20 right-0 my-2 min-w-[200px] text-center mx-4 m-auto z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title
                    ? 'text-gray-900 dark:text-gray-100 font-bold'
                    : 'text-gray-700 dark:text-gray-400'
                    } hover:scale-105 text-[18px] font-medium cursor-pointer}
                    `}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}> {link.title} </a>
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
        </div>
      </div>
    </nav >
  )
}

export default Navbar

const ThemeButton = ({ icon: Icon, text, theme, setTheme }) => (

  <>
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
  </>
);