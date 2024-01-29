import React from 'react';
import { Divider } from "@nextui-org/react";
import { Oswald } from 'next/font/google';
import CodeIcon from '@mui/icons-material/Code';

const oswald = Oswald({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

function Hero() {
    return (
        <section className='md:h-[90vh] h-[80vh] w-full flex items-center flex-col justify-between'>
            <div className="w-full flex justify-center items-center flex-col gap-9 h-full">
                <div className="flex flex-row gap-3 items-center">
                    <Divider orientation='horizontal' className='w-20 text-[#0077cc]' />
                    <h4 className={`${oswald.className} text-xl text-white`}>Welcome</h4>
                    <Divider orientation='horizontal' className='w-20 text-[#0077cc]' />
                </div>
                <div className='w-full text-center'>
                    <h1 className={`text-5xl ${oswald.className} font-semibold text-white`}>Cougar Devs - Where Passion Meets Programming!</h1>
                </div>
                <div className="w-full text-center">
                    <p className={`${oswald.className} text-white font-light`}>
                        Suspendisse morbi mauris gravida tellus integer egestas faucibus tellus inut condimentum blandit mus auctor nulla lacus velit.
                    </p>
                </div>
                <div className="">
                    <button className='flex flex-row gap-2 items-center px-5 py-3 bg-[#0077cc] rounded-lg hover:-translate-y-2 duration-500'>
                        <CodeIcon className='text-white' />
                        <p className={`${oswald.className} text-xl text-white`}>Become a Cougar Dev</p>
                    </button>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="lg:w-[80%] w-full bg-white/85 min-h-32 translate-y-12 flex">
        
                </div>
            </div>
        </section>
    )
}

export default Hero