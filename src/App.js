import React, { Component, useState  } from 'react';

/// Modifica el componente para que se puedan agregar tareas

const App = () => {

const [tasks, setTasks] = useState([]);

const addTask = (task) => {
    setTasks([...tasks, task]);
    document.getElementById("new-task").value = ""
  };

    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
            <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" onKeyDown={(e) => e.key === 'Enter' && addTask(e.target.value)} />
        </div>
      </div>
    )
  }


export default App;
