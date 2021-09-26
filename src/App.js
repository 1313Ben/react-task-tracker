import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

import React from 'react'

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th',
      reminder: true,
    },
    {
      id: 2,
      text: 'Doctors Appointment two',
      day: 'Feb 6th',
      reminder: true,
    },
    {
      id: 3,
      text: 'Doctors Appointment three',
      day: 'Feb 7th',
      reminder: true,
    },
    {
      id: 4,
      text: 'Doctors Appointment four',
      day: 'Feb 8th',
      reminder: true,
    }

  ])

  return (
    <div className='container'>
      <Header title='Task Tracker'/>
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App

