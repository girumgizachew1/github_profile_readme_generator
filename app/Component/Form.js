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
    <div>
      <h1>Github Profile Readme Generator</h1>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="subtitle">Subtitle:</label>
        <input
          type="text"
          id="subtitle"
          value={subtitle}
          onChange={handleSubtitleChange}
        />
      </div>
      <button onClick={generateReadme}>Generate README</button>
    </div>
  );
}

export default Form;
