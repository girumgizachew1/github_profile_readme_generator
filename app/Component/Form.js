import React, { useState } from 'react';
import { setGeneratedReadme } from '../Redux/Readme';
import { useDispatch } from 'react-redux';
import TitleSection from './FormComponent/TitleSection';
import SubtitleSection from './FormComponent/SubtitleSection';
import WorkSection from './FormComponent/WorkSection';
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
//currently
    const [currently, setCurrently] = useState('🔭 I’m currently working on');
    const [currentlyProjectName, setCurrentlyProjectName] = useState('');
    const [currentlyProjectLink, setCurrentlyProjectLink] = useState('');
    const handleCurrentlyChange = (event) => {
        setCurrently(event.target.value);
    };

    const handleCurrentlyProjectNameChange = (event) => {
        setCurrentlyProjectName(event.target.value);
    };

    const handleCurrentlyProjectLinkChange = (event) => {
        setCurrentlyProjectLink(event.target.value);
    };

//collaborate
    const [collaborate, setCollaborate] = useState('👯 I’m looking to collaborate on');
    const [collaborateProjectName, setCollaborateProjectName] = useState('');
    const [collaborateProjectLink, setCollaborateProjectLink] = useState('');
    const handleCollaborateChange = (event) => {
        setCollaborate(event.target.value);
    };

    const handleCollaborateProjectNameChange = (event) => {
        setCollaborateProjectName(event.target.value);
    };

    const handleCollaborateProjectLinkChange = (event) => {
        setCollaborateProjectLink(event.target.value);
    };

//needhelp
    const [help, setHelp] = useState('🤝 I’m looking for help with');
    const [helpProjectName, setHelpProjectName] = useState('');
    const [helpProjectLink, setHelpProjectLink] = useState('');
    const handleHelpChange = (event) => {
        setHelp(event.target.value);
    };

    const handleHelpProjectNameChange = (event) => {
        setHelpProjectName(event.target.value);
    };

    const handleHelpProjectLinkChange = (event) => {
        setHelpProjectLink(event.target.value);
    };
{/*Profile*/}
//learn
const [learnhead, setLearnHead] = useState('🌱 I’m currently learning');
const [learn, setLearn] = useState('');
const handleLearnHeadChange = (event) => {
    setLearnHead(event.target.value);
};

const handleLearnChange = (event) => {
    setLearn(event.target.value);
};

//ask
const [askhead, setAskHead] = useState('Ask me about 💬 ');
const [ask, setAsk] = useState('');
const handleAskHeadChange = (event) => {
    setAskHead(event.target.value);
};

const handleAskChange = (event) => {
    setAsk(event.target.value);
};

//email
const [emailhead, setEmailHead] = useState('How to reach me📫 ');
const [email, setEmail] = useState('');
const handleEmailHeadChange = (event) => {
    setEmailHead(event.target.value);
};

const handleEmailChange = (event) => {
    setEmail(event.target.value);
};

//Portfolio
const [portfoliohead, setPortfolioHead] = useState('How to reach me📫 ');
const [portfolio, setPortfolio] = useState('');
const handlePortfolioHeadChange = (event) => {
    setPortfolioHead(event.target.value);
};

const handlePortfolioChange = (event) => {
    setPortfolio(event.target.value);
};
















    {/*this is where i generated the readme*/}
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
            <WorkSection 
            currently={currently}
            currentlyProjectLink={collaborateProjectLink}
            currentlyProjectName={collaborateProjectName}
            handleCurrentlyChange={handleCurrentlyChange}
            handleCurrentlyProjectLinkChange={handleCurrentlyProjectLinkChange}
            handleCurrentlyProjectNameChange={handleCurrentlyProjectNameChange}
            
            collaborate={collaborate} 
            handleCollaborateChange={handleCollaborateChange} 
            collaborateProjectLink={collaborateProjectLink} 
            handleCollaborateProjectLinkChange={handleCollaborateProjectLinkChange}
            collaborateProjectName={collaborateProjectName}
            handleCollaborateProjectNameChange={handleCollaborateProjectNameChange}
            
            help={help}
            helpProjectLink={helpProjectLink}
            helpProjectName={helpProjectName}
            handleHelpChange={handleHelpChange}
            handleHelpProjectLinkChange={handleHelpProjectLinkChange}
            handleHelpProjectNameChange={handleHelpProjectNameChange}
             />
            
            <button className='px-6 py-2 flex justify-right bg-zinc-600 text-zinc-100 rounded-lg' onClick={generateReadme}>Generate Read me</button>
        </div>
    );
}

export default Form;


