import Header from '@/layouts/CompProg/Header';
import React from 'react';
import Questions from '@/layouts/CompProg/Questions';

function Page() {
  // Check if window is defined before using it
  const isClient = typeof window !== 'undefined';

  return (
    <main className='w-full min-h-screen'>
      {isClient && <Header />}
      <Questions />
    </main>
  );
}

export default Page;
