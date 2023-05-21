import React, { useState } from 'react';

function Form() {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubtitleChange = (event) => {
        setSubtitle(event.target.value);
    };

    const generateReadme = () => {
        // Logic to generate the README using the entered title and subtitle
        console.log('Generating README...');
    };

    return (
        <div className='space-y-10 justify-center p-2 w-full' >
            <div>
                <h1 className='text-xl' >Title</h1>
                <div className='space-x-4' >
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
            </div>
            <button className='border border-zinc-800 px-6 py-2 flex justify-right' onClick={generateReadme}>Generate Read me</button>
        </div>
    );
}

export default Form;
