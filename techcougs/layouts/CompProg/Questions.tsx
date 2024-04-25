"use client";
import React, { useEffect, useState } from 'react'
import { Oswald } from 'next/font/google';
import QuestionsList from './QuestionsList';
import { createTimeModel, useTimeModel } from 'react-compound-timer';
import { collection, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { db, auth } from '@/firebase/config';
import { ProgrammerType } from '@/types';
import { usePathname } from 'next/navigation';


const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"] });


function Questions() {
    const programmersCollection = collection(db, "Programmers");
    const [ programmer, setProgrammer ] = useState<ProgrammerType>({} as ProgrammerType)
    const [stopwatch, setStopwatch] = useState(createTimeModel({ initialTime: 0, direction: "backward", startImmediately: true, timeToUpdate: 250 }));
    const pathname = usePathname();

    useEffect(() => {
        const getTimer = async () => {
            try {
                if (!auth.currentUser) return;
                console.log(auth.currentUser)
                const user = query(programmersCollection, where("email", "==", auth?.currentUser?.email));
                const userData = await getDocs(user);
                const programmer = { id: userData.docs[0]?.id, ...userData.docs[0]?.data() } as unknown as ProgrammerType;
                const time = programmer?.time_left;
                console.log("Time", time.minutes * 3600);
                setStopwatch(createTimeModel({
                    initialTime: (time?.hours * 3600) + (time?.minutes * 60) + time?.seconds || 3000000,
                    direction: "backward",
                    startImmediately: true,
                    timeToUpdate: 250,
                }));

                setProgrammer(programmer);
            } catch (error) {
                console.error("Error fetching timer:", error);
            }
        };

        getTimer();

    }, [auth?.currentUser, pathname]);

    useEffect(() => {
        const postLatestTime = async () => {
            const id = programmer.id as string
            console.log(id)
            if (!id) return;
            const programmerRef = doc(db, "Programmers", id);
            await updateDoc(programmerRef, {
                time_left: {
                    hours: value.h,
                    minutes: value.m,
                    seconds: value.s
                }
            })
            console.log("unloading")
        }

        postLatestTime()
    }, [pathname, programmer])

    const { value } = useTimeModel(stopwatch);

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
                    <QuestionsList programmer={programmer} />
                </div>
            </div>
        </section>
    )
}

export default Questions