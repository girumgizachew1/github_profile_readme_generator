import React, { useState, useEffect } from 'react';
import { GrView } from 'react-icons/gr';
import { BiCopy } from 'react-icons/bi';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaFileCode } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Generated() {
  const generatedReadme = useSelector(state => state.readme);


  return (
    <div className="w-full h-full">
      <div className="flex space-x-2 mb-4 justify-between text-sm">

        <button
          className="border-2 bg-zinc-50 border-zinc-800 px-6 py-2 flex justify-right space-x-2"
          onClick={() => {
            navigator.clipboard.writeText(generatedReadme);
            // Add any additional logic or UI feedback as needed
          }}
        >
          <BiCopy className="w-5 h-5" /> <h1>Copy Markdown</h1>
        </button>

        <button
          className="border-2 bg-zinc-50 border-zinc-800 px-6 py-2 flex justify-right space-x-2"
          onClick={() => {
            const element = document.createElement('a');
            const file = new Blob([generatedReadme], { type: 'text/plain' });
            element.href = URL.createObjectURL(file);
            element.download = 'generated_readme.md';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
          }}
        >
          <AiOutlineDownload className="w-5 h-5" /> <h1>Download Markdown</h1>
        </button>

        <button
          className="border-2 bg-zinc-50 border-zinc-800 px-6 py-2 flex justify-right space-x-2"
          onClick={() => {
            const backupData = {
              generatedReadme: generatedReadme,
            };
            const jsonData = JSON.stringify(backupData);
            const element = document.createElement('a');
            const file = new Blob([jsonData], { type: 'application/json' });
            element.href = URL.createObjectURL(file);
            element.download = 'generated_readme_backup.json';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
          }}
        >
          <FaFileCode className="w-5 h-5" /> <h1>Download Backup</h1>
        </button>

        <button className="border-2 bg-zinc-50 border-zinc-800 px-6 py-2 flex justify-right space-x-2">
          <GrView className="w-5 h-5" /> <h1>Preview</h1>
        </button>
      </div>
      <div className='space-y-4' >
        <div className="border bg-zinc-50 border-zinc-800 w-full h-full space-y-4">
          <pre>{generatedReadme}</pre>

        </div>
        <div
          className="border bg-zinc-50 border-zinc-800 w-full h-96"
          dangerouslySetInnerHTML={{ __html: generatedReadme }}
        />
      </div>
    </div>

  );
}

export default Generated;
