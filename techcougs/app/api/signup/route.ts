import { NextResponse } from "next/server";
import { auth, db } from "@/firebase/config";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore";


export async function POST(request: Request) {
    try {
        const { email, password, username } = await request.json();
        await createUserWithEmailAndPassword(auth, email, password);
        const programmersCollection = collection(db, "Programmers");
        await addDoc(programmersCollection, {
            email,
            username,
            disqualified: false,
            score: 0,
            questions_solved: [],
            time_left: {
                hours: 30000000,
                minutes: 0,
                seconds: 0
            },
            questions_submitted: []
        });
        return NextResponse.json({message: "It worked"})
    } catch (error) {
        console.log(error);
        NextResponse.json({message: "Something went wrong. Try again"})
    }
}