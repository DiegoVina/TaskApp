import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({task, complete, remove}) => {

    useEffect(() => {
        console.log ("Task created")
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    /**
     * Function that returns a badge
     * depending on the level of the task
     */

    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.Normal:
                return(<h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)

            case LEVELS.Urgent:
                return(<h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)

            case LEVELS.Blocking:
                return(<h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
            default:
                break;
        }
    }

    /**
     * Function that returns icon depending on completion
     */

    function taskCompletedIcon(){
        if(task.completed){
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: "green", fontWeight: "bold"}}></i>)
        }else{
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color: "grey"}}></i>)
        }
    }

    return (
        <tr className={task.completed ? 'task-completed': 'task-pending' }>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td>
                <span className='align-middle'>{task.description}</span>
            </td>
            <td>
                {/*Executuion of function to return badge element*/}
                <span className='align-middle'>{taskLevelBadge()}</span>
            </td>
            <td>
            {/*Execution of function that returns icon depending on completion*/}
                {taskCompletedIcon()}
                <i className='bi-trash task-action' style={{color: "tomato"}} onClick={() => remove(task)}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
