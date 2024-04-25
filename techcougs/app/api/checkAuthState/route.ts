import { NextResponse } from 'next/server';
import { auth } from '@/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';


async function getUser() {
    return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            resolve(authUser);
            unsubscribe();
        });
    });
}

export async function GET() {
    try {
        const user = await getUser(); // Await the promise returned by getUser()
        return NextResponse.json({ user });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Something went wrong. Please try again' });
    }
}