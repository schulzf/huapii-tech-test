import { configureStore } from '@reduxjs/toolkit';
import educationReducer from './slices/educationSlice';

export const store = configureStore({
  reducer: {
    education: educationReducer,
  },
});
