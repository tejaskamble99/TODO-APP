import React from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import './App.css'
import { Container,Card } from '@mui/material'
function App() {
  return (
    <Container maxWidth="lg">
      <Card variant="outlined"  style={{ backgroundColor: '#F1EF99', padding: '20px', marginTop: '20px' }}>
        <TaskInput />
        <TaskList />
      </Card>
    </Container>
  )
}

export default App
