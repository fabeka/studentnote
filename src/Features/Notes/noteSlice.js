import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const noteSlice = createSlice ({
    name:'notes',
    initialState,
    reducers:{
        addNote: (state, action) =>{
                 state.push(action.payload);
        },
        editNote: (state, action) =>{
            const {id, title, date, noteText} = action.payload;
            const existingNote = state.find(note => note.id === id);
            if (existingNote){
                existingNote.title = title; 
                existingNote.date = date;
                existingNote.noteText = noteText
            }

        },
        deleteNote: (state, action) =>{
            const {id} = action.payload;
            const existingNote = state.find(note => note.id === id);
            if(existingNote){
                return state.filter(user => user.id !== id);
            }
        }   
    }
});

export const {addNote, editNote, deleteNote} = noteSlice.actions
export default noteSlice. reducer;