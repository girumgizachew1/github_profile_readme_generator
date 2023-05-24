import React from 'react';
import Image from 'next/image';

import { AiOutlineStar } from 'react-icons/ai';
import { BiGitRepoForked } from 'react-icons/bi';


function Header() {
  return (
    <header className="w-full h-28 flex flex-col ">
      <div className='bg-zinc-100 shadow-lg shadow-zinc-200 flex w-full h-14 justify-between fixed ' >
        <div className='flex space-x-4' >
          <div className="h-16 mt-2">
            <Image src="/logo2.png" alt="Logo" width={100} height={100} className='ml-10 w-10 h-10' />
          </div>
          <h1 className="mr-10 text-xl text-zinc-800  font-bold text-center mt-4">GitHub Profile</h1>
        </div>

      </div>
      <div className="flex justify-center mt-20 space-x-4">
        <button href="https://github.com/your-github-link" target="_blank" rel="noopener noreferrer" className="space-x-2  px-6 py-2 flex justify-right bg-yellow-500 text-white font-bold rounded-lg">
          <AiOutlineStar className='w-5 h-5 animate-spin'  />
          <h1>Star this repo</h1>
        </button>
        <button href="https://buymeacoffee.com/your-coffee-link" target="_blank" rel="noopener noreferrer" className="space-x-2 px-6 py-2 flex justify-right bg-yellow-500 text-white font-semibold rounded-lg">
          <BiGitRepoForked className='w-5 h-5 animate-bounce' />
          <h1>Fork on Github</h1>
        </button>
      </div>
    </header>
  );
}

export default Header;
