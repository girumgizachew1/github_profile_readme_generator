import React from 'react'

import { BsGithub, BsTwitter } from 'react-icons/bs';
function SocialSection({
    github,
    handleGithubChange,
    twitter,
    handleTwitterChange
}) {
    return (
        <div className='space-y-6' >
            <h1 className='text-xl font-semibold'>Social</h1>
            <div className='space-x-3 flex'>
                <div className='flex space-x-2 text-sm text-zinc-600'>
                    <BsGithub className='w-8 h-8' />
                    <input
                        type="text"
                        id="title"
                        value={github}
                        onChange={handleGithubChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />
                </div>
                <div className='flex space-x-3 text-sm text-zinc-600'>
                <BsTwitter className='w-8 h-8' />
                    <input
                        type="text"
                        id="title"
                        value={twitter}
                        onChange={handleTwitterChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />
                </div>
            </div>

            

        </div>
    )
}

export default SocialSection