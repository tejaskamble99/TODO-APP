import { Check, Delete } from '@mui/icons-material'
import { Card, CardContent, Container, IconButton, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../Redux/actions';


function TaskList() {
  const tasks =useSelector(state => state.tasks);
  const dispatch =useDispatch();

  const handleDelete =(taskId) =>{
    dispatch(deleteTask(taskId));
  }
  return (
    <div>
          <Container className='task-list'>
      {tasks.map(task => (
        <Card key={task.id} variant='outlined' style={{marginTop: 35, background:'gray'}} >
          <CardContent>
            <Typography>
              <IconButton>
                <Check style={{color:'green'}}/>
              </IconButton>
              {task.text}
              <IconButton style={{float:'right'}} onClick={() => handleDelete(task.id)}>
                <Delete  style={{color:'red'}} />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
    </div>
  )
}

export default TaskList



