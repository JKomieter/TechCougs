import React from 'react'
import { Oswald } from 'next/font/google';

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"] });


function Header() {
    return (
        <section className='w-full bg-transparent absolute top-0  px-5 md:px-10 lg:px-20 py-5 text-right'>
            <p className={`${oswald.className} text-blue-500 font-bold text-3xl`}>CougarCode Challenge</p>
        </section>
    )
}

export default Header