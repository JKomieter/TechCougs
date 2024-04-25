"use client"
import { Oswald } from 'next/font/google';
import React, { useState } from 'react'
import { useForm, FieldValues } from "react-hook-form"
import CodeIcon from '@mui/icons-material/Code';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '@/firebase/config';
import { useRouter } from 'next/navigation';
import { addDoc, collection } from 'firebase/firestore';
import axios from 'axios';


const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"] });

function SignUpForm({
    setIsLoading
}: {
    setIsLoading: (bool: boolean) => void
}) {
    const [isErr, setIsErr] = useState(false);
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data: FieldValues) => {
        setIsLoading(true)
        try {
            const { email, username, password } = data;
            await createUserWithEmailAndPassword(auth, email, password);
            const programmersCollection = collection(db, "Programmers");
            await addDoc(programmersCollection, {
                email,
                username,
                disqualified: false,
                score: 0,
                questions_solved: [],
                time_left: {
                    hours: 3600,
                    minutes: 0,
                    seconds: 0
                },
                questions_submitted: []
            });
            router.push("/competitive_programming/waiting");
        } catch (error) {
            console.log(error);
            setIsErr(true);
            setIsLoading(false);
        }
    }

    return (
        <div className='w-full h-full flex justify-center items-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full flex flex-col gap-6 items-center justify-center'>
                    <div className='w-full'>
                        <label htmlFor='username' className={`${oswald.className} font-semibold text-lg text-white`}>Username</label>
                        <input type='text' className={`${oswald.className} border-white bg-transparent border-2 p-3 rounded-lg w-full text-white text-lg outline-none`} {...register("username")} />
                        {errors.username && <span className={`${oswald.className} text-lg text-red-300`}>This field is required</span>}
                    </div>
                    <div className='w-full'>
                        <label htmlFor='email' className={`${oswald.className} font-semibold text-lg text-white`}>Email</label>
                        <input type='email' className={`${oswald.className} border-white bg-transparent border-2 p-3 rounded-lg w-full text-white text-lg outline-none`} {...register("email")} />
                        {errors.email && <span className={`${oswald.className} text-lg text-red-300`}>This field is required</span>}
                    </div>
                    <div className='w-full'>
                        <label htmlFor='password' className={`${oswald.className} font-semibold text-lg text-white`}>Password</label>
                        <input type='password' className={`${oswald.className} border-white bg-transparent border-2 p-3 rounded-lg w-full text-white text-lg outline-none`} {...register("password")} />
                        {errors.password && <span className={`${oswald.className} text-lg text-red-300`}>This field is required</span>}
                    </div>
                    <button className='flex flex-row gap-2 items-center px-5 py-3 bg-[#0077cc] rounded-lg hover:-translate-y-2 duration-500 mt-2'>
                        <CodeIcon className='text-white' />
                        <p className={`${oswald.className} text-xl text-white`}>Enter Challenge</p>
                    </button>
                    {isErr && <p className={`${oswald.className} text-red-400 text-lg`}>There was a problem entering the challenge</p>}
                </form>
        </div>
    )
}

export default SignUpForm