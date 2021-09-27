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

  // Delete Task
  const deleteTask = (id) => {
   // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !==id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      <Header title='Task Tracker' />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
        :
        ('No Tasks')
      }
    </div>
  )
}

export default App

