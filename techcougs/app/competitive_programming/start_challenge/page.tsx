"use client"
import Header from '@/layouts/CompProg/Header'
import React, { useEffect } from 'react'
import { auth } from '@/firebase/config';
import { useRouter } from 'next/navigation';
import Questions from '@/layouts/CompProg/Questions';

function Page() {
  const router = useRouter();

  useEffect(() => {
      const user = auth.currentUser;
      // if (!user) return router.push("/competitive_programming/signup");
  }, [auth])

  return (
    <main className='w-full min-h-screen'>
        <Header />
        <Questions />
    </main>
  )
}

export default Page