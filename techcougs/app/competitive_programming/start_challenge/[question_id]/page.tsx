"use client"
import React, { useEffect, useState } from 'react'
import QuestionDetails from '@/layouts/CompProg/Editor/QuestionDetails'
import MainEditor from '@/layouts/CompProg/Editor/MainEditor'
import { usePathname } from 'next/navigation'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { QuestionType } from '@/types'
import { useRouter } from 'next/navigation'
import axios from 'axios'

function Page() {
  const pathname = usePathname();
  const questionId = "" + pathname.split("/")[3];
  const [question, setQuestion ] = useState<QuestionType>({} as QuestionType)
  const [programmer_id, setProgrammerId] = useState("");
  const programmersCollection = collection(db, "Programmers");
  const questionsCollection = collection(db, "Questions");

  useEffect(() => {
    const getQuestion = async () => {
        const res = await axios.get("/api/checkAuthState")
        if (!res.data.user) return;
        console.log(questionId);
        const search = query(questionsCollection, where("id", "==", questionId))
        const q = await getDocs(search);
        if (q.docs.length <= 0) return;
        const data = {id: q.docs[0]?.id, ...q.docs[0]?.data()} as QuestionType;
        const user = query(programmersCollection, where("email", "==", res.data.user.email));
        const userData = await getDocs(user);
        setProgrammerId(userData.docs[0]?.id);
        setQuestion(data);
    }

      getQuestion()
    
  }, [questionId, ])

  return (
    <main className='min-h-screen w-full flex flex-row'>
        <QuestionDetails question={question} />
        <MainEditor question={question} programmer_id={programmer_id} />
    </main>
  )
}

export default page