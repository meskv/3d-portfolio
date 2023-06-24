import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { baseRoute, navLinks } from '../constants'
import { logo, menu, close } from '../assets'

import { BsSun, BsFillMoonFill } from 'react-icons/bs'
import { HiOutlineDesktopComputer } from 'react-icons/hi'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  // for light/dark mode theme
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
  )
  const element = document.documentElement
  const darkQUuery = window.matchMedia('(prefers-color-scheme: dark)')

  const themeOtions = [
    {
      icon: BsSun,
      text: 'light',
    },
    {
      icon: BsFillMoonFill,
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
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white dark:bg-primary`}>
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
              themeOtions.map((option) => (
                <button
                  key={option.texttext}
                  onClick={() => {
                    setTheme(option.text);
                    // refresh the page to apply the theme
                    window.location.reload()
                  }}

                >
                  <option.icon className={`h-8 w-8 p-2 text-2xl leading-9 rounded-sm bg-gray-100 dark:bg-gray-800  
                  ${theme === option.text && "text-gray-50 bg-ascent dark:text-gray-100 dark:bg-ascent"}`} />
                </button>
              ))
            }
          </div>
        </ul>

        {/* nav for small devices */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28] h-[28] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title
                    ? 'text-gray-900 dark:text-white font-bold'
                    : 'text-gray-700 dark:text-secondary'
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
                  themeOtions.map((option) => (
                    <button
                      key={option.texttext}
                      onClick={() => {
                        setTheme(option.text);
                        // refresh the page to apply the theme
                        window.location.reload()
                      }}

                    >
                      <option.icon className={`h-8 w-8 p-2 text-2xl leading-9 rounded-sm bg-gray-100 dark:bg-gray-800  
                  ${theme === option.text && "text-gray-100 bg-ascent dark:text-gray-100 dark:bg-ascent"}`} />
                    </button>
                  ))
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