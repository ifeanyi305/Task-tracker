import { useState, useEffect } from "react";
import Header from "./components/Header";
import Task from "./components/Tasks";
import Addtask from "./components/Addtask"
function App() {
  const [showAddTasks, setShowAddTasks] = useState(false)
  const [tasks, setTasks] = useState(
    [
      // {
      //   id: 1,
      //   text: 'Doctors appointment',
      //   day: 'Feb 5th at 2:30pm',
      //   reminder: true,
      // },
      // {
      //   id: 2,
      //   text: 'Nurse appointment',
      //   day: 'Feb 8th at 4:30pm',
      //   reminder: true,
      // },
      // {
      //   id: 3,
      //   text: 'Poctors appointment',
      //   day: 'Feb 1st at 9:30pm',
      //   reminder: false,
      // }
    ]
  )

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()
  }, [])

  //fetch task
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  //fetch reminder task
  const FetchTasks = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }
  
  //delete functon
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    //the method above is to delete a task from the api(server)

    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = async (id) => {
   const taskToToggle = await FetchTasks(id)
   const updTask = { ...taskToToggle,
    reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) => task.id === id ? {
        ...task, reminder: data.reminder
      } : task)
    )
  }

  //Add Task
  const addTask = async (task) => {
   const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task)
   })

   const data = await res.json()
   setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 
    // 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <Header title="Task tracker" onAdd={() => 
      setShowAddTasks(!showAddTasks) } showAdd={showAddTasks} />
      {showAddTasks && <Addtask onAdd={addTask} />}
      {/* the && is a short tenary operator for if-else statement */}
      {tasks.length > 0 ? (<Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : 'No Task to show'}
    </div>
  );
}

export default App;
