"use client";
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Oswald } from 'next/font/google';
import PersonIcon from '@mui/icons-material/Person';
import { usePathname } from 'next/navigation';

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"] });

function Header() {
    const pathname = usePathname();

    return (
        <section className='w-full bg-transparent absolute top-0'>
            <div className="w-full px-5 md:px-10 lg:px-20 py-5 flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center text-white">
                    <span className='block lg:hidden'>
                        <MenuIcon className='md:text-4xl text-3xl' />
                    </span>
                    <h1 className={`md:text-3xl text-[26px] font-bold ${oswald.className}`}>
                        <a href="/" className='no-underline'>Cougar Devs</a>
                    </h1>
                </div>
                <div className="lg:flex flex-row items-center gap-10 hidden text-white">
                    {
                        links.map((link) => (
                            <a key={link.name} href={link.href} className={`text-lg font-medium uppercase ${oswald.className} no-underline hover:text-[#0077cc] duration-200 ${pathname === link.href && 'text-[#0077cc]'}`}>
                                {link.name}
                            </a>
                        ))
                    }
                </div>
                <div className="cursor-pointer">
                    <a href='/membership' style={{ borderColor: "white", borderWidth: "2px" }} className="flex flex-row items-center gap-1 px-4 py-1 border-black rounded-md border-1 text-white">
                        <PersonIcon className='text-2xl' />
                        <p className={`text-lg font-medium ${oswald.className} uppercase `}>membership</p>
                    </a>
                </div>
            </div>
        </section>
    )
}


const links = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Services',
        href: '/services'
    },
    {
        name: 'News',
        href: '/news'
    },
    {
        name: 'Contact',
        href: '/contact'
    },
]

export default Header