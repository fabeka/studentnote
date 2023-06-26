import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './Features/Notes/noteSlice'

export const store = configureStore({
  reducer:{
       notes: notesReducer
  },
})