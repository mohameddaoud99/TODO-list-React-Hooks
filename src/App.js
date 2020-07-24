import React from 'react';
import { useState } from 'react';

function App() {
    const [mytask, SetMytask] = useState("")
    const [tasks, SetTasks] = useState([])

    const handleChange = (e) => {
        e.preventDefault();
        SetMytask(e.target.value)
    }
    const addTasks = (e) => {
        e.preventDefault();
        SetTasks([...tasks, { name: mytask, id: tasks.length }]);
        SetMytask("")

    };

    const deleteTasks = (id) => {
        SetTasks(tasks.filter(el => el.id != id))
    }


    const EditTask = (id) => {
        let x = prompt('give me your new task here')
        SetTasks(tasks.map(el => (el.id == id) ? { id: id, mytask: x } : el))
        console.log(x)
    }





    return (
        <div className="App">
            <form id="to-do-form" onSubmit={addTasks}>
                <input placeholder="Enter text" type="text" name="task" value={mytask} onChange={handleChange}></input>
                <button id="add-button" type="submit">Add task</button>
            </form>




            <ul className="unlist"> {tasks.map(task => <li className="list" key={task.id}>
                <span>{task.name}</span>
                <span>{task.mytask}</span>
                <button onClick={() => deleteTasks(task.id)}> X </button>
                <button onClick={() => EditTask(task.id)}>Edit</button>

            </li>
            )} </ul>






        </div>
    );
}

export default App;