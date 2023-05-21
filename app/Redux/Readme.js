// readmeSlice.js

import { createSlice } from '@reduxjs/toolkit';

const readmeSlice = createSlice({
  name: 'readme',
  initialState: '',
  reducers: {
    setGeneratedReadme: (state, action) => {
      return action.payload;
    },
  },
});

export const { setGeneratedReadme } = readmeSlice.actions;
export default readmeSlice.reducer;
