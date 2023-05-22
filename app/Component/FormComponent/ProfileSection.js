import React from 'react'

function ProfileSection({
    learnhead,
    learn,
    handleLearnHeadChange,
    handleLearnChange,

    askhead,
    ask,
    handleAskHeadChange,
    handleAskChange,

    emailhead,
    email,
    handleEmailHeadChange,
    handleEmailChange,


    portfoliohead,
    portfolio,
    handlePortfolioHeadChange,
    handlePortfolioChange,

    bloghead,
    blog,
    handleBlogHeadChange,
    handleBlogChange,

    resumehead,
    resume,
    handleResumeHeadChange,
    handleResumeChange,


    funfacthead,
    funfact,
    handleFunfactHeadChange,
    handleFunfactChange,




}) {
  return (
    <div className='space-y-3'>
    <h1 className='text-xl font-semibold'>Profile</h1>
    <div className='space-x-4 text-sm text-zinc-600'>
      <input
        type="text"
        id="title"
        value={learnhead}
        onChange={handleLearnHeadChange}
        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
      />
      <input
        type="text"
        id="title"
        value={learn}
        onChange={handleLearnChange}
        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
      />
    </div>

    <div className='space-x-4 text-sm text-zinc-600'>
      <input
        type="text"
        id="title"
        value={askhead}
        onChange={handleAskHeadChange}
        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
      />
      <input
        type="text"
        id="title"
        value={ask}
        onChange={handleAskChange}
        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
      />
    </div>


    <div className='space-x-4 text-sm text-zinc-600'>
      <input
        type="text"
        id="title"
        value={emailhead}
        onChange={handleEmailHeadChange}
        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
      />
      <input
        type="text"
        id="title"
        value={email}
        onChange={handleEmailChange}
        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
      />
    </div>

    <div className='space-x-4 text-sm text-zinc-600'>
      <input
        type="text"
        id="title"
        value={portfoliohead}
        onChange={handlePortfolioHeadChange}
        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
      />
      <input
        type="text"
        id="title"
        value={portfolio}
        onChange={handlePortfolioChange}
        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
      />
    </div>



    <div className='space-x-4 text-sm text-zinc-600'>
      <input
        type="text"
        id="title"
        value={bloghead}
        onChange={handleBlogHeadChange}
        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
      />
      <input
        type="text"
        id="title"
        value={blog}
        onChange={handleBlogChange}
        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
      />
    </div>


    <div className='space-x-4 text-sm text-zinc-600'>
      <input
        type="text"
        id="title"
        value={resumehead}
        onChange={handleResumeHeadChange}
        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
      />
      <input
        type="text"
        id="title"
        value={resume}
        onChange={handleResumeChange}
        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
      />
    </div>

    <div className='space-x-4 text-sm text-zinc-600'>
      <input
        type="text"
        id="title"
        value={funfacthead}
        onChange={handleFunfactHeadChange}
        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
      />
      <input
        type="text"
        id="title"
        value={funfact}
        onChange={handleFunfactChange}
        className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
      />
    </div>
  </div>
  )
}

export default ProfileSection