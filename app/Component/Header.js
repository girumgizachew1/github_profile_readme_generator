import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <header className="w-full h-40 flex flex-col ">
      <div className='bg-zinc-700 flex w-full h-14 justify-between fixed ' >
        <div className='flex space-x-4' >
          <div className="h-16 mt-2">
            <Image src="/logo2.png" alt="Logo" width={100} height={100} className='ml-10 w-10 h-10' />
          </div>
          <h1 className="mr-10 text-xl text-zinc-200 font-bold text-center mt-4">GitHub Profile Readme Generator</h1>
        </div>
      </div>
      <div className="flex justify-center mt-20 space-x-4">
        <button href="https://github.com/your-github-link" target="_blank" rel="noopener noreferrer" className="px-6 py-2 flex justify-right bg-zinc-600 text-zinc-100 rounded-lg">
          Star this repo
        </button>
        <button href="https://buymeacoffee.com/your-coffee-link" target="_blank" rel="noopener noreferrer" className="px-6 py-2 flex justify-right bg-zinc-700 text-zinc-100 rounded-lg">
          Fork on Github
        </button>
      </div>
    </header>
  );
}

export default Header;
