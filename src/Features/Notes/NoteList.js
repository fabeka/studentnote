import React from 'react';
import { ImBin, ImPencil } from "react-icons/im";
import Button from '../../Components/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from './noteSlice';


const UserList = () => {
  const dispatch = useDispatch();
  const notes = useSelector(store => store.notes);
   const handleDelete = (id) =>{
     dispatch(deleteNote({id}));
   }

  const renderCard = () => notes.map(note => (
    <div className="bg-gray-300 p-5 flex items-center justify-between" key={note.id}>
      <div><h3 className=" font-bold text-lg text-gray-700">{note.title}</h3>
        <span className="font-normal  text-gray-600">{note.date}</span>
        <p className="font-normal  text-gray-600">{note.noteText}</p>
      </div>
      <div className="flex gap-4">
        <Link to={`edit_user/${note.id}`}><button><ImPencil /></button></Link>
        <button onClick={() => handleDelete(note.id)}>
          <ImBin />
        </button>
      </div>
    </div>
  ))

  return (
    <div>
      <Link to="/add_note"><Button>Add Note</Button></Link>
      <div className="grid gap-5 md:grid-cols-2">
        {notes.length ? renderCard() : <p className="text-center col-span-2
       text-gray-700 font-semibold"> No Note Available</p>}
      </div>
    </div>
  )
}

export default UserList;
