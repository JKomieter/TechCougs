import React from 'react'
import { CircularProgress } from '@mui/material'

function LoadingScreen() {
  return (
    <main className='z-10 absolute h-[100vh] w-full bg-white/25 flex justify-center items-center'>
        <CircularProgress color='primary' size={100} />
    </main>
  )
}

export default LoadingScreen