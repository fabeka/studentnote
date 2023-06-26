import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import TextField from '../../Components/TextField';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';
import { addNote } from './noteSlice';



const AddNote = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: '',
    date: '',
    noteText: ''
  });

  const handleAddNote = () => {
    setValues({title:'', date:'', noteText:''});
    dispatch (addNote ({
      id:uuidv4(),
      title: values.title,
      date: values.date,
      noteText: values.noteText

    }));
    navigate ('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
    <TextField
      label="Note Title"
      value={values.title}
      onChange={(e) => setValues({ ...values, title: e.target.value })}
      inputProps={{ type: 'text', placeholder: ' Am note Yvonne' }}
    />
    <br />
    <TextField
      label="Date Recorded"
      value={values.date}
      onChange={(e) => setValues({ ...values, date: e.target.value })}
      inputProps={{ type: 'date', placeholder: '12-06-2023' }}
      />
     <TextField
      label="Note"
      value={values.noteText}
      onChange={(e) => setValues({ ...values, noteText: e.target.value })}
      inputProps={{ type: 'textarea', placeholder: 'hello' }}
      />

    <br />
    <Button onClick={handleAddNote}>Submit</Button>
  </div>
  )
}


export default AddNote
