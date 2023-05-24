import React, { useState } from 'react';
import { setGeneratedReadme } from '../Redux/Readme';
import { useDispatch } from 'react-redux';
import TitleSection from './FormComponent/TitleSection';
import SubtitleSection from './FormComponent/SubtitleSection';
import WorkSection from './FormComponent/WorkSection';
import ProfileSection from './FormComponent/ProfileSection';
import LanguagesSection from './FormComponent/LanguagesSection';
import SocialSection from './FormComponent/SocialSection';
import Checkbox from './FormComponent/Checkbox';
import SupportSection from './FormComponent/SupportSection';
function Form() {
    const dispatch = useDispatch();

    {/*tittle */ }
    const [titleone, setTitleone] = useState('Hi 👋, I am');
    const [titletwo, setTitletwo] = useState('');
    const handleTitleChange = (event) => {
        setTitleone(event.target.value);
    };
    const handleTitleTwoChange = (event) => {
        setTitletwo(event.target.value);
    };

    {/*subttile */ }
    const [subtitle, setSubtitle] = useState('A passionate frontend developer from Ethiopia');
    const handleSubtitleChange = (event) => {
        setSubtitle(event.target.value);
    };


    {/*work */ }
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


    {/*Profile*/ }
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
    const [portfoliohead, setPortfolioHead] = useState('👨‍💻 All of my projects are available at');
    const [portfolio, setPortfolio] = useState('');
    const handlePortfolioHeadChange = (event) => {
        setPortfolioHead(event.target.value);
    };

    const handlePortfolioChange = (event) => {
        setPortfolio(event.target.value);
    };

    //Blog
    const [bloghead, setBlogHead] = useState('📝 I regularly write articles on');
    const [blog, setBlog] = useState('');
    const handleBlogHeadChange = (event) => {
        setBlogHead(event.target.value);
    };

    const handleBlogChange = (event) => {
        setBlog(event.target.value);
    };


    //Resume
    const [resumehead, setResumeHead] = useState('Know about my experiences 📄 ');
    const [resume, setResume] = useState('');
    const handleResumeHeadChange = (event) => {
        setResumeHead(event.target.value);
    };

    const handleResumeChange = (event) => {
        setResume(event.target.value);
    };


    //Fun fact
    const [funfacthead, setFunfactHead] = useState('⚡ Fun fact');
    const [funfact, setFunfact] = useState('');
    const handleFunfactHeadChange = (event) => {
        setFunfactHead(event.target.value);
    };

    const handleFunfactChange = (event) => {
        setFunfact(event.target.value);
    };


    {/* Social */ }


    //github
    const [github, setGithub] = useState('');
    const handleGithubChange = (event) => {
        setGithub(event.target.value);
    };


    //twiter
    const [twitter, setTwitter] = useState('');
    const handleTwitterChange = (event) => {
        setTwitter(event.target.value);
    };





    const [showVisitorsCount, setShowVisitorsCount] = useState(false);
    const [showProfileStats, setShowProfileStats] = useState(false);
    const [showTopSkills, setShowTopSkills] = useState(false);
    const [showStreakStats, setShowStreakStats] = useState(false);
    const handleVisitorsCountChange = () => {
        setShowVisitorsCount(!showVisitorsCount);
    };

    const handleProfileStatsChange = () => {
        setShowProfileStats(!showProfileStats);
    };

    const handleTopSkillsChange = () => {
        setShowTopSkills(!showTopSkills);
    };

    const handleStreakStatsChange = () => {
        setShowStreakStats(!showStreakStats);
    };




    {/*this is where i generated the readme*/ }
    const generateReadme = () => {
        const title = `${titleone} ${titletwo}`;
        const visitorsContent = showVisitorsCount && github ? `<p align="left"> <img src="https://komarev.com/ghpvc/?username=${github}&label=Profile%20views&color=0e75b6&style=flat" alt="girumgizachew1" /> </p>` : '';
        const githubProfileStatuscard = showProfileStats && github ? `<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=${github}&show_icons=true&locale=en" alt="${github}" /></p>` : '';
        const topSkills = showTopSkills && github ? `        <p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=${github}&show_icons=true&locale=en&layout=compact" alt="${github}" /></p>
        ` : '';
        const streakStats = showStreakStats && github ? `        <p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=${github}&" alt="${github}" /></p>
        ` : '';



        const readmeContent = `
          <h1 align="center">${title}</h1>
          <h3 align="center">${subtitle}</h3>
          ${visitorsContent}
          ---<br/>
          ${currently} <a href="${currentlyProjectLink}">${currentlyProjectName}</a>
          <br/>
          -${learnhead} **${learn}**
          <br/>
          ${collaborate} <a href="${collaborateProjectLink}">${collaborateProjectName}</a>
          <br/>
          ${help} <a href="${helpProjectLink}">${helpProjectName}</a>
          ${topSkills}
          ${githubProfileStatuscard}
          ${streakStats}
          <a href="https://twitter.com/${twitter}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="danikt" height="30" width="40" /></a>
          <p align="left">
          </p>
        `;
        dispatch(setGeneratedReadme(readmeContent));
        // Logic to do something with the generated README content
    };

    return (
        <div className='space-y-6 bg-zinc-50 px-10 justify-center p-2  text-zinc-600  shadow-sm shadow-zinc-300 rounded-sm ' >
            <TitleSection titleone={titleone} titletwo={titletwo} handleTitleChange={handleTitleChange} handleTitleTwoChange={handleTitleTwoChange} />
            <SubtitleSection subtitle={subtitle} handleSubtitleChange={handleSubtitleChange} />

            <WorkSection
                currently={currently}
                currentlyProjectLink={currentlyProjectLink}
                currentlyProjectName={currentlyProjectName}
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
            <LanguagesSection />


            <ProfileSection
                learnhead={learnhead}
                learn={learn}
                ask={ask}
                askhead={askhead}
                email={email}
                emailhead={emailhead}
                portfolio={portfolio}
                portfoliohead={portfoliohead}
                bloghead={bloghead}
                blog={blog}
                resume={resume}
                resumehead={resumehead}
                funfact={funfact}
                funfacthead={funfacthead}
                handleLearnChange={handleLearnChange}
                handleLearnHeadChange={handleLearnHeadChange}
                handleAskChange={handleAskChange}
                handleAskHeadChange={handleAskHeadChange}
                handleEmailChange={handleEmailChange}
                handleEmailHeadChange={handleEmailHeadChange}
                handlePortfolioChange={handlePortfolioChange}
                handlePortfolioHeadChange={handlePortfolioHeadChange}
                handleBlogChange={handleBlogChange}
                handleBlogHeadChange={handleBlogHeadChange}
                handleResumeChange={handleResumeChange}
                handleResumeHeadChange={handleResumeHeadChange}
                handleFunfactChange={handleFunfactChange}
                handleFunfactHeadChange={handleFunfactHeadChange}



            />

            <SocialSection
                github={github}
                handleGithubChange={handleGithubChange}
                twitter={twitter}
                handleTwitterChange={handleTwitterChange}
            />



            <div>
                <div className="p-4 space-y-6 ">
                    <h1 className='text-xl font-semibold'>Adds-On</h1>
                    <Checkbox
                        label="Display Visitors Count Badge"
                        checked={showVisitorsCount}
                        onChange={handleVisitorsCountChange}
                    />
                    <Checkbox
                        label="Display GitHub Profile Stats Card"
                        checked={showProfileStats}
                        onChange={handleProfileStatsChange}
                    />
                    <Checkbox
                        label="Display Top Skills"
                        checked={showTopSkills}
                        onChange={handleTopSkillsChange}
                    />
                    <Checkbox
                        label="Display GitHub Streak Stats"
                        checked={showStreakStats}
                        onChange={handleStreakStatsChange}
                    />
                </div>

            </div>
            <SupportSection />
            <div className='flex justify-between w-full' >
                <div></div>
                <button className='px-6 py-2 flex justify-right bg-zinc-600 text-zinc-100 rounded-lg' onClick={generateReadme}>Generate Read me</button>
            </div>
        </div>
    );
}

export default Form;


