import React from 'react'

function WorkSection({
    currently,
    currentlyProjectName,
    currentlyProjectLink,
    collaborate,
    collaborateProjectName,
    collaborateProjectLink,
    help,
    helpProjectName,
    helpProjectLink,
    handleCurrentlyChange,
    handleCurrentlyProjectNameChange,
    handleCurrentlyProjectLinkChange,
    handleCollaborateChange,
    handleCollaborateProjectNameChange,
    handleCollaborateProjectLinkChange,
    handleHelpChange,
    handleHelpProjectNameChange,
    handleHelpProjectLinkChange,
  }) {
    return (
        <div className='space-y-3' >
            <h1 className='text-xl font-semibold' >Work</h1>
            <div className='space-x-4 text-sm text-zinc-600' >
                <input
                    type="text"
                    id="title"
                    value={currently}
                    onChange={handleCurrentlyChange}
                    className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                />
                <input
                    type="text"
                    id="title"
                    value={currentlyProjectName}
                    onChange={handleCurrentlyProjectNameChange}
                    className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                />
                <input
                    type="text"
                    id="title"
                    value={currentlyProjectLink}
                    onChange={handleCurrentlyProjectLinkChange}
                    className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                />
            </div>



            <div className='space-x-4 text-sm text-zinc-600' >
                <input
                    type="text"
                    id="title"
                    value={collaborate}
                    onChange={handleCollaborateChange}
                    className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                />
                <input
                    type="text"
                    id="title"
                    value={collaborateProjectName}
                    onChange={handleCollaborateProjectNameChange}
                    className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                />
                <input
                    type="text"
                    id="title"
                    value={collaborateProjectLink}
                    onChange={handleCollaborateProjectLinkChange}
                    className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                />
            </div>


            <div className='space-x-4 text-sm text-zinc-600' >
                <input
                    type="text"
                    id="title"
                    value={help}
                    onChange={handleHelpChange}
                    className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                />
                <input
                    type="text"
                    id="title"
                    value={helpProjectName}
                    onChange={handleHelpProjectNameChange}
                    className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                />
                <input
                    type="text"
                    id="title"
                    value={helpProjectLink}
                    onChange={handleHelpProjectLinkChange}
                    className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
                />
            </div>
        </div>)
}

export default WorkSection