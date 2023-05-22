import React from 'react'

// Separate component for the Subtitle section
function SubtitleSection({ subtitle, handleSubtitleChange }) {
    return (
      <div className='space-y-3'>
        <h1 className='text-xl font-semibold'>Sub Title</h1>
        <input
          type="text"
          id="subtitle"
          value={subtitle}
          onChange={handleSubtitleChange}
          className="w-full text-sm text-zinc-600  border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
        />
      </div>
    );
  }
export default SubtitleSection