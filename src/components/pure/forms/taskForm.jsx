import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
const TaskForm = ({add, length}) => {

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

    const  normalStyle = {
        color: 'white',
        backgroundColor: 'blue',
    }

    const  urgentStyle = {
        color: 'white',
        backgroundColor: 'orange',
    }

    const  blockingStyle = {
        color: 'white',
        backgroundColor: 'red',
    }

    return (
        <form onSubmit={addTask} className='d-flex justifyt-content-center aling-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-md' required autoFocus placeholder='Task name'/>
                <input ref={descriptionRef} id='inputDesc' type='text' className='form-control form-control-md' required placeholder='Task description'/>
                <select ref={levelRef} className='form-control form-control-md' defaultValue={LEVELS.Normal} id='selectLevel'>
                    <option style={normalStyle} value={LEVELS.Normal}>Priority: normal</option>
                    <option style={urgentStyle} value={LEVELS.Urgent}>Priority: urgent</option>
                    <option style={blockingStyle} value={LEVELS.Blocking}>Priority: blocking</option>
                </select>
            <button type='submit' className='btn btn-success btn-md ms-2'>
            {length > 0 ? 'Another one' : 'Add task'}
            </button>
            </div>
        </form>
    );
}


TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}
export default TaskForm;
