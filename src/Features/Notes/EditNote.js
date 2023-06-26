import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '../../Components/TextField';
import Button from '../../Components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { editNote } from './noteSlice';

const EditNote = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const notes = useSelector(store=> store.notes);
    const navigate = useNavigate();
    const existingNote = notes.filter(note=>note.id === params.id);
    const {title, date, noteText} = existingNote[0];
    const [values, setValues] = useState({
      title,
      date,
      noteText
    });
  
    const handleAddNote = () => {
      setValues({title:'', date:'', noteText:''});
      dispatch(editNote({
        id: params.id,
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
        inputProps={{ type: 'textera', placeholder: 'hello' }}
        />
  
      <br />
      <Button onClick={handleAddNote}>Edit</Button>
    </div>
    )
  
}

export default EditNote;
