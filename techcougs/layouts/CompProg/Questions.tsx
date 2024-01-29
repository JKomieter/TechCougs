import React, { useCallback, useEffect, useState } from 'react'
import { Oswald } from 'next/font/google';
import QuestionsList from './QuestionsList';
import { TimerValue, createTimeModel, useTimeModel } from 'react-compound-timer';
import { collection, query, where } from 'firebase/firestore';
import { db, auth } from '@/firebase/config';


const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"] });

const stopwatch = createTimeModel({
    initialTime: 3000000,
    direction: "backward",
    startImmediately: true,
    timeToUpdate: 250,
});

function Questions() {
    const { value } = useTimeModel(stopwatch);
    const programmersCollection = collection(db, "Programmers");

    useEffect(() => {
        const getTimer = async () => {
            const user = query(programmersCollection, where("email", "==", auth.currentUser?.email));
            
        }
    }, [])

    return (
        <section className='w-full h-[100vh] flex justify-center items-center px-5 md:px-10 lg:px-20 overflow-y-hidden'>
            <div className="w-full flex flex-col gap-4">
                <div className="w-full h-full flex flex-row items-center justify-between">
                    <div className="flex flex-col gap-3">
                        <h1 className={`${oswald.className} text-white text-4xl font-bold`}>Coding Questions</h1>
                        <div className="flex flex-row items-center gap-4">
                            <p className={`${oswald.className} text-lg text-white font-semibold`}>Duration: 3h</p>
                            <p className={`${oswald.className} text-lg text-white font-semibold`}>Questions: 3</p>
                            <p className={`${oswald.className} text-lg text-white font-semibold`}>Submitted: 1</p>
                        </div>
                    </div>
                    <div className="px-7 py-6 flex justify-center items-center flex-col bg-blue-500">
                        <h2 className={`${oswald.className} font-semibold text-white text-4xl`}>{`${value.h}:${value.m}:${value.s}`}</h2>
                        <h4 className={`${oswald.className} font-semibold text-white text-2xl`}>Remaining Time</h4>
                    </div>
                </div>
                <div className="min-h-[500px] border-white border-2">
                    <QuestionsList />
                </div>
            </div>
        </section>
    )
}

export default Questions