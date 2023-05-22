import React from 'react'

function SocialSection({
    github,
    handleGithubChange,
    twitter,
    handleTwitterChange
}) {
    return (
        <div>
            <h1 className='text-xl font-semibold'>Social</h1>
            <div className='space-y-3'>
                <div className='space-x-4 text-sm text-zinc-600'>
                    <input
                        type="text"
                        id="title"
                        value={github}
                        onChange={handleGithubChange}
                        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                    />
                </div>
                <div className='space-x-4 text-sm text-zinc-600'>
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