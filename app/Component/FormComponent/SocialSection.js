import React, { useState } from 'react'

import {
    BsGithub, BsTwitter, BsStackOverflow,
    BsLinkedin,
    BsFacebook,
    BsInstagram,
    BsDribbble,
    BsYoutube,
    BsMedium,
    BsBehance
} from 'react-icons/bs';
import { FaCodepen, FaDev, FaFacebook, FaInstagram, FaKaggle } from 'react-icons/fa';
import { AiFillCodeSandboxCircle, AiOutlineCodepenCircle, AiOutlineCodeSandbox } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';


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
                <div className='flex space-x-3 text-sm text-zinc-600'>
                    <BsLinkedin className='w-8 h-8' />
                    <input
                        type="text"
                        id="title"
                        value={twitter}
                        onChange={handleTwitterChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />
                </div>
            </div>

            <div className='space-x-3 flex'>
                <div className='flex space-x-2 text-sm text-zinc-600'>
                    <FaDev className='w-8 h-8' />
                    <input
                        type="text"
                        id="title"
                        value={github}
                        onChange={handleGithubChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />
                </div>
                <div className='flex space-x-3 text-sm text-zinc-600'>
                    <FaCodepen className='w-8 h-8' />
                    <input
                        type="text"
                        id="title"
                        value={twitter}
                        onChange={handleTwitterChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />
                </div>

                <div className='flex space-x-3 text-sm text-zinc-600'>
                    <FaFacebook className='w-8 h-8' />
                    <input
                        type="text"
                        id="title"
                        value={twitter}
                        onChange={handleTwitterChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />
                </div>
            </div>



            <div className='space-x-3 flex'>
                <div className='flex space-x-2 text-sm text-zinc-600'>
                    <AiFillCodeSandboxCircle className='w-8 h-8' />
                    <input
                        type="text"
                        id="title"
                        value={github}
                        onChange={handleGithubChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />
                </div>
                <div className='flex space-x-2 text-sm text-zinc-600'>
                    <BsStackOverflow className='w-8 h-8' />
                    <input
                        type="text"
                        id="title"
                        value={github}
                        onChange={handleGithubChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />
                </div>
                <div className='flex space-x-2 text-sm text-zinc-600'>
                    <FaInstagram className='w-8 h-8' />
                    <input
                        type="text"
                        id="title"
                        value={github}
                        onChange={handleGithubChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />
                </div>

            </div>



            <div className='space-x-3 flex'>
                <div className='flex space-x-2 text-sm text-zinc-600'>
                    <BsDribbble className='w-8 h-8' />
                    <input
                        type="text"
                        id="title"
                        value={github}
                        onChange={handleGithubChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />
                </div>
                <div className='flex space-x-2 text-sm text-zinc-600'>
                    <BsYoutube className='w-8 h-8' />
                    <input
                        type="text"
                        id="title"
                        value={github}
                        onChange={handleGithubChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />
                </div>
                <div className='flex space-x-2 text-sm text-zinc-600'>
                    <FaKaggle className='w-8 h-8' />
                    <input
                        type="text"
                        id="title"
                        value={github}
                        onChange={handleGithubChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />
                </div>

            </div>



            <div className='space-x-3 flex'>
                <div className='flex space-x-2 text-sm text-zinc-600'>
                    <BsMedium className='w-8 h-8' />
                    <input
                        type="text"
                        id="title"
                        value={github}
                        onChange={handleGithubChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />
                </div>
                <div className='flex space-x-2 text-sm text-zinc-600'>
                    <BsBehance className='w-8 h-8' />
                    <input
                        type="text"
                        id="title"
                        value={github}
                        onChange={handleGithubChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />
                </div>
                <div className='flex space-x-2 text-sm text-zinc-600'>
                    <SiLeetcode className='w-8 h-8' />
                    <input
                        type="text"
                        id="title"
                        value={github}
                        onChange={handleGithubChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />
                </div>

            </div>

        </div>
    )
}

export default SocialSection