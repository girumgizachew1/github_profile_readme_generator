import React, { useState } from 'react'
import {
  BsGithub, BsTwitter, BsStackOverflow,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsDribbble,
  BsYoutube,
  BsMedium,
  BsBehance
} from 'react-icons/bs';
import { FaCodepen, FaDev, FaFacebook, FaInstagram, FaKaggle } from 'react-icons/fa';
import { AiFillCodeSandboxCircle, AiOutlineCodepenCircle, AiOutlineCodeSandbox } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';


function SocialSection({
  github,
  handleGithubChange,
  twitter,
  handleTwitterChange,
  linkedin,
  handleLinkedinChange,
  devto,
  handleDevtoChange,
  codepen,
  handleCodepenChange,
  facebook,
  handleFacebookChange,
  codesandbox,
  handleCodesandboxChange,
  stackoverflow,
  handleStackoverflowChange,
  instagram,
  handleInstagramChange,
  dribbble,
  handleDribbbleChange,
  youtube,
  handleYoutubeChange,
  kaggle,
  handleKaggleChange,
  leetcode,
  handleLeetcodeChange,
  behance,
  handleBehanceChange,
  medium,
  handleMediumChange,
}) {
  return (
    <div className='space-y-6' >
      <div className='space-x-2' >
        <h1 className='text-xl font-semibold'>Social</h1>
        <h1 className='text-sm'>Please add you socials url only</h1>
      </div>
      <div className='space-x-3 flex'>
        <div className='flex space-x-2 text-sm text-zinc-600'>
          <BsGithub className='w-8 h-8' />
          <input
            type="text"
            id="github"
            value={github}
            onChange={handleGithubChange}
            placeholder="GitHub URL"
            className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
          />
        </div>
        <div className='flex space-x-3 text-sm text-zinc-600'>
          <BsTwitter className='w-8 h-8' />
          <input
            type="text"
            id="twitter"
            value={twitter}
            onChange={handleTwitterChange}
            placeholder="Twitter URL"
            className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
          />
        </div>
        <div className='flex space-x-3 text-sm text-zinc-600'>
          <BsLinkedin className='w-8 h-8' />
          <input
            type="text"
            id="linkedin"
            value={linkedin}
            onChange={handleLinkedinChange}
            placeholder="LinkedIn URL"
            className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
          />
        </div>
      </div>


      <div className='space-x-3 flex'>
        <div className='flex space-x-2 text-sm text-zinc-600'>
          <FaDev className='w-8 h-8' />
          <input
            type="text"
            id="devto"
            value={devto}
            onChange={handleDevtoChange}
            placeholder="Dev.to URL"
            className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
          />
        </div>
        <div className='flex space-x-3 text-sm text-zinc-600'>
          <FaCodepen className='w-8 h-8' />
          <input
            type="text"
            id="codepen"
            value={codepen}
            onChange={handleCodepenChange}
            placeholder="CodePen URL"
            className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
          />
        </div>
        <div className='flex space-x-3 text-sm text-zinc-600'>
          <FaFacebook className='w-8 h-8' />
          <input
            type="text"
            id="facebook"
            value={facebook}
            onChange={handleFacebookChange}
            placeholder="Facebook URL"
            className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
          />
        </div>
      </div>





      <div className='space-x-3 flex'>
        <div className='flex space-x-2 text-sm text-zinc-600'>
          <AiFillCodeSandboxCircle className='w-8 h-8' />
          <input
            type="text"
            id="codesandbox"
            value={codesandbox}
            onChange={handleCodesandboxChange}
            placeholder="CodeSandbox URL"
            className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
          />
        </div>
        <div className='flex space-x-2 text-sm text-zinc-600'>
          <BsStackOverflow className='w-8 h-8' />
          <input
            type="text"
            id="stackoverflow"
            value={stackoverflow}
            onChange={handleStackoverflowChange}
            placeholder="Stack Overflow URL"
            className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
          />
        </div>
        <div className='flex space-x-2 text-sm text-zinc-600'>
          <FaInstagram className='w-8 h-8' />
          <input
            type="text"
            id="instagram"
            value={instagram}
            onChange={handleInstagramChange}
            placeholder="Instagram URL"
            className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
          />
        </div>
      </div>


      <div className='space-x-3 flex'>
        <div className='flex space-x-2 text-sm text-zinc-600'>
          <BsDribbble className='w-8 h-8' />
          <input
            type="text"
            id="dribbble"
            value={dribbble}
            onChange={handleDribbbleChange}
            placeholder="Dribbble URL"
            className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
          />
        </div>
        <div className='flex space-x-2 text-sm text-zinc-600'>
          <BsYoutube className='w-8 h-8' />
          <input
            type="text"
            id="youtube"
            value={youtube}
            onChange={handleYoutubeChange}
            placeholder="YouTube URL"
            className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
          />
        </div>
        <div className='flex space-x-2 text-sm text-zinc-600'>
          <FaKaggle className='w-8 h-8' />
          <input
            type="text"
            id="kaggle"
            value={kaggle}
            onChange={handleKaggleChange}
            placeholder="Kaggle URL"
            className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
          />
        </div>
      </div>

      <div className='space-x-3 flex'>
        <div className='flex space-x-2 text-sm text-zinc-600'>
          <BsMedium className='w-8 h-8 text-zinc-600' />
          <input
            type="text"
            id="medium"
            value={medium}
            onChange={handleMediumChange}
            placeholder="Medium URL"
            className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
          />
        </div>
        <div className='flex space-x-2 text-sm text-zinc-600'>
          <BsBehance className='w-8 h-8 text-zinc-600' />
          <input
            type="text"
            id="behance"
            value={behance}
            onChange={handleBehanceChange}
            placeholder="Behance URL"
            className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
          />
        </div>
        <div className='flex space-x-2 text-sm text-zinc-600'>
          <SiLeetcode className='w-8 h-8 text-zinc-600' />
          <input
            type="text"
            id="leetcode"
            value={leetcode}
            onChange={handleLeetcodeChange}
            placeholder="LeetCode URL"
            className="border border-zinc-300 focus:border-zinc-800 outline-none px-4 py-2 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none"
          />
        </div>
      </div>



    </div>
  )
}

export default SocialSection