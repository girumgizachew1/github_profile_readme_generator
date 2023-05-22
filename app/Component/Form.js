import React, { useState } from 'react';
import { setGeneratedReadme } from '../Redux/Readme';
import { useDispatch } from 'react-redux';
import TitleSection from './FormComponent/TitleSection';
import SubtitleSection from './FormComponent/SubtitleSection';
function Form() {
    const dispatch = useDispatch();

{/*tittle */}
    const [titleone, setTitleone] = useState('Hi 👋, I am');
    const [titletwo, setTitletwo] = useState('');
    const handleTitleChange = (event) => {
        setTitleone(event.target.value);
    };
    const handleTitleTwoChange = (event) => {
        setTitletwo(event.target.value);
    };

{/*subttile */}
    const [subtitle, setSubtitle] = useState('A passionate frontend developer from Ethiopia');
    const handleSubtitleChange = (event) => {
        setSubtitle(event.target.value);
    };


{/*work */}
    const [currently, setCurrently] = useState('🔭 I’m currently working on');
    const [currentlyProjectName, setCurrentlyProjectName] = useState('');
    const [currentlyProjectLink, setCurrentlyProjectLink] = useState('');

    const [collaborate, setCollaborate] = useState('👯 I’m looking to collaborate on');
    const [collaborateProjectName, setCollaborateProjectName] = useState('');
    const [collaborateProjectLink, setCollaborateProjectLink] = useState('');


    const [help, setHelp] = useState('🤝 I’m looking for help with');
    const [helpProjectName, setHelpProjectName] = useState('');
    const [helpProjectLink, setHelpProjectLink] = useState('');




    const handleCurrentlyChange = (event) => {
        setCurrently(event.target.value);
    };

    const handleCurrentlyProjectNameChange = (event) => {
        setCurrentlyProjectName(event.target.value);
    };

    const handleCurrentlyProjectLinkChange = (event) => {
        setCurrentlyProjectLink(event.target.value);
    };



    const handleCollaborateChange = (event) => {
        setCollaborate(event.target.value);
    };

    const handleCollaborateProjectNameChange = (event) => {
        setCollaborateProjectName(event.target.value);
    };

    const handleCollaborateProjectLinkChange = (event) => {
        setCollaborateProjectLink(event.target.value);
    };



    const handleHelpChange = (event) => {
        setHelp(event.target.value);
    };

    const handleHelpProjectNameChange = (event) => {
        setHelpProjectName(event.target.value);
    };

    const handleHelpProjectLinkChange = (event) => {
        setHelpProjectLink(event.target.value);
    };

    const generateReadme = () => {
        const readmeContent = `
        <h1 align="center">${titleone} ${titletwo}</h1>
        <h3 align="center">${subtitle}</h3>
        ${currently} <a href="${currentlyProjectLink}">${currentlyProjectName}</a>
        <br/>
        ${collaborate} <a href="${collaborateProjectLink}">${collaborateProjectName}</a>
        <br/>
        ${help} <a href="${helpProjectLink}">${helpProjectName}</a>
        <p align="left">
        </p>
`;
        dispatch(setGeneratedReadme(readmeContent));
        // Logic to do something with the generated README content
    };

    return (
        <div className='space-y-6 justify-center p-2 w-full bg-zinc-100 text-zinc-600' >
            <TitleSection titleone={titleone} titletwo={titletwo} handleTitleChange={handleTitleChange} handleTitleTwoChange={handleTitleTwoChange} />
          
            <SubtitleSection subtitle={subtitle} handleSubtitleChange={handleSubtitleChange} />
          

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
            </div>
            <button className='px-6 py-2 flex justify-right bg-zinc-700 text-zinc-100 rounded-lg' onClick={generateReadme}>Generate Read me</button>
        </div>
    );
}

export default Form;


