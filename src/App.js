import React from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import './App.css'
function App() {
  return (
    <div >
   <card className='container'>   
      <TaskInput />
      <TaskList/>
      </card>
    </div>
  )
}

export default App
