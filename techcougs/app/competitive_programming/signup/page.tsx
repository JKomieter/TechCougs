"use client"
import LoadingScreen from '@/components/LoadingScreen';
import SignUp from '@/layouts/CompProg/SignUp'
import React, { useState } from 'react'


function Page() {
  const [isLoading, setIsLoading] = useState(false);

  return (
      <main>
          <div style={{
              backgroundImage: "url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800')",
              backgroundRepeat: "no-repeat",
              filter: "brightness(0.3)",
              position: "absolute"
          }}
              className="absolute -z-10 h-[100vh] w-full bg-cover bg-center"></div>
      {isLoading && <LoadingScreen />}
        <SignUp setIsLoading={setIsLoading} isLoading={isLoading} />
      </main>
  )
}

export default Page