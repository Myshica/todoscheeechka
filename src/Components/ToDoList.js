import React, {useEffect} from 'react';
import './Styles/ToDoList.css'
import './Styles/Item.css'
import Item from './Item'

const saveTasksToLocalStorage = (updatedTasks) => {
    // const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // tasks.push(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

const deleteTasksToLocalStorage = (updatedTasks) => {
    // const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // tasks.splice(tasks.indexOf(updatedTasks), 1);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

function ToDoList(props) {
    const [tasks, setTasks] = React.useState([]);
    const [newText, setNewText] = React.useState('');

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    function addTask() {
        if (newText === undefined || newText === '') {
            alert('Please enter a new text task');
            return
        }
        const newTask = { id: Date.now(), text: newText};
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    }

    function onUpdate(id, updatedText) {
        try {
            const updatedTasks = tasks.map((task) =>
                task.id === id ? {...task, text: updatedText}: task
            );
            setTasks(updatedTasks);
            saveTasksToLocalStorage(updatedTasks);
        }
        catch (error) {
            console.error(error);
        }
    }


    function deleteTask(id) {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    }


    return (
        <div>
            <div className="list">
                {tasks.map((task) => (
                    <Item id={task.id}
                          key={task.id}
                          text={task.text}
                          onDelete={() => deleteTask(task.id)}
                          onUpdate={(id, updatedText) => onUpdate(id, updatedText)}/>
                ))}
            </div>

            <div className="items">
                <input type="text"
                       className="newTaskName"
                       value={newText}
                       onChange={(e) => setNewText(e.target.value)}
                       placeholder="Input task">
                </input>

                <button className="addBtn"
                        onClick={addTask}
                        enterKeyHint={addTask}>
                </button>
            </div>
        </div>
    );
}

export default ToDoList;