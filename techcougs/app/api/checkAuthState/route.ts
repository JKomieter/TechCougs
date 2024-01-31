import { NextResponse } from 'next/server';
import { auth } from '@/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

export async function GET() {
    try {
        const user = await new Promise((resolve) => {
            const unsubscribe = onAuthStateChanged(auth, (authUser) => {
                resolve(authUser);
                unsubscribe(); // Ensure to unsubscribe once the user state is resolved
            });
        });
        
        return NextResponse.json({ user: user || null });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Something went wrong. Please try again' });
    }
}
