// import '../styles/Navbar.css'
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

const style = {
    link: "text-[var(--color-black)] hover:text-gray-400 dark:text-white"
}

function Navbar() {

    const [isDarkTheme, setIsDarkTheme] = useState(true)
    const [isMobileNav, setIsMobileNav] = useState(false)

    const toogleDarkClass = () => {
        const body = document.getElementById("body");
        body.classList.toggle("dark")
    }


    return (
        <>
            <header className='container p-4 flex items-center justify-between mx-auto dark:bg-black dark:text-white'>
                <p className="text-2xl font-semibold">
                    PD.
                </p>

                <nav className='flex items-center space-x-5'>
                    <ul className='hidden items-center space-x-5 md:flex'>
                        <li><a href="#" className={style.link}>Projects</a></li>
                        <li><a href="#" className={style.link}>Resume</a></li>
                        <li><a href="#" className={style.link}>Contact</a></li>
                    </ul>

                    <FaBars className="cursor-pointer md:hidden text-x" onClick={() => setIsMobileNav(!isMobileNav)} />

                    <div className="p-2 bg-sky-500/8 rounded-sm">
                        {
                            isDarkTheme ? <MdSunny className=' text-xl cursor-pointer text-[#F3CE55]' onClick={() => { setIsDarkTheme(false); toogleDarkClass() }} /> : <FaMoon className=' text-xl cursor-pointer text-[#cab229]' onClick={() => { setIsDarkTheme(true); toogleDarkClass() }} />
                        }
                    </div>
                </nav>
            </header>
            {
                isMobileNav &&

                <div className="px-4">
                    <ul className='space-y-1 p-4 bg-sky-500/8 rounded'>
                        <li><a href="#" className={style.link}>Projects</a></li>
                        <li><a href="#" className={style.link}>Resume</a></li>
                        <li><a href="#" className={style.link}>Contact</a></li>
                    </ul>
                </div>
            }
        </>
    )
}

export default Navbar
