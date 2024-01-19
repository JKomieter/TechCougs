import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Oswald } from 'next/font/google';
import PersonIcon from '@mui/icons-material/Person';

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"] });

function Header() {


    return (
        <section className='w-full bg-transparent'>
            <div className="w-full px-5 md:px-10 lg:px-20 py-5 flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                    <span className='block md:hidden'>
                        <MenuIcon className='md:text-4xl text-3xl' />
                    </span>
                    <h1 className={`md:text-3xl text-[26px] font-bold ${oswald.className}`}>
                        <a href="/" className='no-underline'>Tech Cougs</a>
                    </h1>
                </div>
                <div className="md:flex flex-row items-center gap-10 hidden">
                {
                    links.map((link, index) => (
                        <a key={index} href={link.href} className={`text-lg font-medium uppercase ${oswald.className} no-underline hover:text-[#0077cc] duration-200`}>{link.name}</a>
                    ))
                }
                </div>
                <div className="cursor-pointer">
                    <a href='/membership' style={{borderColor: "black", borderWidth: "2px"}} className="flex flex-row items-center gap-1 px-4 py-1 border-black rounded-md border-1">
                        <PersonIcon className='text-2xl' />
                        <p className={`text-lg font-medium ${oswald.className} uppercase`}>membership</p>
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