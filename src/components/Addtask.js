import { useState } from "react";

const Addtask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text || !day) {
      alert('please add a task and date/time')
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
     <div className='form-control'>
      <lable>Task</lable>
      <input type='text' 
      placeholder='Add task' value={text} 
      onChange={(e) => setText(e.target.value)} />
     </div>
     <div className='form-control'>
      <lable>Date & time</lable>
      <input type='text' 
      placeholder='add day & time'
      value={day} 
      onChange={(e) => setDay(e.target.value)} />
     </div>
     <div className='form-control form-control-check'>
      <lable>Reminder</lable>
      <input type='checkbox'
      checked={reminder}
      value={reminder} 
      onChange={(e) => setReminder(e.currentTarget.checked)} />
     </div>
     <input type='submit' value='save task' className='btn btn-block' />
    </form>
  );
};

export default Addtask;