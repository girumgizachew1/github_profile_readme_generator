import React from 'react'

import { GrView } from "react-icons/gr";
import { BiCopy } from "react-icons/bi";
import { AiOutlineDownload } from "react-icons/ai";
import { FaFileCode } from "react-icons/fa";




function Generated() {
  return (
    <div className='w-full h-full' >
      <div className='flex space-x-2 mb-4 justify-between text-sm' >
        <button className='border-2 bg-zinc-50 border-zinc-800 px-6 py-2 flex justify-right space-x-2'  ><BiCopy className='w-5 h-5' /> <h1>Copy MarkDown</h1></button>
        <button className='border-2 bg-zinc-50 border-zinc-800 px-6 py-2 flex justify-right space-x-2'  ><AiOutlineDownload className='w-5 h-5' /> <h1>DownLoad MarkDown</h1></button>
        <button className='border-2 bg-zinc-50 border-zinc-800 px-6 py-2 flex justify-right space-x-2'  ><FaFileCode className='w-5 h-5' /> <h1>DownLoad Backup</h1> </button>
        <button className='border-2 bg-zinc-50 border-zinc-800 px-6 py-2 flex justify-right space-x-2'  ><GrView className='w-5 h-5' /> <h1>Preview</h1></button>

      </div>
      <div className='border bg-zinc-50 border-zinc-800 w-full h-full' >

      </div>
    </div>
  )
}

export default Generated