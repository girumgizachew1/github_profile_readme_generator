import React from 'react'


// Separate component for the Title section
function TitleSection({ titleone, titletwo, handleTitleChange, handleTitleTwoChange }) {
    return (
      <div className='space-y-3'>
        <h1 className='text-xl font-semibold'>Title</h1>
        <div className='space-x-4 text-sm text-zinc-600'>
          <input
            type="text"
            id="title"
            value={titleone}
            onChange={handleTitleChange}
            className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
          />
          <input
            type="text"
            id="title"
            value={titletwo}
            onChange={handleTitleTwoChange}
            className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
          />
        </div>
      </div>
    );
  }

export default TitleSection