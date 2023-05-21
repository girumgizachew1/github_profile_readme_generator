// store.js

import { configureStore } from '@reduxjs/toolkit';
import readmeReducer from './Readme';

const store = configureStore({
  reducer: {
    readme: readmeReducer,
  },
});

export default store;
