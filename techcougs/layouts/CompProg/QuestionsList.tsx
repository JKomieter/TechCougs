import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Oswald } from 'next/font/google';
import { ProgrammerType, QuestionType } from '@/types';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { SolvedOrSubmitted } from '@/utils/QuestionUtils';
import { useRouter } from 'next/navigation';
import {my_questions} from "../../questions"


const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"] });


function QuestionsList({
    programmer
}: {
    programmer: ProgrammerType
}) {
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const questionsCollection = collection(db, "Questions");
    const router = useRouter();
    

    useEffect(() => {
        const getQuestions = async () => {
            const questionsSnapshot = getDocs(questionsCollection);
            const questions = (await questionsSnapshot).docs.map((q) => {
                return {
                    ...q.data()
                } as QuestionType
            });
            setQuestions(questions);
        }

        return () => {
            getQuestions()
        }
    }, []);


    // useEffect(() => {
    //     const saveQ = async () => {
    //         for (const q of my_questions) {
    //             await addDoc(questionsCollection, {
    //                 ...q
    //             })
    //         }
    //     }

    //     return () => {
    //         saveQ()
    //     }
    // }, [])


    return (
        <div className='w-full h-[500px] overflow-scroll'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="Questions"> 
                    <TableHead className='bg-black py-3'>
                        <TableRow>
                            <TableCell><h3 className={`${oswald.className} text-lg text-white font-semibold`}>Question</h3></TableCell>
                            <TableCell align="left"><h3 className={`${oswald.className} text-lg text-white font-semibold`}>Title</h3></TableCell>
                            <TableCell align="left"><h3 className={`${oswald.className} text-lg text-white font-semibold`}>Solved</h3></TableCell>
                            <TableCell align="left"><h3 className={`${oswald.className} text-lg text-white font-semibold`}>Submitted</h3></TableCell>
                            <TableCell align="left"><h3 className={`${oswald.className} text-lg text-white font-semibold`}></h3></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className='overflow-scroll'>
                        {questions.map((q) => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                className='bg-black py-5 overflow-y-scroll'
                            >
                                <TableCell component="th" scope="row">
                                    <h3 className={`${oswald.className} text-lg text-white font-semibold`}>Question 1</h3>
                                </TableCell>
                                <TableCell align="right"><h3 className={`${oswald.className} text-lg text-white font-semibold text-left`}>{q.title}</h3></TableCell>
                                <TableCell align="right"><h3 className={`${oswald.className} text-lg text-white font-semibold text-left`}>{SolvedOrSubmitted(q.id, programmer.questions_solved)}</h3></TableCell>
                                <TableCell align="right"><h3 className={`${oswald.className} text-lg text-white font-semibold text-left`}>{SolvedOrSubmitted(q.id, programmer.questions_submitted)}</h3></TableCell>
                                <TableCell align="right">
                                    <button className='flex flex-row gap-2 items-center px-10 py-2 bg-[#0077cc] rounded-md' onClick={() => router.push(`/competitive_programming/start_challenge/${q.id}`)}>
                                        <p className={`${oswald.className} text-xl text-white`}>View</p>
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    )
}

export default QuestionsList