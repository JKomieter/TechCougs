import Header from '@/layouts/CompProg/Header';
import React from 'react';
import Questions from '@/layouts/CompProg/Questions';

function Page() {

  return (
    <main className='w-full min-h-screen'>
      <Header />
      <Questions />
    </main>
  );
}

export default Page;
