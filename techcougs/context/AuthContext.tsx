"use client";
import React, { ReactNode, useEffect } from 'react'
import { createContext } from 'react';
import { auth } from '@/firebase/config';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import axios from 'axios';

const AuthContext = createContext({});

function AuthProvider({
    children
}: {
    children: ReactNode
}) {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const checkIfStillAuth = async () => {
            try {
                const res = await axios.get("/api/checkAuthState");
                const path = pathname.split("/");
                const data = await res.data;
                console.log("Repond", res)
                if (data.user === null && (path.includes("start_challenge") || path.includes("waiting"))) {
                    router.push("/competitive_programming/signup");
                }
            } catch (error) {
                console.error("Error checking auth state:", error);
            }
        };
        checkIfStillAuth();

    }, [usePathname]);

  return (
    <AuthContext.Provider value={[]}>
        {children}
    </AuthContext.Provider>
  )
}

export  {AuthContext, AuthProvider}