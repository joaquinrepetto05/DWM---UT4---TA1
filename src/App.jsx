import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <div>
        <Card title="Task 1" description="This is a description of task 1" assignedTo="John Doe" startDate="2021-10-01" endDate="2021-10-15" />
      </div>

      <div>
        <Card title="Task 2" description="This is a description of task 2" assignedTo="Roger Stuart" startDate="2021-10-15" endDate="2021-10-29" />  
      </div>
    </>
  )
}

export default App