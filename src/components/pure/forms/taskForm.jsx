import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
const TaskForm = ({add}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.Normal) 

    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(newTask);
    }

    return (
        <form onSubmit={addTask} className='d-flex justifyt-content-center aling-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-md' required autoFocus placeholder='Task name'/>
                <input ref={descriptionRef} id='inputDesc' type='text' className='form-control form-control-md' required placeholder='Task description'/>
                <label htmlFor='selectLevel' className='sr-only'>Priority </label>
                <select ref={levelRef} defaultValue={LEVELS.Normal} id='selectLevel'>
                    <option value={LEVELS.Normal}>Normal</option>
                    <option value={LEVELS.Urgent}>Urgent</option>
                    <option value={LEVELS.Blocking}>Blocking</option>
                </select>
            </div>
            <button type='submit' className='btn btn-success btn-sm ms-2'>Add</button>
        </form>
    );
}


TaskForm.propTypes = {
    add: PropTypes.func.isRequired
}
export default TaskForm;
