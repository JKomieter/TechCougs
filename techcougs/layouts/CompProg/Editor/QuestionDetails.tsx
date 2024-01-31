import { QuestionType } from '@/types'
import { Oswald } from 'next/font/google';
import React from 'react'


const oswald = Oswald({ subsets: ["latin"], weight: ["200", "300", "400", "500", "700"] });

function QuestionDetails({
  question
}: {
  question: QuestionType
}) {

  return (
    <div className='w-full h-full flex flex-col gap-6 justify-center items-center p-8'>
      <h1 className={`font-bold text-white text-6xl ${oswald.className} w-full text-left`}>1. {question?.title}</h1>
      <div className={` text-white font-thin text-2xl w-full text-left ${oswald.className}`} dangerouslySetInnerHTML={{ __html: question?.description }}/>
      <div className="flex flex-col gap-4 w-full">
        {
          question?.examples?.map((q, i) => (
            <div key={i} className="flex flex-col gap-2 w-full">
              <p className={`font-thin text-xl text-white ${oswald.className} w-full text-left`}>
                <b>Input: {i + 1}.</b> {q.input}
              </p>
              <p className={`font-thin text-xl text-white ${oswald.className} w-full text-left`}>
                <b>Output: </b>{q.output}
              </p>
              <p className={`font-thin text-xl text-white ${oswald.className} w-full text-left`}>
                <b>Explanation: </b> {q.explanation}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default QuestionDetails