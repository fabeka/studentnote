import AddNote from './Features/Notes/AddNote';
import EditNote from './Features/Notes/EditNote';
import NoteList from './Features/Notes/NoteList';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className='text-center font-bold text-2xl text-gray-700 mb-5'>Student Notebook</h1>
        
        <Routes>
          <Route path="/" element={<NoteList />}/>
          <Route path="/add_note" element={<AddNote />}/>
          <Route path="/edit_user/:id" element={<EditNote />}/>
        </Routes>
    </div>
  );
}

export default App;
