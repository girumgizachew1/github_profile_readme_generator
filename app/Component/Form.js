import React, { useState } from 'react';
import { setGeneratedReadme } from '../Redux/Readme';
import { useDispatch } from 'react-redux';
function Form() {
    const dispatch = useDispatch();
    const [titleone, setTitleone] = useState('Hi 👋, I am');
    const [titletwo, setTitletwo] = useState('');

    const [subtitle, setSubtitle] = useState('A passionate frontend developer from Ethiopia');

    const handleTitleChange = (event) => {
        setTitleone(event.target.value);
    };

    const handleTitletwoChange = (event) => {
        setTitletwo(event.target.value);
    };

    const handleSubtitleChange = (event) => {
        setSubtitle(event.target.value);
    };

    const generateReadme = () => {
        const readmeContent = `
        <h1 align="center">${titleone} ${titletwo}</h1>
        <h3 align="center">${subtitle}</h3>

        <h3 align="left">Connect with me:</h3>
        <p align="left">
        </p>
`;
        dispatch(setGeneratedReadme(readmeContent));
        // Logic to do something with the generated README content
    };

    return (
        <div className='space-y-10 justify-center p-2 w-full' >
            <div className='space-y-3' >
                <h1 className='text-xl font-semibold' >Title</h1>
                <div className='space-x-4' >
                    <input
                        type="text"
                        id="title"
                        value={titleone}
                        onChange={handleTitleChange}
                        className="border-b border-zinc-800 focus:border-zinc-800 outline-none"
                    />
                    <input
                        type="text"
                        id="title"
                        value={titletwo}
                        onChange={handleTitletwoChange}
                        className="border-b border-zinc-800 focus:border-zinc-800 outline-none"
                    />          </div>
            </div>
            <div className='space-y-3' >
                <h1 className='text-xl font-semibold' >Sub Title</h1>
                <input
                    type="text"
                    id="subtitle"
                    value={subtitle}
                    onChange={handleSubtitleChange}
                    className="border-b border-zinc-800 focus:border-zinc-800 outline-none w-auto"
                />

            </div>
            <button className='border border-zinc-800 px-6 py-2 flex justify-right' onClick={generateReadme}>Generate Read me</button>
        </div>
    );
}

export default Form;
