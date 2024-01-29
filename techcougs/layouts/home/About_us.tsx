import React from 'react'
import Image from 'next/image'

function About_us() {
  return (
      <section className='min-h-screen w-full flex md:flex-row flex-col items-center justify-between px-5 md:px-10 lg:px-20 py-10'>
        <div className="w-full flex flex-col gap-3 h-full">
            
        </div>
        <div className="w-full flex items-center h-full justify-center">
              <div 
                  style={{ backgroundImage: "url('https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                  backgroundRepeat: "no-repeat",}}
              className="bg-center bg-cover h-[600px] w-full"></div>
        </div>
    </section>
  )
}

export default About_us