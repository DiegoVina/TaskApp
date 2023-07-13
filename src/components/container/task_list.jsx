import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description 1', true, LEVELS.Normal)
    const defaultTask2= new Task('Example2', 'Description 2', false, LEVELS.Urgent)
    const defaultTask3= new Task('Example3', 'Description 3', false, LEVELS.Blocking)



    //Component state
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);
    

    //Lifecycle control
    useEffect(() => {
        console.log("Task state has been modified")
        setLoading(false);
        return () => {
            console.log("Task list component is going to unmount")
        };
    }, [tasks]);

    function completeTask(task){
        console.log('Complete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks]
        tempTasks[index].completed = !tempTasks[index].completed;
        /** 
         * We update the state of the component
         * and the iteration of the tasks in order to show
         * the state change
        */
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Delete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks]
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }
    
    function addTask(task){
        console.log('Delete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks]
        tempTasks.push(task);
        setTasks(tempTasks);

    }


    const changeCompleted = (id) => {
        console.log("TODO: Cambiar el estado de una tarea");
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your tasks: </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar= "true" style={{position: "relative", height: "400px"}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*Iterating over task list */}
                                {tasks.map((task, index) =>{
                                    return(
                                        <TaskComponent
                                        key={index}
                                        task={task}
                                        complete={completeTask}
                                        remove={deleteTask}
                                        ></TaskComponent>
                                        )
                                    }
                                )}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <TaskForm add={addTask}></TaskForm>
            {/* TODO: Aplicar un For/Map para renderizar una lista */}
        </div>
    );
};



export default TaskListComponent;
