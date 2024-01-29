'use client'
import { Oswald } from 'next/font/google'
import React, { useState } from 'react'
import DvrIcon from '@mui/icons-material/Dvr';
import SearchIcon from '@mui/icons-material/Search';
import ForumIcon from '@mui/icons-material/Forum';
import SignUpForm from './SignUpForm';


const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"] });


function SignUp({
  setIsLoading,
  isLoading
}: {
  setIsLoading: (bool: boolean) => void,
  isLoading: boolean
}) {
  const benefits = [
    {
      icon: DvrIcon,
      name: "Access and compete in our competitions"
    },
    {
      icon: SearchIcon,
      name: "View past competitions and statistics"
    },
    {
      icon: ForumIcon,
      name: "Have full access to the community forums"
    }
  ];


  return (
    <div className='w-full h-[100vh] px-5 md:px-10 lg:px-20 '> 
      <div className="w-full h-full flex flex-row items-start justify-between gap-10">
        <div className='w-full h-full md:flex flex-col items-start justify-center gap-8 hidden'>
          <h3 className={`text-3xl font-bold text-white ${oswald.className}`}>
            New to CougarCode Challenge? Signup to compete!
          </h3>
          <p className={`${oswald.className} text-white text-2xl mt-2`}>
            As a member you can...
          </p>
          <div className="flex flex-col gap-4">
            {
              benefits.map((b) => (
                <div key={b.name} className="flex flex-row gap-4">
                  <b.icon className='text-white' />
                  <p className={`${oswald.className} text-xl text-white`}>
                    {b.name}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
        <SignUpForm setIsLoading={setIsLoading} />
      </div>
    </div>
  )
}


export default SignUp