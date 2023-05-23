import React, { useState, useEffect } from 'react';
import { GrView } from 'react-icons/gr';
import { BiCopy } from 'react-icons/bi';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaFileCode } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import 'github-markdown-css/github-markdown.css';
function Generated() {
  const generatedReadme = useSelector(state => state.readme);
  const iframeContent = generatedReadme
  const [MarkdownView, setMarkdownView] = useState(true)



  return (
    <div className="w-full h-full">
      <div className="flex space-x-2 mb-4 justify-between text-sm">

        <button
          className="px-6 py-2 flex justify-right bg-zinc-600 text-zinc-100 rounded-lg flex space-x-2"
          onClick={() => {
            navigator.clipboard.writeText(generatedReadme);
            // Add any additional logic or UI feedback as needed
          }}
        >
          <BiCopy className="w-5 h-5" /> <h1>Copy Markdown</h1>
        </button>

        <button
          className="px-6 py-2 flex justify-right bg-zinc-600 text-zinc-100 rounded-lg flex space-x-2"
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
          className="px-6 py-2 flex justify-right bg-zinc-600 text-zinc-100 rounded-lg flex space-x-2"
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

        <button className="px-6 py-2 flex justify-right bg-zinc-600 text-zinc-100 rounded-lg flex space-x-2" onClick={() => { setMarkdownView(!MarkdownView) }} >
          <GrView className="w-5 h-5" /> {MarkdownView ?<h1> Preview </h1>: <h1> Markdown </h1>}
        </button>
      </div>
      <div className="space-y-4">
        {MarkdownView ?
          <div className="bg-zinc-100 h-screen text-zinc-600 py-4">
            <pre className="max-w-2xl mx-auto whitespace-pre-wrap">{generatedReadme}</pre>
          </div>
          :
          <div className="bg-zinc-100 text-zinc-600 h-screen py-4">
            <iframe className="w-full h-full text-zinc-600" srcDoc={iframeContent} />
          </div>

        }


      </div>

    </div>

  );
}

export default Generated;
