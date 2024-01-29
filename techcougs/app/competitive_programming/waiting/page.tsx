"use client"
import { db } from '@/firebase/config';
import { CircularProgress } from '@mui/material';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { Oswald } from 'next/font/google';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/config';

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"] });

function Page() {
  const leaderCollection = collection(db, "Leader");
  const router = useRouter();

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return router.push("/competitive_programming/signup");
  }, [auth])

  useEffect(() => {
    const q = query(leaderCollection, where("status", "==", "master"));
    const unsub = onSnapshot(q, (snapshot) => {
      snapshot.forEach((field) => {
        if (field.data().start) return router.push("/competitive_programming/start_challenge")
      })
    })

    return () => {
      unsub()
    }
  }, [])


  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <div className="flex flex-row gap-3 items-center">
        <h1 className={`text-white ${oswald.className} text-4xl`}>Wait for leader to commence challenge</h1>
        <CircularProgress size={70} color='primary' />
      </div>
    </div>
  )
}

export default Page