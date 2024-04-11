import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Fab ,Box, Container , FormControl, TextField} from '@mui/material';
import { addTask } from '../Redux/actions';
import { useDispatch } from 'react-redux';

function TaskInput() {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      setTask(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (task.trim() !== '') {
        dispatch(addTask(task));
        setTask('');
      }
    };

  return (
   <Container className='Container' maxWidth='sm'>
            <br/>
            <h1>To-Do List</h1>
            <br />
        
            <form onSubmit={handleSubmit}>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <FormControl>
                    <TextField label='Add the Task Here' value={task} onChange={handleChange} required={true} fullWidth={true}  />
                </FormControl>
                <Fab size="medium" color="secondary" aria-label="add" type="submit">
                    <AddIcon/>
                </Fab>
                </Box>
            </form>
                
            
        
    </Container>
      

  )
}

export default TaskInput
