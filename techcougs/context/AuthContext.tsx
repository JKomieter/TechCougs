"use client";
import React, { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'react';
import { auth } from '@/firebase/config';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext({});

function AuthProvider({
    children
}: {
    children: ReactNode
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [authData, setAuthData] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user && pathname.includes("start_challenge")) router.push("/competitive_programming/signup")
        })
    }, [pathname, auth])


    return (
        <AuthContext.Provider value={[authData]}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }