'use client'

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavMenu from "./MobileNavManu";

function Header() {
    const [navMenuOpen, setNavMenuOpen] = useState(false)

    function toggleNavMenu() {
        setNavMenuOpen(!navMenuOpen)
    }
    return (
        <header className="w-full h-20 sticky top-0 bg-blue-900">
            <ul className="hidden md:flex justify-center text-white text-center h-full">
                <li className="m-auto">
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                </li>
                <li className="m-auto">
                    <Link href="/esu">
                        <p>ESU</p>
                    </Link>
                </li>
                <li className="m-auto">
                    <Link href="/experience">
                        <p>Work Experience</p>
                    </Link>
                </li>
                <li className="m-auto">
                    <Link href="/johnball">
                        <p>Game Development</p>
                    </Link>
                </li>
                <li className="m-auto">
                    <Link href="/hobbies">
                        <p>Hobbies</p>
                    </Link>
                </li>
            </ul>

            {/* Place mobile navigation button here */}
            <button className="md:hidden flex mr-auto ml-8 h-full text-white"><GiHamburgerMenu className="my-auto" onClick={toggleNavMenu} /></button>
            {navMenuOpen && (<MobileNavMenu closeOnSelection={toggleNavMenu} />)}
        </header>
    )
}

export default Header;